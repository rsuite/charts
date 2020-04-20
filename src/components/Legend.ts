import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import { symbols } from '../constants';

export type LegendProps = echarts.EChartOption.Legend;

function Legend(_: LegendProps) {
  return null;
}

Legend[symbols.typeKey] = symbols.legend;

if (__DEV__) {
  Legend.displayName = 'Legend';
}

export default Legend;
