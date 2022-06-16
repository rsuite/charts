import * as echarts from 'echarts/core';
import { VisualMapComponent, type VisualMapComponentOption } from 'echarts/components';
import { symbols } from '../constants';

echarts.use([VisualMapComponent]);

export type VisualMapProps = VisualMapComponentOption;

function VisualMap(_: VisualMapProps) {
  return null;
}

VisualMap[symbols.typeKey] = symbols.visualMap;

if (process.env.NODE_ENV !== 'production') {
  VisualMap.displayName = 'VisualMap';
}

export default VisualMap;
