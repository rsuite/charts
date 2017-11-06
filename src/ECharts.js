import React, { Component } from 'react';
import PropTypes from 'prop-types';
import echarts from 'echarts';
import onResize from 'element-resize-event';
import omit from 'lodash/omit';
import get from 'lodash/get';

const propTypes = {
  /*eslint-disable */
  style: PropTypes.object,
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  group: PropTypes.string,
  option: PropTypes.object.isRequired,
  // 是否不跟之前设置的option进行合并，默认为true，不合并
  notMerge: PropTypes.bool,
  // 在设置完option后是否不立即刷新画布，默认为false，即立即刷新
  notRefreshImmediately: PropTypes.bool,
  /*eslint-disable */
  onEvents: PropTypes.object
};

const defaultProps = {
  notMerge: true,
  notRefreshImmediately: false,
  onEvents: {},
  style: {},
  theme: {}
};

class ECharts extends Component {

  componentDidMount() {
    this.init();
  }

  componentDidUpdate() {
    this.renderEcharts();
  }

  componentWillUnmount() {
    this.dispose();
  }

  init() {
    this.chart = echarts.init(this.container, this.props.theme);
    this.renderEcharts();
    this.initEvents();
  }

  initEvents() {
    let onEvents = this.props.onEvents;
    for (let eventName in onEvents) {
      this.chart.on(eventName, onEvents[eventName]);
    }

    onResize(this.container, () => {
      this.chart.resize();
    });
  }

  dispose() {
    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }

  renderEcharts() {

    let { option, notMerge, notRefreshImmediately } = this.props;
    this.chart.showLoading();
    this.chart.setOption(option, notMerge, notRefreshImmediately);
    this.chart.hideLoading();

  }

  render() {
    const {
      id,
      option,
      style,
      ...props,
    } = this.props;

    const styles = Object.assign({
      width: '100%',
      height: '100%'
    }, style);

    const elementProps = omit(props, Object.keys(propTypes));


    return (
      <div
        {...elementProps}
        id={id}
        ref={(ref) => {
          this.container = ref;
        }}
        style={styles}
      />
    );
  }
}

ECharts.propTypes = propTypes;
ECharts.defaultProps = defaultProps;
ECharts.displayName = 'ECharts';


const APIS = ['getMap', 'connect', 'disConnect', 'getInstanceByDom', 'registerMap', 'registerTheme'];
APIS.forEach((api) => {
  ECharts[api] = echarts[api];
});

ECharts.dispatchAction = function (instance, payload) {

  const container = get(instance, 'container') || document.getElementById(instance);
  const chartInstance = echarts.getInstanceByDom(container);
  return chartInstance.dispatchAction(payload);
};


export default ECharts;
