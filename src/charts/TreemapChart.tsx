import React, { Children } from 'react';
import ECharts, { SeriesChartComponentProps } from '../ECharts';
import Tooltip from '../components/Tooltip';
import VisualMap from '../components/VisualMap';
import Treemap, { TreemapProps } from '../series/Treemap';
import { EChartsContext } from '../constants';
import { is } from '../utils';

export interface TreemapChartProps extends SeriesChartComponentProps<TreemapProps> {}

const treemapTooltipFormatter = ({ seriesName, name, value }: any) =>
  `${name}<br>${seriesName}: ${value}`;

function TreemapChart({ name, data = [], children, ...props }: TreemapChartProps, ref: any) {
  function renderDefaultTreemap() {
    return <Treemap name={name} data={data} />;
  }

  const components = Children.toArray(children);

  const treemap = components.find(comp => is(comp, 'treemap'));

  return (
    <EChartsContext.Provider value={{ chartType: 'treemap', dataName: name }}>
      <ECharts ref={ref} {...props}>
        <Tooltip formatter={treemapTooltipFormatter} />
        <VisualMap />
        {!treemap && renderDefaultTreemap()}
        {children}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef<echarts.ECharts, TreemapChartProps>(TreemapChart);
