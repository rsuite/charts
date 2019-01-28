import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';

import 'echarts/lib/component/graphic';

import { isSeriesOption } from './utils';

const defaultOption = {
  grid: {
    containLabel: true,
  },
  color: [
    '#34c3ff',
    '#a873e6',
    '#7ed321',
    '#13ba9e',
    '#1464ac',
    '#32a4d4',
    '#f5a623',
  ],
};


// ECharts with empty message and loading
class ECharts extends Component {

  static propTypes = {
    height: PropTypes.number,
    color: PropTypes.arrayOf(PropTypes.string),
    locale: PropTypes.shape({
      emptyMessage: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
      loading: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
    }),
  };

  static childContextTypes = {
    setChartOption: PropTypes.func,
    series: PropTypes.array,
  };

  state = {
    option: {
      ...defaultOption,
      color: this.props.color || defaultOption.color,
    },
  };

  getChildContext() {
    return {
      setChartOption: this.setOption,
      series: Children.toArray(this.props.children).filter(comp => isSeriesOption(comp)),
    };
  }

  setOption = func => this.setState(({ option }) => ({ option: func(option) }));

  render() {
    const {
      height = 300,
      locale = {
        emptyMessage: 'No data found',
        loading: 'Loading...',
      },
      className,
      style,
      children,
    } = this.props;
    const { option } = this.state;
    const dataEmpty = !option.series ||
      option.series.reduce((empty, serie) => empty && (!serie.data || serie.data.length < 1), true);

    function renderEmptyMessage() {
      return (
        <div
          className="rs-echarts-body-info"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {locale.emptyMessage}
        </div>
      );
    }

    return (
      <div className={`rs-echarts ${className}`} style={{ height, ...style }}>
        {
          dataEmpty ?
            renderEmptyMessage() :
            <ReactEchartsCore
              echarts={echarts}
              option={option}
              style={{ height: '100%' }}
              ref={(e) => {
                this.echarts = e && e.getEchartsInstance();
              }}
            />
        }
        {children}
      </div>
    );
  }
}

export default ECharts;
