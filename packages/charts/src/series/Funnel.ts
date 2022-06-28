import * as echarts from 'echarts/core';
import { FunnelChart, FunnelSeriesOption } from 'echarts/charts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';
import { transformTextOption } from '../utils';

echarts.use([FunnelChart]);

export interface FunnelProps extends Omit<FunnelSeriesOption, 'type'> {
  asc?: boolean;
}

const Funnel: OptionComponent<FunnelProps> = (_: FunnelProps) => null;

Funnel.defaultProps = {
  asc: false,
};

Funnel[symbols.typeKey] = symbols.funnel;

Funnel.tapEChartsOption = (option, props) => {
  function getSeriesOption(): FunnelSeriesOption {
    const { data, asc, sort = asc ? 'ascending' : 'descending', label, ...rest } = props;

    return _merge(
      {
        type: 'funnel' as const,
        data: data
          ?.map(([name, value]: any) => ({
            name,
            value,
          }))
          .sort((d1: any, d2: any) => d2.value - d1.value),
        sort,
        label: transformTextOption(label, {
          show: true,
          position: 'inside',
          formatter: ({ value }: any) => value,
          fontSize: 14,
        }),
      },
      rest
    );
  }

  if (!option.series) {
    option.series = [];
  }

  (option.series as FunnelSeriesOption[]).push(getSeriesOption());
};

if (process.env.NODE_ENV !== 'production') {
  Funnel.displayName = 'Funnel';
}

export default Funnel;
