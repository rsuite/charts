import { Bar as RechartsBar } from 'recharts';
import type { BarProps } from 'recharts';

export type { BarProps };

/**
 * Bar series component.
 * Re-exports recharts Bar — colors are automatically injected
 * by the parent BarChart or ComposedChart wrapper.
 */
const Bar = RechartsBar;

export default Bar;
