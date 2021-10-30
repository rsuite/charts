import { EChartsOption } from 'echarts';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import { symbols } from '../constants';

export type LegendProps = EChartsOption['legend'];

function Legend(_: LegendProps) {
  return null;
}

Legend[symbols.typeKey] = symbols.legend;

if (process.env.NODE_ENV !== 'production') {
  Legend.displayName = 'Legend';
}

export default Legend;
