// Container
export { default as ChartContainer } from './ChartContainer';
export type { ChartContainerProps, ChartContainerLocale } from './ChartContainer';

// Context / theming
export { ChartContext, useChartContext } from './ChartContext';
export type { ChartContextValue } from './ChartContext';
export { palette, colors } from './theme';

// Chart wrappers
export { default as BarChart } from './charts/BarChart';
export type { BarChartProps } from './charts/BarChart';

export { default as LineChart } from './charts/LineChart';
export type { LineChartProps } from './charts/LineChart';

export { default as AreaChart } from './charts/AreaChart';
export type { AreaChartProps } from './charts/AreaChart';

export { default as ComposedChart } from './charts/ComposedChart';
export type { ComposedChartProps } from './charts/ComposedChart';

export { default as ScatterChart } from './charts/ScatterChart';
export type { ScatterChartProps } from './charts/ScatterChart';

export { default as PieChart } from './charts/PieChart';
export type { PieChartProps } from './charts/PieChart';

export { default as RadarChart } from './charts/RadarChart';
export type { RadarChartProps } from './charts/RadarChart';

export { default as RadialBarChart } from './charts/RadialBarChart';
export type { RadialBarChartProps } from './charts/RadialBarChart';

export { default as Treemap } from './charts/Treemap';
export type { TreemapProps } from './charts/Treemap';

export { default as FunnelChart } from './charts/FunnelChart';
export type { FunnelChartProps } from './charts/FunnelChart';

// Styled axis / grid components
export { default as XAxis } from './components/XAxis';
export type { XAxisProps } from './components/XAxis';

export { default as YAxis } from './components/YAxis';
export type { YAxisProps } from './components/YAxis';

export { default as CartesianGrid } from './components/CartesianGrid';
export type { CartesianGridProps } from './components/CartesianGrid';

export { default as Tooltip } from './components/Tooltip';

export { default as Legend } from './components/Legend';

export { default as Brush } from './components/Brush';

// Series components
export { default as Bar } from './series/Bar';
export type { BarProps } from './series/Bar';

export { default as Line } from './series/Line';
export type { LineProps } from './series/Line';

export { default as Area } from './series/Area';
export type { AreaProps } from './series/Area';

export { default as Scatter } from './series/Scatter';
export type { ScatterProps } from './series/Scatter';

export { default as Pie, Cell } from './series/Pie';
export type { PieProps, CellProps } from './series/Pie';

export { default as Radar } from './series/Radar';
export type { RadarProps } from './series/Radar';

export { default as RadialBar } from './series/RadialBar';
export type { RadialBarProps } from './series/RadialBar';

export { default as Funnel } from './series/Funnel';
export type { FunnelProps } from './series/Funnel';

// Useful recharts components re-exported for convenience
export {
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ZAxis,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  Label,
  LabelList,
} from 'recharts';
