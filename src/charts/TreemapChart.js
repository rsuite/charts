import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import VisualMap from '../components/VisualMap';
import Treemap from '../series/Treemap';

const treemapColors = ['#34C3FF', '#54CCFF', '#62D1FF', '#79D7FF', '#99E1FF', '#C6EEFF'];

class TreemapChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.any)
  };

  static defaultProps = {
    data: []
  };

  static childContextTypes = {
    chartType: PropTypes.string,
    dataName: PropTypes.string
  };

  getChildContext() {
    const { name } = this.props;
    return {
      chartType: 'treemap',
      dataName: name
    };
  }

  renderDefaultTreemap() {
    const { props } = this;

    return <Treemap name={props.name} data={props.data} />;
  }

  render() {
    const { name, data, children, ...props } = this.props;

    const components = Children.toArray(children);

    const treemap = components.find(comp => comp.type === Treemap);

    return (
      <ECharts {...props}>
        <Tooltip />
        <VisualMap type="continuous" color={treemapColors} controller={null} />
        {!treemap && this.renderDefaultTreemap()}
        {children}
      </ECharts>
    );
  }
}

export default TreemapChart;
