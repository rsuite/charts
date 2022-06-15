import type { RadarComponentOption } from 'echarts';
import 'echarts/lib/component/radar';
import { symbols } from '../constants';

export type RadarProps = RadarComponentOption;

function Radar(_: RadarProps) {
  return null;
}

Radar[symbols.typeKey] = symbols.radar;

if (process.env.NODE_ENV !== 'production') {
  Radar.displayName = 'Radar';
}

export default Radar;
