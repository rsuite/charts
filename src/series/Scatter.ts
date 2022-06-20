import * as echarts from 'echarts/core';
import { ScatterChart, ScatterSeriesOption } from 'echarts/charts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([ScatterChart]);

export type ScatterProps = Omit<ScatterSeriesOption, 'type'>;

const Scatter: OptionComponent<ScatterProps> = (_: ScatterProps) => null;

Scatter[symbols.typeKey] = symbols.scatter;

Scatter.tapEChartsOption = (option, props, context) => {
  function getSeriesOption(): ScatterSeriesOption {
    const { ...rest } = props;

    const { chartType } = context;

    return _merge(
      {
        type: 'scatter',
        symbol: chartType === 'bar' ? 'emptyCircle' : 'circle',
        symbolSize: 9,
        itemStyle: {
          opacity: chartType === 'bar' ? 1 : 0.7,
        },
        emphasis: {
          itemStyle: {
            opacity: 1,
          },
        },
      } as const,
      rest
    );
  }

  if (!option.series) {
    option.series = [];
  }

  (option.series as ScatterSeriesOption[]).push(getSeriesOption());
};

if (process.env.NODE_ENV !== 'production') {
  Scatter.displayName = 'Scatter';
}

export default Scatter;
