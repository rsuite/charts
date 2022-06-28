import * as echarts from 'echarts/core';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import _merge from 'lodash.merge';
import { symbols } from '../constants';
import { OptionComponent } from '../types';
import { transformTextOption } from '../utils';

echarts.use([PieChart]);

export interface PieProps extends Omit<PieSeriesOption, 'type'> {
  donut?: boolean;
}

const Pie: OptionComponent<PieProps> = (_: PieProps) => null;

Pie.defaultProps = {
  data: [],
  donut: false,
};

Pie[symbols.typeKey] = symbols.pie;

Pie.tapEChartsOption = (option, props) => {
  function getSeriesOption(): PieSeriesOption {
    const { radius, donut, label, ...rest } = props;

    const pieOption: PieSeriesOption = _merge(
      {
        type: 'pie',
        radius: composeRadiusOption(radius, donut),
        center: ['50%', '50%'],
      } as const,
      rest
    );

    if (label !== undefined) {
      pieOption.label = transformTextOption(label);
    }

    return pieOption;
  }

  if (!option.series) {
    option.series = [];
  }

  (option.series as PieSeriesOption[]).push(getSeriesOption());
};

if (process.env.NODE_ENV !== 'production') {
  Pie.displayName = 'Pie';
}

export default Pie;

export function composeRadiusOption(
  radiusProp: PieProps['radius'],
  donutProp?: boolean
): PieSeriesOption['radius'] {
  if (Array.isArray(radiusProp)) return radiusProp;

  let outerRadius = 80;

  if (typeof radiusProp === 'string') {
    outerRadius = parseFloat(radiusProp) || 80;
  } else if (typeof radiusProp === 'number') {
    outerRadius = radiusProp;
  }

  const innerRadius = outerRadius - 15;

  return donutProp ? [`${innerRadius}%`, `${outerRadius}%`] : `${outerRadius}%`;
}
