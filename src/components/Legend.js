import 'echarts/lib/component/legend';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';

class Legend extends EChartsComponentOption {

  static displayName = 'Legend';

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    chartType: PropTypes.string,
    series: PropTypes.array,
    chartData: PropTypes.array,
  };

  updateChartOption(option) {
    const {
      ...props
    } = this.props;
    const { chartType, series, chartData } = this.context;
    let legendOption = {
      show: true,
      data: chartType === 'pie' ? chartData.map(([name]) => name) : series.map(comp => comp.props.name),
      bottom: 0,
      textStyle: {
        color: '#8e8e93',
      },
    };

    if (chartType === 'pie') {
      legendOption.icon = 'circle';
    }

    return {
      ...option,
      legend: _merge(legendOption, props),
    };
  }

  resetChartOption({ legend, ...option }) {
    return option;
  }
}

export default Legend;
