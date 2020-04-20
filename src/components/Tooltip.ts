import 'echarts/lib/component/tooltip';
import { symbols } from '../constants';

export type TooltipProps = echarts.EChartOption.Tooltip;

function Tooltip(_: TooltipProps) {
  return null;
}

Tooltip[symbols.typeKey] = symbols.tooltip;

if (__DEV__) {
  Tooltip.displayName = 'Tooltip';
}

export default Tooltip;
