import 'echarts/lib/component/visualMap';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsComponentOption from '../EChartsComponentOption';

class VisualMap extends EChartsComponentOption {
  static displayName = 'VisualMap';

  static contextTypes = {
    ...EChartsComponentOption.contextTypes,
    dataName: PropTypes.string,
    chartData: PropTypes.arrayOf(PropTypes.any)
  };

  updateChartOption(option) {
    const { type = 'continuous', ...props } = this.props;
    const { dataName, chartData } = this.context;

    let inRange = {
      colorHue: [198, 199],
      colorSaturation: [1, 1],
      colorLightness: [0.88, 0.451]
    };

    if (type === 'piecewise') {
      inRange = {
        symbol: 'rect'
      };
    }

    const visualMapOption = _merge(
      {
        type,
        left: 0,
        bottom: 0,
        text: ['最大值', '最小值'],
        textGap: 5,
        orient: 'horizontal',
        inverse: true,
        min: 0,

        itemGap: 1,
        symbolSize: [18, 14],
        textStyle: {
          color: '#8e8e93'
        },
        inRange
      },
      props
    );

    if (chartData && !visualMapOption.max) {
      visualMapOption.max = chartData.reduce((max, d) => Math.max(max, d[1]), -Infinity);
    }

    return {
      ...option,
      visualMap: visualMapOption
    };
  }
}

export default VisualMap;
