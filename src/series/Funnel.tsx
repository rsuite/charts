import { Funnel as RechartsFunnel } from 'recharts';
import type { FunnelProps } from 'recharts';

export type { FunnelProps };

/**
 * Funnel series component.
 * Re-exports recharts Funnel — colors are automatically injected
 * by the parent FunnelChart wrapper.
 */
const Funnel = RechartsFunnel;

export default Funnel;
