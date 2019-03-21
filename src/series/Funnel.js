import 'echarts/lib/chart/line';
import PropTypes from 'prop-types';
import _merge from 'lodash.merge';
import EChartsSeriesOption from './EChartsSeriesOption';
import { transformTextOption } from '../utils';

class Funnel extends EChartsSeriesOption {
  static displayName = 'Funnel';

  static propTypes = {
    asc: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.any)
  };

  static defaultProps = {
    asc: false
  };

  getSeriesOption() {
    const {
      type,
      data,
      asc,
      sort = asc ? 'ascending' : 'descending',
      label,
      ...props
    } = this.props;

    return _merge(
      {
        type: 'funnel',
        data: data.map(([name, value]) => ({ name, value })).sort((d1, d2) => d2.value - d1.value),
        sort,
        label: transformTextOption(label, {
          show: true,
          position: 'inside',
          formatter: ({ value }) => value,
          textStyle: {
            fontSize: 14
          }
        })
      },
      props
    );
  }
}

export default Funnel;
