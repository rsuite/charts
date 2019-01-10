import { Component } from 'react';
import PropTypes from 'prop-types';

class EChartsComponentOption extends Component {

  static contextTypes = {
    setChartOption: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
    context.setChartOption(option => this.updateChartOption(option));
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.context.setChartOption(option => this.updateChartOption(option));
    }
  }

  componentWillUnmount() {
    this.context.setChartOption(option => this.resetChartOption(option));
  }

  updateChartOption(option) {
    return option;
  }

  resetChartOption(option) {
    return option;
  }

  render() {
    return this.props.children || null;
  }
}

export default EChartsComponentOption;
