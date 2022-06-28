import React from 'react';
import _merge from 'lodash.merge';
import _omit from 'lodash.omit';
import flattenChildren from 'react-keyed-flatten-children';
import type { DatasetComponentOption, EChartsOption, SeriesOption } from 'echarts';
import * as echarts from 'echarts/core';
import { TitleComponent } from 'echarts/components';
import { symbols } from './constants';
import { ChartComponentProps } from './ECharts';
import type { OptionComponent } from './types';

echarts.use([TitleComponent]);

export function is(element: React.ReactElement, name: string): boolean {
  return element.type[symbols.typeKey] === Symbol.for(`$$${name}`);
}

export function isSeries(element: React.ReactElement) {
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

export function excludeEchartsProps(props: ChartComponentProps) {
  return _omit(props, ['option', 'locale', 'height', 'loading']);
}

export function createEChartsOptionFromChildren(
  children: React.ReactNode,
  _: Record<string, unknown>
): EChartsOption {
  const option = {};

  const validChildren = flattenChildren(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];

  const series = validChildren.filter((child) => {
    return (symbols as any).series.includes(child.type[symbols.typeKey]);
  });

  const context = {
    ..._,
    series,
  };

  validChildren.forEach((child) => {
    // 处理 child 的 props
    // 根据 child 的 type 上的 symbol
    (child.type as OptionComponent<unknown>).tapEChartsOption?.(
      option,
      excludeEchartsProps(child.props),
      context
    );
  });

  return option;
}

/**
 * 判断 option 是否没有数据，
 * 用于显示数据为空的 placeholder
 */
export function isDataEmpty(option: EChartsOption) {
  if (option.dataset) {
    return isDatasetEmpty(option.dataset as DatasetComponentOption);
  }

  return isSeriesEmpty(option.series);
}

/**
 * 进入此方法时一定存在 option.dataset
 */
function isDatasetEmpty(dataset: DatasetComponentOption) {
  if (!dataset.source) {
    return true;
  }

  if (Array.isArray(dataset.source)) {
    return dataset.source.length < 1;
  }

  return Object.getOwnPropertyNames(dataset.source).length < 1;
}

function isSeriesEmpty(series: EChartsOption['series']) {
  return (
    !series ||
    (series as SeriesOption[]).every((serie) => {
      if (serie.type === 'sankey') {
        return (!serie.nodes || serie.nodes.length < 1) && (!serie.data || serie.data.length < 1);
      }

      return !serie.data || (serie.data as unknown[]).length < 1;
    })
  );
}
