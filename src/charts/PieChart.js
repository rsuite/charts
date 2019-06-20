import React, { Children, Component } from 'react';
import PropTypes from 'prop-types';
import ECharts from '../ECharts';
import Pie from '../series/Pie';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';

const { option, ...EChartsPropTypes } = ECharts.propTypes;

class PieChart extends Component {
  static propTypes = {
    name: PropTypes.string,
    donut: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.any),
    legend: PropTypes.bool,
    ...EChartsPropTypes
  };

  static defaultProps = {
    data: [],
    donut: false,
    legend: true
  };

  static childContextTypes = {
    chartType: PropTypes.string,
    chartData: PropTypes.arrayOf(PropTypes.any)
  };

  getChildContext() {
    const { data } = this.props;
    return {
      chartType: 'pie',
      chartData: data
    };
  }

  getPieData() {
    const { data } = this.props;
    return data.map(([name, value]) => ({ name, value }));
  }

  renderDefaultPie() {
    const { data, children, loading, locale, ...props } = this.props;
    return <Pie data={this.getPieData()} {...props} />;
  }

  render() {
    const { name, children, donut, legend, ...props } = this.props;

    const components = Children.toArray(children);
    const pie = components.find(comp => comp.type === Pie);
    const tooltip = components.find(comp => comp.type === Tooltip);

    return (
      <ECharts {...props}>
        {legend === true && <Legend />}
        {!tooltip && <Tooltip />}
        {!pie && this.renderDefaultPie()}
        {children}
      </ECharts>
    );
  }
}

export default PieChart;
