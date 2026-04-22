import { Scatter as RechartsScatter } from 'recharts';
import type { ScatterProps } from 'recharts';

export type { ScatterProps };

/**
 * Scatter series component.
 * Re-exports recharts Scatter — fill colors are automatically injected
 * by the parent ScatterChart wrapper.
 */
const Scatter = RechartsScatter;

export default Scatter;
