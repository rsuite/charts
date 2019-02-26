import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Sankey from '../series/Sankey';

class SankeyChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object),
      links: PropTypes.arrayOf(PropTypes.object)
    })
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
      chartType: 'sankey',
      dataName: name
    };
  }

  renderDefaultSankey() {
    const { props } = this;

    return <Sankey name={props.name} data={props.data} />;
  }

  render() {
    const { name, data, children, ...props } = this.props;

    const components = Children.toArray(children);

    const sankey = components.find(comp => comp.type === Sankey);

    return (
      <ECharts {...props}>
        <Tooltip />
        {!sankey && this.renderDefaultSankey()}
        {children}
      </ECharts>
    );
  }
}

export default SankeyChart;
