import * as echarts from 'echarts/core';
import { MapChart, MapSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([MapChart]);

export type MapProps = MapSeriesOption;

function Map(_: MapProps) {
  return null;
}

Map[symbols.typeKey] = symbols.map;

if (process.env.NODE_ENV !== 'production') {
  Map.displayName = 'Map';
}

export default Map;
