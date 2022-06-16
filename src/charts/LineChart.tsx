import React, { Children, cloneElement } from 'react';
import ECharts, { ChartComponentProps } from '../ECharts';
import Line from '../series/Line';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Legend from '../components/Legend';
import { is, isSeries } from '../utils';
import Tooltip from '../components/Tooltip';
import { EChartsContext } from '../constants';

export interface LineChartProps extends ChartComponentProps {
  tooltip?: boolean;
}

/**
 * <ECharts>
 *   <XAxis />
 *   <YAxis />
 *   <Line />
 *   <Tooltip />
 *   <Legend />
 * </ECharts>
 */
function LineChart(
  { name, data = [], tooltip = true, children, ...props }: LineChartProps,
  ref: any
) {
  function renderDefaultXAxis() {
    return <XAxis {...({ data: data!.map(([category]) => category) } as any)} />;
  }

  function renderDefaultLine() {
    return <Line name={name} data={data!.map((d) => d[1])} />;
  }

  const components = Children.toArray(children);
  const series = components.filter(isSeries);

  return (
    <EChartsContext.Provider value={{ chartType: 'line' }}>
      <ECharts ref={ref} {...props}>
        {!components.find((comp) => is(comp, 'xAxis')) && renderDefaultXAxis()}
        {!components.find((comp) => is(comp, 'yAxis')) && <YAxis />}
        {!components.find((comp) => is(comp, 'line')) && renderDefaultLine()}
        {tooltip && <Tooltip />}
        {!components.find((comp) => is(comp, 'legend')) && <Legend />}
        {components.map((child: any) => {
          if (data.length && isSeries(child) && !child.props.data) {
            const serieIndex = series.indexOf(child);
            return cloneElement(child, { data: data.map((d) => d[serieIndex + 1]) });
          }
          return child;
        })}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef<echarts.ECharts, LineChartProps>(LineChart);
