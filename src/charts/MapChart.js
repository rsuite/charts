import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Map from '../series/Map';
import VisualMap from '../components/VisualMap';

class MapChart extends Component {

  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any),
    visualMap: PropTypes.bool,
  };

  static defaultProps = {
    data: [],
    visualMap: true,
  };

  static childContextTypes = {
    chartType: PropTypes.string,
    dataName: PropTypes.string,
    chartData: PropTypes.arrayOf(PropTypes.any),
  };

  getChildContext() {
    const { name, data } = this.props;
    return {
      chartType: 'map',
      dataName: name,
      chartData: data,
    };
  }

  renderDefaultMap() {
    const { props } = this;

    return (
      <Map
        name={props.name}
        map={props.map}
        data={props.data}
      />
    );
  }


  render() {
    const
      {
        name,
        data,
        visualMap,
        children,
        ...props
      } = this.props;

    const components = Children.toArray(children);

    const map = components.find(comp => comp.type === Map);


    return (
      <ECharts {...props}>
        <Tooltip />
        {visualMap === true && <VisualMap />}
        {!map && this.renderDefaultMap()}
        {children}
      </ECharts>
    );
  }

}

export default MapChart;
