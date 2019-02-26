import { Component } from 'react';
import PropTypes from 'prop-types';

class EChartsComponentOption extends Component {
  static contextTypes = {
    setChartOption: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);
    context.setChartOption(option => this.updateChartOption(option));
  }

  componentDidUpdate(prevProps) {
    const { setChartOption } = this.context;
    if (prevProps !== this.props) {
      setChartOption(option => this.updateChartOption(option));
    }
  }

  componentWillUnmount() {
    const { setChartOption } = this.context;
    setChartOption(option => this.resetChartOption(option));
  }

  updateChartOption(option) {
    return option;
  }

  resetChartOption(option) {
    return option;
  }

  render() {
    const { children } = this.props;
    return children || null;
  }
}

export default EChartsComponentOption;
