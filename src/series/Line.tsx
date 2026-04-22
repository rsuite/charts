import { Line as RechartsLine } from 'recharts';
import type { LineProps } from 'recharts';

export type { LineProps };

/**
 * Line series component.
 * Re-exports recharts Line — colors (stroke) are automatically injected
 * by the parent LineChart or ComposedChart wrapper.
 */
const Line = RechartsLine;

export default Line;
