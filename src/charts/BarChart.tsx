import React, { Children, cloneElement } from 'react';
import ECharts, { ChartComponentProps } from '../ECharts';
import XAxis from '../components/XAxis';
import YAxis from '../components/YAxis';
import Legend from '../components/Legend';
import Tooltip from '../components/Tooltip';
import Bars from '../series/Bars';
import { is, isSeries } from '../utils';
import { EChartsContext } from '../constants';

const categoryAxisProps: any = {
  type: 'category',
  splitLine: false
};

const valueAxisProps: any = {
  type: 'value'
};

interface BarChartProps extends ChartComponentProps {
  horizontal?: boolean;
  tooltip?: boolean;
  xAxis?: boolean;
  yAxis?: boolean;
  legend?: boolean;
}

/**
 * <ECharts>
 *   <XAxis />
 *   <YAxis />
 *   <Bars />
 *   <Tooltip />
 *   <Legend />
 * </ECharts>
 */
function BarChart({
  name,
  data: inputData = [],
  tooltip = true,
  xAxis = true,
  yAxis = true,
  horizontal = false,
  legend = true,
  children,
  ...props
}: BarChartProps, ref: any) {

  function renderDefaultCategoryAxis() {
    const data = horizontal ? [...inputData!].reverse() : inputData;
    const categories = data!.map(([category]) => category);

    return horizontal ? (
      <YAxis {...categoryAxisProps} data={categories} />
    ) : (
      <XAxis {...categoryAxisProps} data={categories} />
    );
  }

  function renderDefaultValueAxis() {
    return horizontal ? (
      <XAxis {...valueAxisProps} show={xAxis} />
    ) : (
      <YAxis {...valueAxisProps} show={yAxis} />
    );
  }

  function renderDefaultSeries() {
    // 水平图表从上往下阅读则需将 data 翻转过来
    const data = horizontal ? [...inputData!].reverse() : inputData!;
    const values = data.map(d => d[1]);

    return <Bars name={name} data={values} />;
  }

  function renderDefaultLegend() {
    const components = Children.toArray(children);
    const series = components.filter(isSeries);
    const dataNames = series.length ? series.map((serie: any) => serie.name) : [name];
    return <Legend data={dataNames} />;
  }

  const components = Children.toArray(children);
  const series = components.filter(isSeries);

  const data = horizontal ? [...inputData!].reverse() : inputData;

  const categoryAxis = horizontal
    ? components.find((comp: any) => is(comp, 'yAxis'))
    : components.find((comp: any) => is(comp, 'xAxis'));

  const valueAxis = horizontal
    ? components.find((comp: any) => is(comp, 'xAxis'))
    : components.find((comp: any) => is(comp, 'yAxis'));

  return (
    <EChartsContext.Provider value={{ chartType: 'bar', horizontal }}>
      <ECharts ref={ref} {...props}>
        {!categoryAxis && renderDefaultCategoryAxis()}
        {!valueAxis && renderDefaultValueAxis()}
        {!components.find((comp: any) => is(comp, 'bars')) && renderDefaultSeries()}
        {legend && !components.find((comp: any) => is(comp, 'legend')) && renderDefaultLegend()}
        {tooltip && <Tooltip />}
        {components.map((child: any) => {
          if (child.type === (horizontal ? YAxis : XAxis)) {
            return cloneElement(child, {
              ...categoryAxisProps,
              data: child.props.data || data!.map(([category]) => category)
            });
          }
          if (child.type === (horizontal ? XAxis : YAxis)) {
            return cloneElement(child, valueAxisProps);
          }
          if (data!.length && isSeries(child) && !child.props.data) {
            const serieIndex = series.indexOf(child);
            return cloneElement(child, { data: data!.map(d => d[serieIndex + 1]) });
          }
          return child;
        })}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef<echarts.ECharts, BarChartProps>(BarChart);
