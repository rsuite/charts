import React from 'react';
import { YAxis as RechartsYAxis } from 'recharts';
import type { YAxisProps as RechartsYAxisProps } from 'recharts';

export type YAxisProps = RechartsYAxisProps;

/**
 * YAxis with rsuite default styling.
 * Wraps recharts YAxis with pre-applied axis line, tick, and label styles.
 */
const YAxis = React.forwardRef<SVGElement, YAxisProps>(
  (
    {
      tick = { fill: '#575757', fontSize: 12 },
      axisLine = false,
      tickLine = false,
      width = 40,
      ...props
    },
    ref
  ) => (
    <RechartsYAxis
      ref={ref as any}
      tick={tick}
      axisLine={axisLine}
      tickLine={tickLine}
      width={width}
      {...props}
    />
  )
);

YAxis.displayName = 'YAxis';

export default YAxis;
