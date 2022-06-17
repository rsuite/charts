import * as echarts from 'echarts/core';
import { TreeChart, TreeSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([TreeChart]);

export type TreeProps = TreeSeriesOption;

function Tree(_: TreeProps) {
  return null;
}

Tree.defaultProps = {
  data: [],
};

Tree[symbols.typeKey] = symbols.tree;

if (process.env.NODE_ENV !== 'production') {
  Tree.displayName = 'Tree';
}

export default Tree;
