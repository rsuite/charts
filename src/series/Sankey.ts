import * as echarts from 'echarts/core';
import { SankeyChart, SankeySeriesOption } from 'echarts/charts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([SankeyChart]);

export type SankeyProps = SankeySeriesOption;

const Sankey: OptionComponent<SankeyProps> = (_: SankeyProps) => null;

Sankey[symbols.typeKey] = symbols.sankey;

Sankey.tapEChartsOption = (option, props) => {
  function getSeriesOption(): SankeySeriesOption {
    return _merge(
      {
        type: 'sankey',
        nodeWidth: 30,
        nodeGap: 20,
        itemStyle: {
          borderWidth: 0,
        },
        lineStyle: {
          color: '#cfcfcf',
          curveness: 0.5,
        },
      },
      props
    );
  }

  if (!option.series) {
    option.series = [];
  }

  (option.series as SankeySeriesOption[]).push(getSeriesOption());
};

if (process.env.NODE_ENV !== 'production') {
  Sankey.displayName = 'Sankey';
}

export default Sankey;
