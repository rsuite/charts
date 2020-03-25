import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import { isSeriesOption } from './utils';
import './theme/rsuite_light';

const styles = {
  blockCenter: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loaderWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)'
  }
};

const defaultOption = {
  grid: {
    containLabel: true
  }
};

// ECharts with empty message and loading
class ECharts extends Component {
  static propTypes = {
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    loading: PropTypes.bool,
    option: PropTypes.object,
    locale: PropTypes.shape({
      emptyMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
      loading: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    })
  };

  static defaultProps = {
    height: 300,
    locale: {
      emptyMessage: 'No data found',
      loading: 'Loading...'
    },
    option: {}
  };

  static childContextTypes = {
    setChartOption: PropTypes.func,
    series: PropTypes.arrayOf(PropTypes.object)
  };

  constructor(props) {
    super(props);
    this.state = {
      option: {}
    };
  }

  getChildContext() {
    const { children } = this.props;
    return {
      setChartOption: this.setOption,
      series: Children.toArray(children).filter(comp => isSeriesOption(comp))
    };
  }

  setOption = func => this.setState(({ option }) => ({ option: func(option) }));

  bindEChartsRef = ref => {
    this.echarts = ref && ref.getEchartsInstance();
  };

  /**
   * option 覆盖优先级
   * 1. defaultOption 为底
   * 2. props.option
   * 3. state.option (components 的 props)
   */
  buildOption() {
    return _merge({}, defaultOption, this.props.option, this.state.option);
  }

  renderEmptyMessage() {
    const { locale } = this.props;
    return (
      <div className="rs-echarts-body-info" style={styles.blockCenter}>
        {locale.emptyMessage}
      </div>
    );
  }

  renderLoader() {
    const { locale } = this.props;
    return (
      <div
        className="rs-echarts-loader-wrap"
        style={{ ...styles.blockCenter, ...styles.loaderWrap }}
      >
        {locale.loading}
      </div>
    );
  }

  render() {
    const {
      height,
      className,
      style,
      children,
      loading,
      option: optionFromProps,
      ...echartsForReactProps
    } = this.props;
    const option = children ? this.buildOption() : optionFromProps;
    const dataEmpty =
      !option.series ||
      option.series.reduce((empty, serie) => empty && (!serie.data || serie.data.length < 1), true);

    return (
      <div
        className={`rs-echarts ${className || ''}`}
        style={{ position: 'relative', height, ...style }}
      >
        {dataEmpty && this.renderEmptyMessage()}
        <ReactEchartsCore
          echarts={echarts}
          option={option}
          style={{ height: '100%', visibility: dataEmpty ? 'hidden' : 'visible' }}
          ref={this.bindEChartsRef}
          notMerge
          theme="rsuite_light"
          {...echartsForReactProps}
        />
        {children}
        {loading && this.renderLoader()}
      </div>
    );
  }
}

export default ECharts;
