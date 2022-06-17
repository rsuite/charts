import * as echarts from 'echarts/core';
import { RadarChart, RadarSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';

echarts.use([RadarChart]);

export type RadarLineProps = RadarSeriesOption;

function RadarLine(_: RadarLineProps) {
  return null;
}

RadarLine[symbols.typeKey] = symbols.radarLine;

if (process.env.NODE_ENV !== 'production') {
  RadarLine.displayName = 'RadarLine';
}

export default RadarLine;
