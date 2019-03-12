import _merge from 'lodash.merge';
import 'echarts/lib/chart/map';
import EChartsSeriesOption from './EChartsSeriesOption';

class Map extends EChartsSeriesOption {
  static displayName = 'Map';

  static defaultProps = {
    data: []
  };

  getSeriesOption() {
    const { type, map, name, data, nameMap, ...props } = this.props;

    return _merge(
      {
        type: 'map',
        map,
        name,
        data: data.map(([name, value]) => ({ name: (nameMap && nameMap[name]) || name, value })),
        itemStyle: {
          areaColor: '#E5E5EA',
          borderColor: '#ffffff',
          borderWidth: 1
        },
        label: {
          fontSize: 10
        },
        emphasis: {
          label: {
            color: 'rgb(131, 56, 236)'
          },
          itemStyle: {
            areaColor: 'rgba(131, 56, 236, .3)',
            borderColor: 'rgb(131, 56, 236)'
          }
        },
        nameMap
      },
      props
    );
  }
}

export default Map;
