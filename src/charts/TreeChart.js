import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Tree from '../series/Tree';

class TreeChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object)
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
      chartType: 'tree',
      dataName: name
    };
  }

  bindEChartsRef = ref => {
    this.echarts = ref && ref.echarts;
  };

  renderDefaultTree() {
    const { props } = this;

    return <Tree name={props.name} data={props.data} />;
  }

  render() {
    const { name, data, children, ...props } = this.props;

    const components = Children.toArray(children);

    const tree = components.find(comp => comp.type === Tree);

    return (
      <ECharts ref={this.bindEChartsRef} {...props}>
        <Tooltip />
        {!tree && this.renderDefaultTree()}
        {children}
      </ECharts>
    );
  }
}

export default TreeChart;
