import { symbols } from '../constants';
import { AxisLabelFormatter } from '../types';

export type XAxisProps = Omit<
  echarts.EChartOption.XAxis,
  'axisLine' | 'axisLabel' | 'splitLine'
> & {
  axisLine?: echarts.EChartOption.XAxis['axisLine'] | boolean;
  axisLabel?: echarts.EChartOption.XAxis['axisLabel'] | boolean | AxisLabelFormatter;
  splitLine?: echarts.EChartOption.XAxis['splitLine'] | boolean;
};

function XAxis(_: XAxisProps) {
  return null;
}

XAxis[symbols.typeKey] = symbols.xAxis;

if (process.env.NODE_ENV !== 'production') {
  XAxis.displayName = 'XAxis';
}

export default XAxis;
