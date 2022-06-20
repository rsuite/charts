import * as echarts from 'echarts/core';
import { TooltipComponent, TooltipComponentOption } from 'echarts/components';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';
import { EChartsOption } from 'echarts';

echarts.use([TooltipComponent]);

export type TooltipProps = TooltipComponentOption;

const Tooltip: OptionComponent<TooltipProps> = (_: TooltipProps) => null;

Tooltip[symbols.typeKey] = symbols.tooltip;

Tooltip.tapEChartsOption = (option, props, context) => {
  function getOption(): TooltipComponentOption {
    const { chartType, series } = context;

    const hasAxis =
      chartType === 'bar' ||
      chartType === 'line' ||
      !!series.find(
        (comp: any) =>
          comp.type[symbols.typeKey] === symbols.xAxis ||
          comp.type[symbols.typeKey] === symbols.yAxis
      );

    return _merge(
      {
        show: true,
        trigger: hasAxis ? 'axis' : 'item',
        axisPointer: {
          type: 'none',
        },
      },
      props
    );
  }

  option.tooltip = getOption() as EChartsOption['tooltip'];
};

if (process.env.NODE_ENV !== 'production') {
  Tooltip.displayName = 'Tooltip';
}

export default Tooltip;
