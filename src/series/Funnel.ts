import * as echarts from 'echarts/core';
import { FunnelChart, FunnelSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([FunnelChart]);

export interface FunnelProps extends FunnelSeriesOption {
  asc?: boolean;
}

function Funnel(_: FunnelProps) {
  return null;
}

Funnel.defaultProps = {
  asc: false,
};

Funnel[symbols.typeKey] = symbols.funnel;

if (process.env.NODE_ENV !== 'production') {
  Funnel.displayName = 'Funnel';
}

export default Funnel;
