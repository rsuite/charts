import * as echarts from 'echarts/core';
import { TreemapChart, TreemapSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([TreemapChart]);

export type TreemapProps = TreemapSeriesOption;

function Treemap(_: TreemapProps) {
  return null;
}

Treemap.defaultProps = {
  data: [],
};
Treemap[symbols.typeKey] = symbols.treemap;

if (process.env.NODE_ENV !== 'production') {
  Treemap.displayName = 'Treemap';
}

export default Treemap;
