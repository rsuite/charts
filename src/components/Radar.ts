import * as echarts from 'echarts/core';
import { RadarComponent, type RadarComponentOption } from 'echarts/components';
import { symbols } from '../constants';

echarts.use([RadarComponent]);

export type RadarProps = RadarComponentOption;

function Radar(_: RadarProps) {
  return null;
}

Radar[symbols.typeKey] = symbols.radar;

if (process.env.NODE_ENV !== 'production') {
  Radar.displayName = 'Radar';
}

export default Radar;
