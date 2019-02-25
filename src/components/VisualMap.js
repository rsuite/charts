import 'echarts/lib/component/visualMap';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';

const colors = [
  '#2485C1',
  '#3991C7',
  '#7BB6DA',
  '#91C1DF',
  '#A7CEE6',
  '#BEDBED',
];


class VisualMap extends EChartsComponentOption {

  static displayName = 'VisualMap';

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    dataName: PropTypes.string,
    chartData: PropTypes.arrayOf(PropTypes.any),
  };

  updateChartOption(option) {
    const {
      color = colors,
      ...props
    } = this.props;
    const { dataName, chartData } = this.context;

    const visualMapOption = _merge({
      type: 'piecewise',
      left: 50,
      bottom: 30,
      text: [dataName],
      orient: 'horizontal',
      inverse: true,
      // splitNumber: Math.min(5, data.length),
      min: 0,
      color,
      itemGap: 30,
      symbolSize: 4,
      textStyle: {
        color: '#8e8e93',
      },
      controller: {
        inRange: {
          symbol: 'circle',
          color: [...color].reverse(),
        },
      },
    }, props);

    if (chartData && !visualMapOption.max) {
      visualMapOption.max = chartData.reduce((max, d) => Math.max(max, d[1]), -Infinity);
    }

    return {
      ...option,
      visualMap: visualMapOption,
    };
  }
}

export default VisualMap;
