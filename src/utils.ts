import React from 'react';
import _merge from 'lodash.merge';
import _omit from 'lodash.omit';
import flattenChildren from 'react-keyed-flatten-children';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { TitleComponent } from 'echarts/components';
import { symbols } from './constants';
import { ChartComponentProps } from './ECharts';
import type { YAxisProps } from './components/YAxis';
import type { DatasetProps } from './components/Dataset';
import type { OptionComponent } from './types';

echarts.use([TitleComponent]);

export function is(element: any, name: string): boolean {
  return element.type[symbols.typeKey] === Symbol.for(`$$${name}`);
}

export function isSeries(element: any) {
  return (symbols as any).series.includes(element.type[symbols.typeKey]);
}

export function transformTextOption(option: any, defaultOption?: any) {
  if (option === undefined || option === true) {
    return defaultOption;
  }
  if (option === false) {
    return { show: false };
  }
  if (typeof option === 'function') {
    return {
      ...defaultOption,
      show: true,
      formatter: option,
    };
  }
  if (typeof option === 'object') {
    return _merge(
      {
        ...defaultOption,
        show: true,
      },
      option
    );
  }
  return {
    ...defaultOption,
    show: true,
    formatter() {
      return option;
    },
  };
}

export function randstr(length = 16) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

const createOptions = {
  // components
  [symbols.tooltip](option: any, props: any, context: any) {
    function getOption() {
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

    option.tooltip = getOption();
  },
  [symbols.legend](option: any, props: any, context: any) {
    function getOption() {
      const { chartType } = context;
      const legendOption: any = {
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
      option.legend = legendOption;
    } else if (!Array.isArray(option.legend)) {
      option.legend = [option.legend, legendOption];
    } else {
      option.legend.push(legendOption);
    }
  },
  [symbols.radar](option: any, props: any, _: any) {
    function getOption() {
      const { circle, ...rest } = props;

      return _merge(
        {
          axisName: {
            color: '#575757',
          },
          axisNameGap: 10,
          shape: circle ? 'circle' : 'polygon',

          splitArea: {
            areaStyle: {
              color: ['#FFFFFF', '#F7F7FA'],
            },
          },
        },
        rest
      );
    }

    const radarOption = getOption();

    if (!option.radar) {
      option.radar = radarOption;
    } else if (!Array.isArray(option.radar)) {
      option.radar = [option.radar, radarOption];
    } else {
      option.radar.push(radarOption);
    }
  },

  [symbols.visualMap](option: any, props: any, context: any) {
    function getComponentOption() {
      const { type = 'continuous', ...rest } = props;
      const { chartData } = context;

      let inRange: any = {
        colorHue: [198, 199],
        colorSaturation: [1, 1],
        colorLightness: [0.88, 0.451],
      };

      if (type === 'piecewise') {
        inRange = {
          symbol: 'rect',
        };
      }

      const visualMapOption = _merge(
        {
          type,
          left: 0,
          bottom: 0,
          text: ['最大值', '最小值'],
          textGap: 5,
          orient: 'horizontal',
          inverse: true,
          min: 0,

          itemGap: 1,
          symbolSize: [18, 14],
          textStyle: {
            color: '#8e8e93',
          },
          inRange,
        },
        rest
      );

      if (chartData && !visualMapOption.max) {
        visualMapOption.max = chartData.reduce(
          (max: any, d: any) => Math.max(max, d[1]),
          -Infinity
        );
      }

      return visualMapOption;
    }

    option.visualMap = getComponentOption();
  },
  [symbols.xAxis](option: any, props: any, context: any) {
    function getOption() {
      const { axisLabel, ...rest } = props;
      const { series } = context;

      return _merge(
        {
          boundaryGap: !!series.find((comp: any) => comp.type[symbols.typeKey] === symbols.bars),
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
        rest
      );
    }

    const xAxisOption = getOption();

    if (!option.xAxis) {
      option.xAxis = xAxisOption;
    } else if (!Array.isArray(option.xAxis)) {
      option.xAxis = [option.xAxis, xAxisOption];
    } else {
      option.xAxis.push(xAxisOption);
    }
  },
  [symbols.yAxis](option: any, props: YAxisProps, _: any) {
    function getOption() {
      const { name, axisLabel, splitLine, transposeNameText = false, ...rest } = props;

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
      option.yAxis = yAxisOption;
    } else if (!Array.isArray(option.yAxis)) {
      option.yAxis = [option.yAxis, yAxisOption];
    } else {
      option.yAxis.push(yAxisOption);
    }
  },
};

export function excludeEchartsProps(props: ChartComponentProps) {
  return _omit(props, ['option', 'locale', 'height', 'loading']);
}

export function createEChartsOptionFromChildren(children: any, _: any): EChartsOption {
  const option = {};

  function getValidChildren(): React.ReactElement[] {
    return flattenChildren(children).filter((child) => {
      return React.isValidElement(child);
    }) as any;
  }

  const validChildren = getValidChildren();

  const series = validChildren.filter((child) => {
    return (symbols as any).series.includes(child.type[symbols.typeKey]);
  });

  const context = {
    ..._,
    series,
  };

  validChildren.forEach((child) => {
    (child.type as OptionComponent<any>).tapEChartsOption?.(
      option,
      excludeEchartsProps(child.props),
      context
    );
    // 处理 child 的 props
    // 根据 child 的 type 上的 symbol
    (createOptions as any)[child.type[symbols.typeKey]]?.(
      option,
      excludeEchartsProps(child.props),
      context
    );
  });

  return option;
}
