import 'echarts/lib/chart/line';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsSeriesOption from './EChartsSeriesOption';

class Scatter extends EChartsSeriesOption {
  static displayName = 'Scatter';

  static contextTypes = {
    ...EChartsSeriesOption.contextTypes,
    chartType: PropTypes.string
  };

  getSeriesOption() {
    const {
      type,

      ...props
    } = this.props;

    const { chartType } = this.context;

    return _merge(
      {
        type: 'scatter',
        symbol: chartType === 'bar' ? 'emptyCircle' : 'circle',
        symbolSize: 9,
        itemStyle: {
          opacity: 1
        }
      },
      props
    );
  }
}

export default Scatter;
