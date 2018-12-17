import 'echarts/lib/chart/line';
import _merge from 'lodash.merge';
import EChartsSeriesOption from './EChartsSeriesOption';
import { randstr } from '../utils';

const stackKey = randstr();

class Line extends EChartsSeriesOption {

  static displayName = 'Line';

  getSeriesOption() {
    const {
      type,

      stack,
      area,
      ...props
    } = this.props;

    return _merge({
      type: 'line',
      symbol: 'none',
      stack: stack === true ? stackKey : stack,
      areaStyle: area && { opacity: 0.2 },
    }, props);
  }

}

export default Line;
