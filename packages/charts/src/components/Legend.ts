import * as echarts from 'echarts/core';
import { LegendComponent, LegendComponentOption } from 'echarts/components';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';
import { EChartsOption } from 'echarts';

echarts.use([LegendComponent]);

export type LegendProps = LegendComponentOption;

const Legend: OptionComponent<LegendProps> = (_: LegendProps) => null;

Legend[symbols.typeKey] = symbols.legend;

Legend.tapEChartsOption = (option, props, context) => {
  function getOption(): LegendComponentOption {
    const { chartType } = context;
    const legendOption: LegendComponentOption = {
      show: true,
      bottom: 10,
    };

    if (chartType === 'pie') {
      legendOption.icon = 'circle';
    }
    return _merge(legendOption, props);
  }

  const legendOption = getOption();

  if (!option.legend) {
    option.legend = legendOption as EChartsOption['legend'];
  } else if (!Array.isArray(option.legend)) {
    option.legend = [option.legend, legendOption] as EChartsOption['legend'];
  } else {
    (option.legend as LegendComponentOption[]).push(legendOption);
  }
};

if (process.env.NODE_ENV !== 'production') {
  Legend.displayName = 'Legend';
}

export default Legend;
