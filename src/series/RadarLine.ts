import * as echarts from 'echarts/core';
import { RadarChart, RadarSeriesOption } from 'echarts/charts';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([RadarChart]);

export type RadarLineProps = Omit<RadarSeriesOption, 'data'> & {
  data?: number[];
};

/**
 * TODO Consider deprecate this component as it can be only used within RadarChart
 */
const RadarLine: OptionComponent<RadarLineProps> = (_: RadarLineProps) => null;

RadarLine[symbols.typeKey] = symbols.radarLine;

RadarLine.tapEChartsOption = (option, props) => {
  const { name, data } = props;

  if (!option.series) {
    option.series = [];
  }

  let radarSerieOption: RadarSeriesOption | undefined = (
    option.series as RadarSeriesOption[]
  )?.find((series) => series.type === 'radar');

  if (!radarSerieOption) {
    radarSerieOption = {
      type: 'radar',
      symbol: 'none',
      lineStyle: {
        width: 2,
      },
      emphasis: {
        lineStyle: {
          width: 3,
        },
        areaStyle: {
          opacity: 0.2,
        },
      },
      data: [],
    };

    (option.series as RadarSeriesOption[]).push(radarSerieOption);
  }

  if (!radarSerieOption.data) {
    radarSerieOption.data = [];
  }

  radarSerieOption.data.push({
    name,
    value: data,
  });
};

if (process.env.NODE_ENV !== 'production') {
  RadarLine.displayName = 'RadarLine';
}

export default RadarLine;
