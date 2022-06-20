import type { EChartsOption, YAXisComponentOption } from 'echarts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { AxisLabelFormatter, OptionComponent } from '../types';
import { transformTextOption } from '../utils';

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

const YAxis: OptionComponent<YAxisProps> = (_: YAxisProps) => null;

YAxis.defaultProps = {
  show: true,
  type: 'value',
};
YAxis[symbols.typeKey] = symbols.yAxis;

YAxis.tapEChartsOption = (option, props) => {
  function getOption(): YAXisComponentOption {
    const { name, axisLabel, axisLine, splitLine, transposeNameText = false, ...rest } = props;

    return _merge(
      {
        name,
        nameTextStyle: {
          fontSize: 12,
          color: '#575757',
        },
      },
      name && rest.nameLocation === 'middle' && transposeNameText
        ? {
            nameRotate: 0,
            name: name.split('').join('\n'),
          }
        : {},
      typeof axisLine === 'boolean'
        ? {
            axisLine: {
              show: axisLine,
            },
          }
        : axisLine,
      typeof splitLine !== 'undefined'
        ? {
            splitLine: _merge(
              {
                show: !!splitLine,
              },
              typeof splitLine !== 'boolean' && splitLine
            ),
          }
        : {},
      axisLabel
        ? {
            axisLabel: transformTextOption(axisLabel),
          }
        : {},
      rest
    );
  }

  const yAxisOption = getOption();

  if (!option.yAxis) {
    option.yAxis = yAxisOption as EChartsOption['yAxis'];
  } else if (!Array.isArray(option.yAxis)) {
    option.yAxis = [option.yAxis, yAxisOption] as EChartsOption['yAxis'];
  } else {
    (option.yAxis as YAXisComponentOption[]).push(yAxisOption);
  }
};

if (process.env.NODE_ENV !== 'production') {
  YAxis.displayName = 'YAxis';
}

export default YAxis;
