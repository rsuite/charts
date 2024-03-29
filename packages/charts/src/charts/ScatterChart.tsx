import React, { Children, cloneElement } from 'react';
import _merge from 'lodash.merge';
import type { ECharts as EChartsInstance } from 'echarts';
import ECharts, { ChartComponentProps } from '../ECharts';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';
import XAxis from '../components/XAxis';
import type { XAxisProps } from '../components/XAxis';
import YAxis from '../components/YAxis';
import type { YAxisProps } from '../components/YAxis';
import Scatter, { ScatterProps } from '../series/Scatter';
import { EChartsContext } from '../constants';
import { is } from '../utils';

const xAxisProps: XAxisProps = {
  axisLine: {
    symbol: ['none', 'arrow'],
    symbolSize: [9, 9],
  },
  nameLocation: 'middle',
  nameGap: 25,
  nameTextStyle: {
    fontSize: 14,
    color: '#272c36',
  },
};

const yAxisProps: YAxisProps = {
  axisLine: {
    show: true,
    symbol: ['none', 'arrow'],
    symbolSize: [9, 9],
  },
  splitLine: false,
  nameLocation: 'middle',
  nameGap: 35,
  nameTextStyle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#272c36',
  },
};

export interface ScatterChartProps extends ChartComponentProps<ScatterProps['data']> {
  tooltip?: boolean;
  legend?: boolean;
}

function ScatterChart(
  { name, data = [], tooltip = true, legend = true, children, ...props }: ScatterChartProps,
  ref: React.Ref<EChartsInstance>
) {
  function renderDefaultScatter() {
    return <Scatter name={name} data={data} />;
  }

  const components = Children.toArray(children) as React.ReactElement[];

  return (
    <EChartsContext.Provider value={{ chartType: 'scatter', dataName: name }}>
      <ECharts ref={ref} {...props}>
        {!components.find((comp) => is(comp, 'xAxis')) && <XAxis {...xAxisProps} />}
        {!components.find((comp) => is(comp, 'yAxis')) && <YAxis {...yAxisProps} />}
        {!components.find((comp) => is(comp, 'scatter')) && renderDefaultScatter()}
        {tooltip && <Tooltip />}
        {legend && <Legend icon="circle" itemHeight={10} itemWidth={10} itemGap={30} />}
        {components.map((child) => {
          if (is(child, 'xAxis')) {
            return cloneElement(child, _merge(xAxisProps, child.props));
          }
          if (is(child, 'yAxis')) {
            return cloneElement(child, _merge(yAxisProps, child.props));
          }
          return child;
        })}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef<echarts.ECharts, ScatterChartProps>(ScatterChart);
