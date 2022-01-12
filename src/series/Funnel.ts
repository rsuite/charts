import 'echarts/lib/chart/funnel';
import { symbols } from '../constants';

export interface FunnelProps extends echarts.EChartOption.SeriesFunnel {
  asc?: boolean;
}

function Funnel(_: FunnelProps) {
  return null;
}

Funnel.defaultProps = {
  asc: false
};

Funnel[symbols.typeKey] = symbols.funnel;

if (process.env.NODE_ENV !== 'production') {
  Funnel.displayName = 'Funnel';
}

export default Funnel;
