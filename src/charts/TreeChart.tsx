import React, { Children } from 'react';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Tree from '../series/Tree';
import { EChartsContext } from '../constants';
import { is } from '../utils';

type TreeProps = echarts.EChartOption.SeriesTree;
export interface TreeChartProps extends ChartComponentProps<TreeProps['data']> {

}

function TreeChart({
  data = [],
  children,
  ...props
}: TreeChartProps, ref: any) {

  function renderDefaultTree() {
    return <Tree name={name} data={data} />;
  }

  const components = Children.toArray(children);

  const tree = components.find(comp => is(comp, 'tree'));

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

export default React.forwardRef(TreeChart);
