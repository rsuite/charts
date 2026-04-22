import React from 'react';
import { CartesianGrid as RechartsCartesianGrid } from 'recharts';
import type { CartesianGridProps as RechartsCartesianGridProps } from 'recharts';

export type CartesianGridProps = RechartsCartesianGridProps;

/**
 * CartesianGrid with rsuite default styling (subtle horizontal lines only).
 */
const CartesianGrid = React.forwardRef<SVGElement, CartesianGridProps>(
  (
    {
      strokeDasharray = '3 3',
      stroke = '#e5e5ea',
      vertical = false,
      ...props
    },
    ref
  ) => (
    <RechartsCartesianGrid
      ref={ref as any}
      strokeDasharray={strokeDasharray}
      stroke={stroke}
      vertical={vertical}
      {...props}
    />
  )
);

CartesianGrid.displayName = 'CartesianGrid';

export default CartesianGrid;
