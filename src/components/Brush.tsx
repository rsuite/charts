import React from 'react';
import { Brush as RechartsBrush } from 'recharts';
import type { BrushProps } from 'recharts';

/**
 * Brush with rsuite default styling.
 * Used to zoom into a section of a cartesian chart.
 */
const Brush = React.forwardRef<SVGElement, BrushProps>(
  (
    {
      stroke = '#e5e5ea',
      fill = '#f7f7fa',
      height = 24,
      ...props
    },
    ref
  ) => (
    <RechartsBrush
      ref={ref as any}
      stroke={stroke}
      fill={fill}
      height={height}
      {...props}
    />
  )
);

Brush.displayName = 'Brush';

export default Brush;
