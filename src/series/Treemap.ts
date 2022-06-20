import * as echarts from 'echarts/core';
import { TreemapChart, TreemapSeriesOption } from 'echarts/charts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([TreemapChart]);

export type TreemapProps = TreemapSeriesOption;

const Treemap: OptionComponent<TreemapProps> = (_: TreemapProps) => null;

Treemap.defaultProps = {
  data: [],
};
Treemap[symbols.typeKey] = symbols.treemap;

Treemap.tapEChartsOption = (option, props) => {
  function transformData(node: any) {
    if (!node) {
      return node;
    }
    if (!Array.isArray(node)) {
      return node;
    }
    const [name, value, children] = node;
    return {
      name,
      value,
      children: children && children.map(transformData),
    };
  }

  function getSeriesOption(): TreemapSeriesOption {
    const { data, ...rest } = props;

    return _merge(
      {
        type: 'treemap',
        data: data?.map(transformData),
        itemStyle: {
          areaColor: '#BEDBED',
          borderColor: '#ffffff',
          borderWidth: 1,
        },
        visibleMin: 300,
        leafDepth: 1,
        drillDownIcon: null,
        label: {
          position: 'insideTopLeft',
          color: '#ffffff',
          fontSize: 12,
          lineHeight: 17,
          formatter({ name, value }: any) {
            return `{a|${name}\n${value}}`;
          },
          rich: {
            a: {
              color: '#ffffff',
              fontSize: 12,
              lineHeight: 17,
            },
          },
        },
        levels: [
          {
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1,
              gapWidth: 1,
            },
          },
        ],
      },
      rest
    );
  }

  if (!option.series) {
    option.series = [];
  }

  (option.series as TreemapSeriesOption[]).push(getSeriesOption());
};
if (process.env.NODE_ENV !== 'production') {
  Treemap.displayName = 'Treemap';
}

export default Treemap;
