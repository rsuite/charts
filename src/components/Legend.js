import 'echarts/lib/component/legend';
import PropTypes from 'prop-types';
import EChartsComponentOption from '../EChartsComponentOption';

class Legend extends EChartsComponentOption {

  static displayName = 'Legend';

  static defaultProps = {
    data: [],
  };

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    chartType: PropTypes.string,
    series: PropTypes.array
  };

  updateChartOption(option) {
    const { props } = this;
    const { chartType, series } = this.context;
    let legendOption = {
      show: true,
      // icon: chartType === 'pie' ? 'circle' : 'roundRect',
      // borderRadius: 2,
      bottom: 0,
      textStyle: {
        color: '#8e8e93'
      }
    };

    if (chartType === 'pie') {
      legendOption.icon = 'circle';
    }

    // if (chartType === 'line') {
    //   legendOption.itemHeight = 4;
    // }

    // if (series.length > 0) {
    //   legendOption.data = ser
    // }

    return {
      ...option,
      legend: legendOption,
    }
  }
}

export default Legend;
