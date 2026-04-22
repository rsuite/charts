import { Area as RechartsArea } from 'recharts';
import type { AreaProps } from 'recharts';

export type { AreaProps };

/**
 * Area series component.
 * Re-exports recharts Area — colors (stroke/fill) are automatically injected
 * by the parent AreaChart or ComposedChart wrapper.
 */
const Area = RechartsArea;

export default Area;
