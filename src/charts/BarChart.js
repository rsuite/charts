import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Legend from '../components/Legend';
import Tooltip from '../components/Tooltip';
import Bars from '../series/Bars';
import { isSeriesOption } from '../utils';

const categoryAxisProps = {
  type: 'category',
  splitLine: false
};

const valueAxisProps = {
  type: 'value'
};

/**
 * <ECharts>
 *   <XAxis />
 *   <YAxis />
 *   <Bars />
 *   <Tooltip />
 *   <Legend />
 * </ECharts>
 */
class BarChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    horizontal: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.any),
    tooltip: PropTypes.bool,
    xAxis: PropTypes.bool,
    yAxis: PropTypes.bool,
    legend: PropTypes.bool
  };

  static defaultProps = {
    data: [],
    tooltip: true,
    xAxis: true,
    yAxis: true,
    horizontal: false,
    legend: true
  };

  static childContextTypes = {
    chartType: PropTypes.string,
    horizontal: PropTypes.bool,
    series: PropTypes.arrayOf(PropTypes.object)
  };

  getChildContext() {
    const { horizontal, children } = this.props;
    return {
      chartType: 'bar',
      horizontal,
      series: Children.toArray(children).filter(isSeriesOption)
    };
  }

  bindEChartsRef = ref => {
    this.echarts = ref && ref.echarts;
  };

  renderDefaultCategoryAxis() {
    const { horizontal, data: inputData } = this.props;

    const data = horizontal ? [...inputData].reverse() : inputData;
    const categories = data.map(([category]) => category);

    return horizontal ? (
      <YAxis {...categoryAxisProps} data={categories} />
    ) : (
      <XAxis {...categoryAxisProps} data={categories} />
    );
  }

  renderDefaultValueAxis() {
    const { horizontal, xAxis, yAxis } = this.props;

    return horizontal ? (
      <XAxis {...valueAxisProps} show={xAxis} />
    ) : (
      <YAxis {...valueAxisProps} show={yAxis} />
    );
  }

  renderDefaultSeries() {
    const { name, data: inputData, horizontal } = this.props;

    // 水平图表从上往下阅读则需将 data 翻转过来
    const data = horizontal ? [...inputData].reverse() : inputData;
    const values = data.map(d => d[1]);

    return <Bars name={name} data={values} />;
  }

  renderDefaultLegend() {
    const { name, children } = this.props;
    const components = Children.toArray(children);
    const series = components.filter(isSeriesOption);
    const dataNames = series.length ? series.map(serie => serie.name) : [name];
    return <Legend data={dataNames} />;
  }

  render() {
    const {
      name,
      horizontal,
      data: inputData,
      tooltip,
      xAxis,
      yAxis,
      children,
      legend,
      ...props
    } = this.props;

    const components = Children.toArray(children);
    const series = components.filter(isSeriesOption);

    const data = horizontal ? [...inputData].reverse() : inputData;

    const categoryAxis = horizontal
      ? components.find(comp => comp.type === YAxis)
      : components.find(comp => comp.type === XAxis);

    const valueAxis = horizontal
      ? components.find(comp => comp.type === XAxis)
      : components.find(comp => comp.type === YAxis);

    return (
      <ECharts ref={this.bindEChartsRef} {...props}>
        {!categoryAxis && this.renderDefaultCategoryAxis()}
        {!valueAxis && this.renderDefaultValueAxis()}
        {!components.find(comp => comp.type === Bars) && this.renderDefaultSeries()}
        {legend && !components.find(comp => comp.type === Legend) && this.renderDefaultLegend()}
        {tooltip && <Tooltip />}
        {components.map(child => {
          if (child.type === (horizontal ? YAxis : XAxis)) {
            return cloneElement(child, {
              ...categoryAxisProps,
              data: child.props.data || data.map(([category]) => category)
            });
          }
          if (child.type === (horizontal ? XAxis : YAxis)) {
            return cloneElement(child, valueAxisProps);
          }
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

export default BarChart;
