import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Line from '../series/Line';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Legend from '../components/Legend';
import { isSeriesOption } from '../utils';
import Tooltip from '../components/Tooltip';

/**
 * <ECharts>
 *   <XAxis />
 *   <YAxis />
 *   <Line />
 *   <Tooltip />
 *   <Legend />
 * </ECharts>
 */
class LineChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any),
    tooltip: PropTypes.bool
  };

  static defaultProps = {
    data: [],
    tooltip: true
  };

  static childContextTypes = {
    chartType: PropTypes.string
  };

  getChildContext() {
    return {
      chartType: 'line'
    };
  }

  bindEChartsRef = ref => {
    this.echarts = ref && ref.echarts;
  };

  renderDefaultXAxis() {
    const { data } = this.props;
    return <XAxis data={data.map(([category]) => category)} />;
  }

  renderDefaultLine() {
    const { name, data } = this.props;
    return <Line name={name} data={data.map(d => d[1])} />;
  }

  render() {
    const { name, data, tooltip, children, ...props } = this.props;

    const components = Children.toArray(children);
    const series = components.filter(isSeriesOption);

    return (
      <ECharts ref={this.bindEChartsRef} {...props}>
        {!components.find(comp => comp.type === XAxis) && this.renderDefaultXAxis()}
        {!components.find(comp => comp.type === YAxis) && <YAxis />}
        {!components.find(comp => comp.type === Line) && this.renderDefaultLine()}
        {tooltip && <Tooltip />}
        {!components.find(comp => comp.type === Legend) && <Legend />}
        {components.map(child => {
          if (data.length && isSeriesOption(child) && !child.props.data) {
            const serieIndex = series.indexOf(child);
            return cloneElement(child, { data: data.map(d => d[serieIndex + 1]) });
          }
          return child;
        })}
      </ECharts>
    );
  }
}

export default LineChart;
