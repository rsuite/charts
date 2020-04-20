import 'echarts/lib/chart/map';
import { symbols } from '../constants';

export type MapProps = echarts.EChartOption.SeriesMap;

function Map(_: MapProps) {
  return null;
}

Map[symbols.typeKey] = symbols.map;

if (__DEV__) {
  Map.displayName = 'Map';
}

export default Map;
