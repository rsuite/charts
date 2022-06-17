import * as echarts from 'echarts/core';
import { DataZoomComponent, DataZoomComponentOption } from 'echarts/components';
import { symbols } from '../constants';

echarts.use([DataZoomComponent]);

export type DataZoomProps = DataZoomComponentOption;

function DataZoom(_: DataZoomProps) {
  return null;
}

DataZoom[symbols.typeKey] = symbols.dataZoom;

if (process.env.NODE_ENV !== 'production') {
  DataZoom.displayName = 'DataZoom';
}

export default DataZoom;
