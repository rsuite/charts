import React, { Children } from 'react';
import ECharts from '../ECharts';
import Pie, { PieProps } from '../series/Pie';
import Tooltip from '../components/Tooltip';
import Legend from '../components/Legend';
import { EChartsContext } from '../constants';
import { is } from '../utils';

export interface PieChartProps extends ChartComponentProps<PieProps['data']>, PieProps {
  legend?: boolean;
}

function PieChart({
  data = [],
  legend = true,
  children,
  ...props
}: PieChartProps, ref: any) {

  const components = Children.toArray(children);

  function getPieData() {
    return (data as any).map(([name, value]: any) => ({ name, value }));
  }

  return (
    <EChartsContext.Provider value={{ chartType: 'pie' }}>
      <ECharts ref={ref} {...props}>
        {legend === true && !components.some(comp => is(comp, 'legend')) && <Legend />}
        {!components.some(comp => is(comp, 'tooltip')) && <Tooltip />}
        {!components.some(comp => is(comp, 'pie')) && <Pie data={getPieData()} {...props} />}
        {children}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef(PieChart);
