import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Map from '../series/Map';
import VisualMap from '../components/VisualMap';

const mapVisualMapColors = [
  'rgb(8, 132, 204)',
  'rgba(8, 132, 204, .8)',
  'rgba(8, 132, 204, .6)',
  'rgba(8, 132, 204, .4)',
  'rgba(8, 132, 204, .3)'
];

class MapChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any),
    visualMap: PropTypes.bool
  };

  static defaultProps = {
    data: [],
    visualMap: true
  };

  static childContextTypes = {
    chartType: PropTypes.string,
    dataName: PropTypes.string,
    chartData: PropTypes.arrayOf(PropTypes.any)
  };

  getChildContext() {
    const { name, data } = this.props;
    return {
      chartType: 'map',
      dataName: name,
      chartData: data
    };
  }

  renderDefaultMap() {
    const { visualMap, children, ...props } = this.props;

    return <Map {...props} />;
  }

  render() {
    const { name, data, visualMap, children, ...props } = this.props;

    const components = Children.toArray(children);

    const map = components.find(comp => comp.type === Map);

    return (
      <ECharts {...props}>
        <Tooltip />
        <VisualMap
          show={visualMap !== false}
          type="piecewise"
          inRange={{
            color: [...mapVisualMapColors].reverse()
          }}
          controller={{
            symbol: 'rect'
          }}
        />
        {!map && this.renderDefaultMap()}
        {children}
      </ECharts>
    );
  }
}

export default MapChart;
