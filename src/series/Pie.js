import 'echarts/lib/chart/pie';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsSeriesOption from './EChartsSeriesOption';
import { transformTextOption } from '../utils';

class Pie extends EChartsSeriesOption {
  static displayName = 'Pie';

  static propTypes = {
    donut: PropTypes.bool
  };

  static defaultProps = {
    data: [],
    donut: false
  };

  getSeriesOption() {
    const {
      type,

      radius,
      donut,
      label,
      ...props
    } = this.props;

    const outerRadius = parseFloat(radius) || 80;
    const innerRadius = outerRadius - 15;

    const pieOption = _merge(
      {
        type: 'pie',
        radius: donut ? [`${innerRadius}%`, `${outerRadius}%`] : `${outerRadius}%`,
        center: ['50%', '50%']
      },
      props
    );

    if (label !== undefined) {
      pieOption.label = transformTextOption(label);
    }

    return pieOption;
  }
}

export default Pie;
