import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import { symbols } from '../constants';

export type LegendProps = echarts.EChartOption.Legend;

function Legend(_: LegendProps) {
  return null;
}

Legend[symbols.typeKey] = symbols.legend;

if (process.env.NODE_ENV !== 'production') {
  Legend.displayName = 'Legend';
}

export default Legend;
