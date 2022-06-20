import * as echarts from 'echarts/core';
import { MapChart, MapSeriesOption } from 'echarts/charts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([MapChart]);

export type MapProps = Omit<MapSeriesOption, 'type'>;

const Map: OptionComponent<MapProps> = (_: MapProps) => null;

Map[symbols.typeKey] = symbols.map;
Map.tapEChartsOption = (option, props) => {
  function getSeriesOption(): MapSeriesOption {
    const { map, name, data, nameMap, ...rest } = props;

    return _merge(
      {
        type: 'map' as const,
        map,
        name,
        data: data?.map(([name, value]: any) => ({
          name: (nameMap && nameMap[name]) || name,
          value,
        })),
        itemStyle: {
          areaColor: '#E5E5EA',
          borderColor: '#ffffff',
          borderWidth: 1,
        },
        label: {
          fontSize: 10,
        },
        emphasis: {
          label: {
            color: 'rgb(131, 56, 236)',
          },
          itemStyle: {
            areaColor: 'rgba(131, 56, 236, .3)',
            borderColor: 'rgb(131, 56, 236)',
          },
        },
        nameMap,
      },
      rest
    );
  }

  if (!option.series) {
    option.series = [];
  }

  (option.series as MapSeriesOption[]).push(getSeriesOption());
};

if (process.env.NODE_ENV !== 'production') {
  Map.displayName = 'Map';
}

export default Map;
