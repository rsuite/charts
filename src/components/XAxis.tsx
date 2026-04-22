import React from 'react';
import { XAxis as RechartsXAxis } from 'recharts';
import type { XAxisProps as RechartsXAxisProps } from 'recharts';

export type XAxisProps = RechartsXAxisProps;

/**
 * XAxis with rsuite default styling.
 * Wraps recharts XAxis with pre-applied axis line, tick, and label styles.
 */
const XAxis = React.forwardRef<SVGElement, XAxisProps>(
  (
    {
      tick = { fill: '#575757', fontSize: 12 },
      axisLine = { stroke: '#e5e5ea' },
      tickLine = false,
      ...props
    },
    ref
  ) => (
    <RechartsXAxis
      ref={ref as any}
      tick={tick}
      axisLine={axisLine}
      tickLine={tickLine}
      {...props}
    />
  )
);

XAxis.displayName = 'XAxis';

export default XAxis;
