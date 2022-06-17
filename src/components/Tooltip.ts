import * as echarts from 'echarts/core';
import { TooltipComponent, TooltipComponentOption } from 'echarts/components';
import { symbols } from '../constants';

echarts.use([TooltipComponent]);

export type TooltipProps = TooltipComponentOption;

function Tooltip(_: TooltipProps) {
  return null;
}

Tooltip[symbols.typeKey] = symbols.tooltip;

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = 'Tooltip';
}

export default Tooltip;
