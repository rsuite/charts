import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Line from '../series/Line';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Legend from '../components/Legend';
import { isSeriesOption } from '../utils';
import Tooltip from '../components/Tooltip';

class LineChart extends Component {
  static childContextTypes = {
    chartType: PropTypes.string,
  };

  getChildContext() {
    return {
      chartType: 'line',
    };
  }

  render() {
    const {
      name,
      data = [],
      tooltip = true,
      children,
      ...props
    } = this.props;

    const components = Children.toArray(children);
    const series = components.filter(isSeriesOption);

    function renderDefaultLine() {
      const values = data.map(([category, value]) => value);

      return (
        <Line name={name} data={values} />
      );
    }

    function renderDefaultXAxis() {
      const categories = data.map(([category]) => category);

      return (
        <XAxis data={categories} />
      );
    }

    return (
      <ECharts {...props}>
        {
          !components.find(comp => comp.type === XAxis) &&
          renderDefaultXAxis()
        }
        {
          !components.find(comp => comp.type === YAxis) &&
          <YAxis />
        }
        {
          !components.find(comp => comp.type === Line) &&
          renderDefaultLine()
        }
        {
          tooltip &&
          <Tooltip />
        }
        {
          !components.find(comp => comp.type === Legend) &&
          <Legend />
        }
        {
          components.map(child => {
            if (data.length && isSeriesOption(child) && !child.props.data) {
              const serieIndex = series.indexOf(child);
              return cloneElement(child, { data: data.map(([category, ...values]) => values[serieIndex]) });
            }
            return child;
          })
        }
      </ECharts>
    );
  }
}

export default LineChart;
