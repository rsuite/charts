import type { TooltipComponentOption } from 'echarts';
import 'echarts/lib/component/tooltip';
import { symbols } from '../constants';

export type TooltipProps = TooltipComponentOption;

function Tooltip(_: TooltipProps) {
  return null;
}

Tooltip[symbols.typeKey] = symbols.tooltip;

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = 'Tooltip';
}

export default Tooltip;
