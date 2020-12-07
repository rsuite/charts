import 'echarts/lib/chart/treemap';
import { symbols } from '../constants';

export type SankeyProps = echarts.EChartOption.SeriesSankey | any;

function Sankey(_: SankeyProps) {
  return null;
}

Sankey.defaultProps = {
  data: {
    nodes: [],
    links: []
  }
};
Sankey[symbols.typeKey] = symbols.sankey;

if (process.env.NODE_ENV !== 'production') {
  Sankey.displayName = 'Sankey';
}

export default Sankey;
