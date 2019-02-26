import 'echarts/lib/chart/map';
import 'echarts/map/js/china';
import EChartsSeriesOption from './EChartsSeriesOption';

class Map extends EChartsSeriesOption {
  static displayName = 'Map';

  static defaultProps = {
    data: []
  };

  getSeriesOption() {
    const { props } = this;

    return {
      type: 'map',
      map: props.map,
      name: props.name,
      data: props.data.map(([name, value]) => ({ name, value })),
      itemStyle: {
        areaColor: '#BEDBED',
        borderColor: '#ffffff',
        borderWidth: 1
      }
    };
  }
}

export default Map;
