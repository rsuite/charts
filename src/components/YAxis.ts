import type { YAXisComponentOption } from 'echarts';
import { symbols } from '../constants';
import { AxisLabelFormatter } from '../types';

export type YAxisProps = Omit<YAXisComponentOption, 'axisLine' | 'axisLabel' | 'splitLine'> & {
  axisLine?: YAXisComponentOption['axisLine'] | boolean;
  axisLabel?: YAXisComponentOption['axisLabel'] | boolean | AxisLabelFormatter;
  splitLine?: YAXisComponentOption['splitLine'] | boolean;

  /**
   * When nameLocation="middle",
   * whether to transpose the axis name text into vertical direction.
   *
   * @default false
   */
  transposeNameText?: boolean;
};

function YAxis(_: YAxisProps) {
  return null;
}

YAxis.defaultProps = {
  show: true,
  type: 'value',
};
YAxis[symbols.typeKey] = symbols.yAxis;

if (process.env.NODE_ENV !== 'production') {
  YAxis.displayName = 'YAxis';
}

export default YAxis;
