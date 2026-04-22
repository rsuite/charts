import { Pie as RechartsPie, Cell as RechartsCell } from 'recharts';
import type { PieProps, CellProps } from 'recharts';

export type { PieProps, CellProps };

/**
 * Pie series component.
 * Re-exports recharts Pie — cell colors are automatically injected
 * by the parent PieChart wrapper.
 */
const Pie = RechartsPie;

/**
 * Cell component for individual slice coloring in PieChart.
 */
const Cell = RechartsCell;

export { Cell };
export default Pie;
