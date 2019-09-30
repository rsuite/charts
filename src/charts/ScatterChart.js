import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Scatter from '../series/Scatter';

const xAxisProps = {
  axisLine: {
    symbol: ['none', 'arrow'],
    symbolSize: [9, 9]
  },
  nameLocation: 'center',
  nameGap: 25,
  nameTextStyle: {
    fontSize: 14,
    color: '#272c36'
  }
};

const yAxisProps = {
  axisLine: {
    show: true,
    symbol: ['none', 'arrow'],
    symbolSize: [9, 9]
  },
  splitLine: false,
  nameLocation: 'middle',
  nameGap: 35,
  nameTextStyle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#272c36'
  }
};

class ScatterChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any),
    tooltip: PropTypes.bool,
    legend: PropTypes.bool
  };

  static defaultProps = {
    data: [],
    tooltip: true,
    legend: true
  };

  static childContextTypes = {
    chartType: PropTypes.string,
    dataName: PropTypes.string
  };

  getChildContext() {
    const { name } = this.props;
    return {
      chartType: 'scatter',
      dataName: name
    };
  }

  renderDefaultScatter() {
    const { name, data } = this.props;

    return <Scatter name={name} data={data} />;
  }

  render() {
    const { name, data, children, tooltip, legend, ...props } = this.props;
    const components = Children.toArray(children);

    return (
      <ECharts {...props}>
        {!components.find(comp => comp.type === XAxis) && <XAxis {...xAxisProps} />}
        {!components.find(comp => comp.type === YAxis) && <YAxis {...yAxisProps} />}
        {!components.find(comp => comp.type === Scatter) && this.renderDefaultScatter()}
        {tooltip && <Tooltip />}
        {legend && <Legend icon="circle" itemHeight={10} itemWidth={10} itemGap={30} />}
        {components.map(child => {
          if (child.type === XAxis) {
            return cloneElement(child, _merge(xAxisProps, child.props));
          }
          if (child.type === YAxis) {
            return cloneElement(child, _merge(yAxisProps, child.props));
          }
          return child;
        })}
      </ECharts>
    );
  }
}

export default ScatterChart;
