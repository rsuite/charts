import React, { Children, cloneElement } from 'react';
import type { ECharts as EChartsInstance } from 'echarts';
import ECharts, { ChartComponentProps } from '../ECharts';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';
import Radar from '../components/Radar';
import RadarLine from '../series/RadarLine';
import { is, isSeries } from '../utils';
import { EChartsContext } from '../constants';

export interface RadarChartProps
  extends ChartComponentProps<[name: string, max: number, ...values: number[]][]> {
  tooltip?: boolean;
  legend?: boolean;
}

function RadarChart(
  { name, data = [], tooltip = true, legend = true, children, ...props }: RadarChartProps,
  ref: React.Ref<EChartsInstance>
) {
  function renderDefaultRadar() {
    const indicator = data.map(([name, max]) => ({ name, max }));

    return <Radar indicator={indicator} />;
  }

  function renderDefaultRadarLine() {
    return <RadarLine name={name} data={data.map(([, , value]) => value)} />;
  }

  const components = Children.toArray(children) as React.ReactElement[];
  const series = components.filter(isSeries);

  return (
    <EChartsContext.Provider value={{ chartType: 'radar', dataName: name }}>
      <ECharts ref={ref} {...props}>
        {!components.find((comp) => is(comp, 'radar')) && renderDefaultRadar()}
        {!components.find((comp) => is(comp, 'radarLine')) && renderDefaultRadarLine()}
        {tooltip && <Tooltip />}
        {legend && <Legend icon="rect" itemWidth={14} />}
        {components.map((child) => {
          if (data.length && isSeries(child) && !child.props.data) {
            const serieIndex = series.indexOf(child);
            return cloneElement(child, { data: data.map((d) => d[serieIndex + 2]) });
          }
          return child;
        })}
      </ECharts>
    </EChartsContext.Provider>
  );
}

if (process.env.NODE_ENV !== 'production') {
  RadarChart.displayName = 'RadarChart';
}

export default React.forwardRef<echarts.ECharts, RadarChartProps>(RadarChart);
