import React, { Children } from 'react';
import type { TreeSeriesOption } from 'echarts';
import ECharts, { ChartComponentProps } from '../ECharts';
import Tooltip from '../components/Tooltip';
import Tree from '../series/Tree';
import { EChartsContext } from '../constants';
import { is } from '../utils';

type TreeProps = TreeSeriesOption;
export interface TreeChartProps extends ChartComponentProps<TreeProps['data']> {}

function TreeChart({ data = [], children, ...props }: TreeChartProps, ref: any) {
  function renderDefaultTree() {
    return <Tree data={data} />;
  }

  const components = Children.toArray(children) as React.ReactElement[];

  const tree = components.find((comp) => is(comp, 'tree'));

  return (
    <EChartsContext.Provider value={{ chartType: 'tree', dataName: name }}>
      <ECharts ref={ref} {...props}>
        <Tooltip />
        {!tree && renderDefaultTree()}
        {children}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef<echarts.ECharts, TreeChartProps>(TreeChart);
