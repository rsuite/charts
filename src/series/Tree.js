import 'echarts/lib/chart/tree';
import _merge from 'lodash.merge';
import EChartsSeriesOption from './EChartsSeriesOption';

class Tree extends EChartsSeriesOption {

  static displayName = 'Tree';

  static defaultProps = {
    data: [],
  };

  getSeriesOption() {
    const {
      name,
      data,
      ...props
    } = this.props;

    return _merge({
      type: 'tree',
      name,
      data,
      symbolSize: 8,
      itemStyle: {
        color: '#34c3ff',
        borderColor: '#34c3ff',
        borderWidth: 2
      },
      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
        }
      },

      leaves: {
        label: {
          normal: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        }
      },
    }, props);
  }
}

export default Tree;
