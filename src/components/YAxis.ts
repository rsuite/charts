import { symbols } from '../constants';

export type YAxisProps = echarts.EChartOption.YAxis & {
  axisLine?: echarts.EChartOption.YAxis['axisLine'] | boolean;
  axisLabel?: echarts.EChartOption.YAxis['axisLabel'] | boolean | AxisLabelFormatter;
  splitLine?: echarts.EChartOption.YAxis['splitLine'] | boolean;
};

function YAxis(_: YAxisProps) {
  return null;
}

YAxis.defaultProps = {
  show: true,
  type: 'value',
  splitLine: true
};
YAxis[symbols.typeKey] = symbols.yAxis;

if (__DEV__) {
  YAxis.displayName = 'YAxis';
}

export default YAxis;
