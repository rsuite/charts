import 'echarts/lib/chart/map';
import EChartsSeriesOption from './EChartsSeriesOption';

class Map extends EChartsSeriesOption {
  static displayName = 'Map';

  static defaultProps = {
    data: []
  };

  getSeriesOption() {
    const { map, name, data, nameMap, ...props } = this.props;

    return {
      type: 'map',
      map,
      name,
      data: data.map(([name, value]) => ({ name: (nameMap && nameMap[name]) || name, value })),
      itemStyle: {
        areaColor: '#BEDBED',
        borderColor: '#ffffff',
        borderWidth: 1
      },
      nameMap,
      ...props
    };
  }
}

export default Map;
