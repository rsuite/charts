import React from 'react';
import type { EChartsOption } from 'echarts';

export type AxisLabelFormatter = (value: string | number) => string;

export type OptionComponent<P> = React.ComponentType<P> & {
  tapEChartsOption(
    option: EChartsOption,
    props: P,
    context: {
      [key: string]: unknown;
      series: React.ReactElement[];
    }
  );
};
