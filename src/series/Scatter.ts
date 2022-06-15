import type { ScatterSeriesOption } from 'echarts';
import 'echarts/lib/chart/scatter';
import { symbols } from '../constants';

export type ScatterProps = ScatterSeriesOption;

function Scatter (_: ScatterProps){
  return null;
}

Scatter[symbols.typeKey] = symbols.scatter;

if (process.env.NODE_ENV !== 'production') {
  Scatter.displayName = 'Scatter';
}

export default Scatter;
