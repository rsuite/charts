import * as echarts from 'echarts/core';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([LineChart]);

export type LineProps = Omit<LineSeriesOption, 'stack'> & {
  stack?: string | boolean;
  area?: boolean;
};

function Line(_: LineProps) {
  return null;
}

Line[symbols.typeKey] = symbols.line;

if (process.env.NODE_ENV !== 'production') {
  Line.displayName = 'Line';
}

export default Line;
