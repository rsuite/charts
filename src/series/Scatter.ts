import * as echarts from 'echarts/core';
import { ScatterChart, type ScatterSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([ScatterChart]);

export type ScatterProps = ScatterSeriesOption;

function Scatter(_: ScatterProps) {
  return null;
}

Scatter[symbols.typeKey] = symbols.scatter;

if (process.env.NODE_ENV !== 'production') {
  Scatter.displayName = 'Scatter';
}

export default Scatter;
