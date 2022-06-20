import * as echarts from 'echarts/core';
import { TreeChart, TreeSeriesOption } from 'echarts/charts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';

echarts.use([TreeChart]);

export type TreeProps = TreeSeriesOption;

const Tree: OptionComponent<TreeProps> = (_: TreeProps) => null;

Tree.defaultProps = {
  data: [],
};

Tree[symbols.typeKey] = symbols.tree;

Tree.tapEChartsOption = (option, props) => {
  function getSeriesOption(): TreeSeriesOption {
    const { name, data, ...rest } = props;

    return _merge(
      {
        type: 'tree',
        name,
        data,
        symbolSize: 8,
        itemStyle: {
          color: '#34c3ff',
          borderColor: '#34c3ff',
          borderWidth: 2,
        },
        label: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
        },

        leaves: {
          label: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left',
          },
        },
      },
      rest
    );
  }

  if (!option.series) {
    option.series = [];
  }

  (option.series as TreeSeriesOption[]).push(getSeriesOption());
};

if (process.env.NODE_ENV !== 'production') {
  Tree.displayName = 'Tree';
}

export default Tree;
