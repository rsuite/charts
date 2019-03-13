import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Legend from '@/components/Legend';
import Radar from '@/components/Radar';
import RadarLine from '@/series/RadarLine';
import { isSeriesOption } from '@/utils';

class RadarChart extends Component {
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
      chartType: 'radar',
      dataName: name
    };
  }

  renderDefaultRadar() {
    const { data } = this.props;
    const indicator = data.map(([name, max]) => ({ name, max }));

    return <Radar indicator={indicator} />;
  }

  renderDefaultRadarLine() {
    const { name, data } = this.props;

    return <RadarLine name={name} value={data.map(([name, max, value]) => value)} />;
  }

  render() {
    const { name, data, children, tooltip, legend, ...props } = this.props;
    const components = Children.toArray(children);
    const series = components.filter(isSeriesOption);

    return (
      <ECharts {...props}>
        {!components.find(comp => comp.type === Radar) && this.renderDefaultRadar()}
        {!components.find(comp => comp.type === RadarLine) && this.renderDefaultRadarLine()}
        {tooltip && <Tooltip />}
        {legend && <Legend icon="rect" itemWidth={14} />}
        {components.map(child => {
          if (data.length && isSeriesOption(child) && !child.props.data) {
            const serieIndex = series.indexOf(child);
            return cloneElement(child, { data: data.map(d => d[serieIndex + 2]) });
          }
          return child;
        })}
      </ECharts>
    );
  }
}

export default RadarChart;
