import React, { Children } from 'react';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Sankey, { SankeyProps } from '../series/Sankey';
import { EChartsContext } from '../constants';
import { is } from '../utils';

export interface SankeyChartProps extends ChartComponentProps<SankeyProps['data']> {

}

function SankeyChart({
  name,
  data = [],
  children,
  ...props
}: SankeyChartProps, ref: any) {

  function renderDefaultSankey() {
    return <Sankey name={name} data={data} />;
  }

  const components = Children.toArray(children);

  const sankey = components.find(comp => is(comp, 'sankey'));

  return (
    <EChartsContext.Provider value={{ chartType: 'sankey', dataName: name }}>
      <ECharts ref={ref} {...props}>
        <Tooltip />
        {!sankey && renderDefaultSankey()}
        {children}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef(SankeyChart);
