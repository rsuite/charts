import 'echarts/lib/chart/line';
import { symbols } from '../constants';

export type ScatterProps = echarts.EChartOption.SeriesScatter;

function Scatter (_: ScatterProps){
  return null;
}

Scatter[symbols.typeKey] = symbols.scatter;

if (__DEV__) {
  Scatter.displayName = 'Scatter';
}

export default Scatter;
