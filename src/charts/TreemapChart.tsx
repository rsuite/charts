import React, { Children } from 'react';
import type { ECharts as EChartsInstance, TooltipComponentOption } from 'echarts';
import ECharts, { ChartComponentProps } from '../ECharts';
import Tooltip from '../components/Tooltip';
import VisualMap from '../components/VisualMap';
import Treemap, { TreemapProps } from '../series/Treemap';
import { EChartsContext } from '../constants';
import { is } from '../utils';

export interface TreemapChartProps extends ChartComponentProps<TreemapProps['data']> {}

const treemapTooltipFormatter = ({ seriesName, name, value }) =>
  `${name}<br>${seriesName}: ${value}`;

function TreemapChart(
  { name, data = [], children, ...props }: TreemapChartProps,
  ref: React.Ref<EChartsInstance>
) {
  function renderDefaultTreemap() {
    return <Treemap name={name} data={data} />;
  }

  const components = Children.toArray(children) as React.ReactElement[];

  const treemap = components.find((comp) => is(comp, 'treemap'));

  return (
    <EChartsContext.Provider value={{ chartType: 'treemap', dataName: name }}>
      <ECharts ref={ref} {...props}>
        <Tooltip formatter={treemapTooltipFormatter as TooltipComponentOption['formatter']} />
        <VisualMap />
        {!treemap && renderDefaultTreemap()}
        {children}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef<EChartsInstance, TreemapChartProps>(TreemapChart);
