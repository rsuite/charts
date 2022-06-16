import type { TreeSeriesOption } from 'echarts';
import 'echarts/lib/chart/tree';
import { symbols } from '../constants';

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
