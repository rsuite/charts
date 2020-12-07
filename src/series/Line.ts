import 'echarts/lib/chart/line';
import { symbols } from '../constants';

export type LineProps = Omit<echarts.EChartOption.SeriesLine, 'stack'> & {
  stack?: string | boolean;
  area?: boolean;
}

function Line(_: LineProps) {
  return null;
}

Line[symbols.typeKey] = symbols.line;

if (process.env.NODE_ENV !== 'production') {
  Line.displayName = 'Line';
}

export default Line;
