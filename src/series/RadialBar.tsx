import { RadialBar as RechartsRadialBar } from 'recharts';
import type { RadialBarProps } from 'recharts';

export type { RadialBarProps };

/**
 * RadialBar series component.
 * Re-exports recharts RadialBar — colors are automatically injected
 * by the parent RadialBarChart wrapper.
 */
const RadialBar = RechartsRadialBar;

export default RadialBar;
