import * as echarts from 'echarts/core';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import type { OptionComponent } from '../types';
import { randstr } from '../utils';

echarts.use([LineChart]);

export type LineProps = Omit<LineSeriesOption, 'type' | 'stack'> & {
  stack?: string | boolean;
  area?: boolean;
};

const Line: OptionComponent<LineProps> = (_: LineProps) => null;

Line[symbols.typeKey] = symbols.line;

const defaultLineStackKey = randstr();

Line.tapEChartsOption = (option, props) => {
  function getSeriesOption(): LineSeriesOption {
    const { stack, area, ...rest } = props;

    return _merge(
      {
        type: 'line',
        symbol: 'none',
        stack: typeof stack === 'boolean' ? defaultLineStackKey : stack,
        areaStyle: area && { opacity: stack ? 0.6 : 0.2 },
      } as const,
      rest
    );
  }

  if (!option.series) {
    option.series = [];
  }

  (option.series as LineSeriesOption[]).push(getSeriesOption());
};

if (process.env.NODE_ENV !== 'production') {
  Line.displayName = 'Line';
}

export default Line;
