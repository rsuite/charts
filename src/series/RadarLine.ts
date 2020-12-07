import 'echarts/lib/chart/line';
import { symbols } from '../constants';

export type RadarLineProps = echarts.EChartOption.SeriesRadar | any;

function RadarLine(_: RadarLineProps) {
  return null;
}

RadarLine[symbols.typeKey] = symbols.radarLine;

if (process.env.NODE_ENV !== 'production') {
  RadarLine.displayName = 'RadarLine';
}

export default RadarLine;
