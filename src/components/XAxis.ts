import type { EChartsOption, XAXisComponentOption } from 'echarts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { AxisLabelFormatter, OptionComponent } from '../types';
import { transformTextOption } from '../utils';

export type XAxisProps = Omit<XAXisComponentOption, 'axisLine' | 'axisLabel' | 'splitLine'> & {
  axisLine?: XAXisComponentOption['axisLine'] | boolean;
  axisLabel?: XAXisComponentOption['axisLabel'] | boolean | AxisLabelFormatter;
  splitLine?: XAXisComponentOption['splitLine'] | boolean;
};

const XAxis: OptionComponent<XAxisProps> = (_: XAxisProps) => null;

XAxis[symbols.typeKey] = symbols.xAxis;

XAxis.tapEChartsOption = (option, props, context) => {
  function getOption(): XAXisComponentOption {
    const { axisLabel, axisLine, splitLine, ...rest } = props;
    const { series } = context;

    return _merge(
      rest.type === 'category'
        ? {
            boundaryGap: !!series.find((comp: any) => comp.type[symbols.typeKey] === symbols.bars),
          }
        : {},
      {
        nameTextStyle: {
          fontSize: 12,
          color: '#575757',
        },
      },
      axisLabel
        ? {
            axisLabel: transformTextOption(axisLabel),
          }
        : {},
      typeof axisLine === 'boolean'
        ? {
            axisLine: {
              show: axisLine,
            },
          }
        : axisLine,
      typeof splitLine === 'boolean'
        ? {
            splitLine: {
              show: splitLine,
            },
          }
        : splitLine,
      rest
    );
  }

  const xAxisOption = getOption();

  if (!option.xAxis) {
    option.xAxis = xAxisOption as EChartsOption['xAxis'];
  } else if (!Array.isArray(option.xAxis)) {
    option.xAxis = [option.xAxis, xAxisOption] as EChartsOption['xAxis'];
  } else {
    (option.xAxis as XAXisComponentOption[]).push(xAxisOption);
  }
};

if (process.env.NODE_ENV !== 'production') {
  XAxis.displayName = 'XAxis';
}

export default XAxis;
