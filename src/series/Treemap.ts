import { TreemapSeriesOption } from 'echarts';
import 'echarts/lib/chart/treemap';
import { symbols } from '../constants';

export type TreemapProps = TreemapSeriesOption;

function Treemap(_: TreemapProps) {
  return null;
}

Treemap.defaultProps = {
  data: []
};
Treemap[symbols.typeKey] = symbols.treemap;

if (process.env.NODE_ENV !== 'production') {
  Treemap.displayName = 'Treemap';
}

export default Treemap;
