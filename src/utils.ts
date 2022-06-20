import React from 'react';
import _merge from 'lodash.merge';
import _omit from 'lodash.omit';
import flattenChildren from 'react-keyed-flatten-children';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import { TitleComponent } from 'echarts/components';
import { symbols } from './constants';
import { ChartComponentProps } from './ECharts';
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
    // 处理 child 的 props
    // 根据 child 的 type 上的 symbol
    (child.type as OptionComponent<any>).tapEChartsOption?.(
      option,
      excludeEchartsProps(child.props),
      context
    );
  });

  return option;
}
