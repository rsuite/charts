import { EChartsOption } from 'echarts';
import 'echarts/lib/component/dataZoom';
import { symbols } from '../constants';

export type DataZoomProps = EChartsOption['dataZoom'];

function DataZoom(_: DataZoomProps) {
  return null;
}

DataZoom[symbols.typeKey] = symbols.dataZoom;

if (process.env.NODE_ENV !== 'production') {
  DataZoom.displayName = 'DataZoom';
}

export default DataZoom;
