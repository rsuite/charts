import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Pie from '../series/Pie';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';

class PieChart extends Component {

  static propTypes = {
    donut: PropTypes.bool,
  };

  static defaultProps = {
    data: [],
    donut: false,
    legend: true,
  };
  static childContextTypes = {
    chartType: PropTypes.string,
  };

  getChildContext() {
    return {
      chartType: 'pie',
    };
  }

  getPieData() {
    const { data } = this.props;
    return data.map(([name, value]) => ({ name, value }));
  }

  renderDefaultPie() {
    const {
      data,
      ...props
    } = this.props;
    return (
      <Pie
        data={this.getPieData()}
        {...props}
      />
    );
  }

  renderDefaultTooltip() {
    return (
      <Tooltip />
    );
  }

  render() {
    const {
      name,
      children,
      donut,
      legend,
      ...props
    } = this.props;

    const components = Children.toArray(children);
    const pie = components.find(comp => comp.type === Pie);
    const tooltip = components.find(comp => comp.type === Tooltip);

    return (
      <ECharts {...props}>
        {legend === true && <Legend />}
        {!tooltip && this.renderDefaultTooltip()}
        {!pie && this.renderDefaultPie()}
        {children}
      </ECharts>
    );
  }
}

export default PieChart;
