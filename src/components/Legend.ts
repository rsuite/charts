import * as echarts from 'echarts/core';
import { LegendComponent, LegendComponentOption } from 'echarts/components';
import { symbols } from '../constants';

echarts.use([LegendComponent]);

export type LegendProps = LegendComponentOption;

function Legend(_: LegendProps) {
  return null;
}

Legend[symbols.typeKey] = symbols.legend;

if (process.env.NODE_ENV !== 'production') {
  Legend.displayName = 'Legend';
}

export default Legend;
