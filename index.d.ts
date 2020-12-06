type DataZoomProps = echarts.EChartOption.DataZoom;

export class DataZoom extends React.Component<DataZoomProps, any> {}

type LegendProps = echarts.EChartOption.Legend;

export class Legend extends React.Component<LegendProps, any> {}

type RadarProps = echarts.EChartOption['radar'];

export class Radar extends React.Component<RadarProps, any> {}

type TooltipProps = echarts.EChartOption.Tooltip;

export class Tooltip extends React.Component<TooltipProps, any> {}

type VisualMapProps = echarts.EChartOption.VisualMap;

export class VisualMap extends React.Component<VisualMapProps, any> {}

type AxisLabelFormatter = (value: string | number) => string;

type XAxisProps = echarts.EChartOption.XAxis & {
  axisLine?: echarts.EChartOption.XAxis['axisLine'] | boolean;
  axisLabel?: echarts.EChartOption.XAxis['axisLabel'] | boolean | AxisLabelFormatter;
  splitLine?: echarts.EChartOption.XAxis['splitLine'] | boolean;
};

export class XAxis extends React.Component<XAxisProps, any> {}

type YAxisProps = echarts.EChartOption.YAxis & {
  axisLine?: echarts.EChartOption.YAxis['axisLine'] | boolean;
  axisLabel?: echarts.EChartOption.YAxis['axisLabel'] | boolean | AxisLabelFormatter;
  splitLine?: echarts.EChartOption.YAxis['splitLine'] | boolean;
};

export class YAxis extends React.Component<YAxisProps, any> {}

type BarsProps = echarts.EChartOption.SeriesBar & {
  color?: string | string[];
};

export class Bars extends React.Component<BarsProps, any> {}

interface FunnelProps extends echarts.EChartOption.SeriesFunnel {
  asc?: boolean;
}

export class Funnel extends React.Component<FunnelProps, any> {}

type LineProps = echarts.EChartOption.SeriesLine & {
  stack?: string | boolean;
  area?: boolean;
};

export class Line extends React.Component<LineProps, any> {}

type MapProps = echarts.EChartOption.SeriesMap;

export class Map extends React.Component<MapProps, any> {}

interface PieProps extends echarts.EChartOption.SeriesPie {
  donut?: boolean;
}

export class Pie extends React.Component<PieProps, any> {}

type RadarLineProps = echarts.EChartOption.SeriesRadar;

export class RadarLine extends React.Component<RadarLineProps, any> {}

type SankeyProps = echarts.EChartOption.SeriesSankey;

export class Sankey extends React.Component<SankeyProps, any> {}

type ScatterProps = echarts.EChartOption.SeriesScatter;

export class Scatter extends React.Component<ScatterProps, any> {}

type TreeProps = echarts.EChartOption.SeriesTree;

export class Tree extends React.Component<TreeProps, any> {}

type TreemapProps = echarts.EChartOption.SeriesTreemap;

export class Treemap extends React.Component<TreemapProps, any> {}

interface EChartsProps {
  height?: number;
  loading?: boolean;
  option?: echarts.EChartOption;
  locale?: {
    emptyMessage?: React.ReactNode;
    loading?: React.ReactNode;
  };
  children?: React.ReactNode;
}

export class ECharts extends React.Component<EChartsProps, any> {
  echarts: echarts.ECharts;
}

interface ChartComponentProps<DataType = any[]> extends EChartsProps {
  name?: string;
  data?: DataType;
}

declare class ChartComponent<P extends ChartComponentProps, S = any> extends React.Component<P, S> {
  echarts: echarts.ECharts;
}

interface BarChartProps extends ChartComponentProps {
  horizontal?: boolean;
  tooltip?: boolean;
  xAxis?: boolean;
  yAis?: boolean;
  legend?: boolean;
}

export class BarChart extends ChartComponent<BarChartProps> {}

interface FunnelChartProps extends ChartComponentProps {
  asc?: boolean;
  tooltip?: boolean;
}

export class FunnelChart extends ChartComponent<FunnelChartProps> {}

interface LineChartProps extends ChartComponentProps {
  tooltip?: boolean;
}

export class LineChart extends ChartComponent<LineChartProps> {}

interface MapChartProps extends ChartComponentProps<MapProps['data']>, MapProps {
  visualMap?: boolean;
}

export class MapChart extends ChartComponent<MapChartProps> {}

interface PieChartProps extends ChartComponentProps<PieProps['data']>, PieProps {
  legend?: boolean;
}

export class PieChart extends ChartComponent<PieChartProps> {}

interface RadarChartProps extends ChartComponentProps {
  tooltip?: boolean;
  legend?: boolean;
}

export class RadarChart extends ChartComponent<RadarChartProps> {}

interface SankeyChartProps extends ChartComponentProps<SankeyProps['data']> {}

export class SankeyChart extends ChartComponent<SankeyChartProps> {}

interface ScatterChartProps extends ChartComponentProps<ScatterProps['data']> {}

export class ScatterChart extends ChartComponent<ScatterChartProps> {}

interface TreeChartProps extends ChartComponentProps<TreeProps['data']> {}

export class TreeChart extends ChartComponent<TreeChartProps> {}

interface TreemapChartProps extends ChartComponentProps<TreemapProps['data']> {}

export class TreemapChart extends ChartComponent<TreemapChartProps> {}

