import * as echarts from 'echarts/core';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([PieChart]);

export interface PieProps extends PieSeriesOption {
  donut?: boolean;
}

function Pie(_: PieProps) {
  return null;
}

Pie.defaultProps = {
  data: [],
  donut: false
};

Pie[symbols.typeKey] = symbols.pie;

if (process.env.NODE_ENV !== 'production') {
  Pie.displayName = 'Pie';
}

export default Pie;
