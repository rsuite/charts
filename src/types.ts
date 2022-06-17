import { EChartsOption } from 'echarts';
import React from 'react';

export type AxisLabelFormatter = (value: string | number) => string;

export type OptionComponent<P> = React.ComponentType<P> & {
  tapEChartsOption(option: EChartsOption, props: P, context: any);
};
