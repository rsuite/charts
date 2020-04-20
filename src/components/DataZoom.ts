import 'echarts/lib/component/dataZoom';
import { symbols } from '../constants';

export type DataZoomProps = echarts.EChartOption.DataZoom;

function DataZoom(_: DataZoomProps) {
  return null;
}

DataZoom[symbols.typeKey] = symbols.dataZoom;

if (__DEV__) {
  DataZoom.displayName = 'DataZoom';
}

export default DataZoom;
