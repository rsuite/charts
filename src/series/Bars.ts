import * as echarts from 'echarts/core';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([BarChart]);

type BarsProps = Omit<BarSeriesOption, 'stack'> & {
  color?: string | string[];
  stack?: string | true;
};

function Bars(_: BarsProps) {
  return null;
}

Bars[symbols.typeKey] = symbols.bars;

if (process.env.NODE_ENV !== 'production') {
  Bars.displayName = 'Bars';
}

export default Bars;
