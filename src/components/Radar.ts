import 'echarts/lib/component/radar';
import { symbols } from '../constants';

export type RadarProps = echarts.EChartOption['radar'] | any;

function Radar(_: RadarProps) {
  return null;
}

Radar[symbols.typeKey] = symbols.radar;

if (__DEV__) {
  Radar.displayName = 'Radar';
}

export default Radar;
