import { Radar as RechartsRadar } from 'recharts';
import type { RadarProps } from 'recharts';

export type { RadarProps };

/**
 * Radar series component.
 * Re-exports recharts Radar — colors are automatically injected
 * by the parent RadarChart wrapper.
 */
const Radar = RechartsRadar;

export default Radar;
