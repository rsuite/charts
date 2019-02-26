import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Legend from '../components/Legend';
import Tooltip from '../components/Tooltip';
import Bars from '../series/Bars';
import { isSeriesOption } from '../utils';

class BarChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    horizontal: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.any),
    tooltip: PropTypes.bool,
    xAxis: PropTypes.bool,
    yAxis: PropTypes.bool
  };

  static defaultProps = {
    data: [],
    tooltip: true,
    xAxis: true,
    yAxis: true
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
      series: Children.toArray(children).filter(comp => isSeriesOption(comp))
    };
  }

  render() {
    const {
      name,
      horizontal = false,
      data: inputData,
      tooltip,
      xAxis,
      yAxis,
      children,
      ...props
    } = this.props;

    const components = Children.toArray(children);
    const series = components.filter(isSeriesOption);

    const data = horizontal ? [...inputData].reverse() : inputData;

    function renderDefaultSeries() {
      const values = data.map(d => d[1]);

      return <Bars name={name} data={horizontal ? values.reverse() : values} />;
    }

    function renderDefaultLegend() {
      const dataNames = series.length ? series.map(serie => serie.name) : [name];
      return <Legend data={dataNames} />;
    }

    const categories = data.map(([category]) => category);

    const categoryAxisProps = {
      type: 'category',
      splitLine: false
    };

    function renderDefaultCategoryAxis() {
      return horizontal ? (
        <YAxis {...categoryAxisProps} data={categories} />
      ) : (
        <XAxis {...categoryAxisProps} data={categories} />
      );
    }

    const valueAxisProps = {
      type: 'value'
    };

    function renderDefaultValueAxis() {
      return horizontal ? (
        <XAxis {...valueAxisProps} show={xAxis} />
      ) : (
        <YAxis {...valueAxisProps} show={yAxis} />
      );
    }

    const categoryAxis = horizontal
      ? components.find(comp => comp.type === YAxis)
      : components.find(comp => comp.type === XAxis);

    const valueAxis = horizontal
      ? components.find(comp => comp.type === XAxis)
      : components.find(comp => comp.type === YAxis);

    return (
      <ECharts {...props}>
        {!categoryAxis && renderDefaultCategoryAxis()}
        {!valueAxis && renderDefaultValueAxis()}
        {!components.find(comp => comp.type === Bars) && renderDefaultSeries()}
        {!components.find(comp => comp.type === Legend) && renderDefaultLegend()}
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
