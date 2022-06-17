import * as echarts from 'echarts/core';
import { SankeyChart, SankeySeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([SankeyChart]);

export type SankeyProps = SankeySeriesOption;

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
