import 'echarts/lib/component/visualMap';
import { symbols } from '../constants';

export type VisualMapProps = echarts.EChartOption.VisualMap;

function VisualMap(_: VisualMapProps){
  return null;
}

VisualMap[symbols.typeKey] = symbols.visualMap;

if (process.env.NODE_ENV !== 'production') {
  VisualMap.displayName = 'VisualMap';
}

export default VisualMap;
