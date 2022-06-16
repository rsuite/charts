import type { XAXisComponentOption } from 'echarts';
import { symbols } from '../constants';
import { AxisLabelFormatter } from '../types';

export type XAxisProps = Omit<XAXisComponentOption, 'axisLine' | 'axisLabel' | 'splitLine'> & {
  axisLine?: XAXisComponentOption['axisLine'] | boolean;
  axisLabel?: XAXisComponentOption['axisLabel'] | boolean | AxisLabelFormatter;
  splitLine?: XAXisComponentOption['splitLine'] | boolean;
};

function XAxis(_: XAxisProps) {
  return null;
}

XAxis[symbols.typeKey] = symbols.xAxis;

if (process.env.NODE_ENV !== 'production') {
  XAxis.displayName = 'XAxis';
}

export default XAxis;
