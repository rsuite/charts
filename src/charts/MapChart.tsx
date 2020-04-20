import React, { Children } from 'react';
import _merge from 'lodash.merge';
import ECharts from '../ECharts';
import Tooltip from '../components/Tooltip';
import Map, { MapProps } from '../series/Map';
import VisualMap from '../components/VisualMap';
import { EChartsContext } from '../constants';
import { is } from '../utils';

const mapVisualMapColors = [
  'rgb(8, 132, 204)',
  'rgba(8, 132, 204, .8)',
  'rgba(8, 132, 204, .6)',
  'rgba(8, 132, 204, .4)',
  'rgba(8, 132, 204, .3)'
];

interface MapChartProps extends ChartComponentProps<MapProps['data']>, MapProps {
  visualMap?: boolean;
}

function MapChart({
  name,
  data = [],
  visualMap: shouldShowVisualMap = true,
  children,
  ...props
}: MapChartProps, ref: any) {

  function renderDefaultMap() {
    return <Map name={name} data={data} {...props} />;
  }

  const components = Children.toArray(children);

  const compVisualMap = components.find(comp => is(comp, 'visualMap'));

  const visualMapProps: any = {
    show: shouldShowVisualMap !== false,
    type: 'piecewise',
    inRange: {
      color: [...mapVisualMapColors].reverse()
    },
    controller: {
      symbol: 'rect'
    }
  };

  const map = components.find(comp => is(comp, 'map'));

  return (
    <EChartsContext.Provider value={{ chartType: 'map', dataName: name, chartData: data }}>
      <ECharts ref={ref} {...props}>
        <Tooltip />
        {!compVisualMap && <VisualMap {...visualMapProps} />}
        {!map && renderDefaultMap()}
        {components.map((child: any) => {
          if (child.type === VisualMap) {
            return React.cloneElement(child, _merge(visualMapProps, child.props));
          }
          return child;
        })}
      </ECharts>
    </EChartsContext.Provider>
  );
}

export default React.forwardRef(MapChart);
