import 'echarts/lib/chart/tree';
import { symbols } from '../constants';

export type TreeProps = echarts.EChartOption.SeriesTree;

function Tree(_: TreeProps) {
  return null;
}

Tree.defaultProps = {
  data: []
};

Tree[symbols.typeKey] = symbols.tree;

if (process.env.NODE_ENV !== 'production') {
  Tree.displayName = 'Tree';
}

export default Tree;
