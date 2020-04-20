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

if (__DEV__) {
  Sankey.displayName = 'Sankey';
}

export default Sankey;
