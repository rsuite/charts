import 'echarts/lib/chart/line';
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

if (__DEV__) {
  Funnel.displayName = 'Funnel';
}

export default Funnel;
