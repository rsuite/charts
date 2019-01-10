import 'echarts/lib/chart/treemap';
import _merge from 'lodash.merge';
import EChartsSeriesOption from './EChartsSeriesOption';

function transformData(node) {
  if (!node) return node;
  if (!Array.isArray(node)) {
    return node;
  }
  const [name, value, children] = node;
  return {
    name,
    value,
    children: children && children.map(transformData),
  };
}

class Treemap extends EChartsSeriesOption {

  static displayName = 'Treemap';

  static defaultProps = {
    data: [],
  };

  getSeriesOption() {
    const {
      data,
      ...props
    } = this.props;

    return _merge({
      type: 'treemap',
      data: data.map(transformData),
      itemStyle: {
        areaColor: '#BEDBED',
        borderColor: '#ffffff',
        borderWidth: 1,
      },
      visibleMin: 300,
      leafDepth: 2,
      label: {
        position: 'insideTopLeft',
        color: '#575757',
      },
      levels: [
        {
          itemStyle: {
            normal: {
              borderColor: '#fff',
              borderWidth: 1,
              gapWidth: 1,
            },
          },
        },
      ],
    }, props);
  }
}

export default Treemap;
