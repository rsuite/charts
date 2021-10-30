import { MapSeriesOption } from 'echarts';
import 'echarts/lib/chart/map';
import { symbols } from '../constants';

export type MapProps = MapSeriesOption;

function Map(_: MapProps) {
  return null;
}

Map[symbols.typeKey] = symbols.map;

if (process.env.NODE_ENV !== 'production') {
  Map.displayName = 'Map';
}

export default Map;
