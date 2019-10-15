declare module '@rsuite/charts/lib/components/DataZoom' {

  type DataZoomProps = echarts.EChartOption.DataZoom;

  export default class DataZoom extends React.Component<DataZoomProps, any> {

  }
}

declare module '@rsuite/charts/lib/components/Legend' {

  type LegendProps = echarts.EChartOption.Legend;

  export default class Legend extends React.Component<LegendProps, any> {

  }
}

declare module '@rsuite/charts/lib/components/Radar' {

  type RadarProps = echarts.EChartOption['radar'];

  export default class Radar extends React.Component<RadarProps, any> {

  }
}

declare module '@rsuite/charts/lib/components/Tooltip' {

  type TooltipProps = echarts.EChartOption.Tooltip;

  export default class Tooltip extends React.Component<TooltipProps, any> {

  }
}

declare module '@rsuite/charts/lib/components/VisualMap' {

  type VisualMapProps = echarts.EChartOption.VisualMap;

  export default class VisualMap extends React.Component<VisualMapProps, any> {

  }
}

declare module '@rsuite/charts/lib/components/XAxis' {

  type XAxisProps = echarts.EChartOption.XAxis & {
    axisLine?: echarts.EChartOption.XAxis['axisLine'] | boolean;
    axisLabel?: echarts.EChartOption.XAxis['axisLabel'] | boolean;
    splitLine?: echarts.EChartOption.XAxis['splitLine'] | boolean;
  };

  export default class XAxis extends React.Component<XAxisProps, any> {

  }
}

declare module '@rsuite/charts/lib/components/YAxis' {

  type YAxisProps = echarts.EChartOption.YAxis & {
    axisLine?: echarts.EChartOption.YAxis['axisLine'] | boolean;
    axisLabel?: echarts.EChartOption.YAxis['axisLabel'] | boolean;
    splitLine?: echarts.EChartOption.YAxis['splitLine'] | boolean;
  };

  export default class YAxis extends React.Component<YAxisProps, any> {

  }
}

type BarsProps = echarts.EChartOption.SeriesBar & {
  color?: string | string[];
};


declare module '@rsuite/charts/lib/series/Bars' {

  export default class Bars extends React.Component<BarsProps, any> {

  }
}

interface FunnelProps extends echarts.EChartOption.SeriesFunnel {
  asc?: boolean;
}

declare module '@rsuite/charts/lib/series/Funnel' {

  export default class Funnel extends React.Component<FunnelProps, any> {

  }
}

type LineProps = echarts.EChartOption.SeriesLine & {
  stack?: string | boolean;
  area?: boolean;
}

declare module '@rsuite/charts/lib/series/Line' {

  export default class Line extends React.Component<LineProps, any> {

  }
}

type MapProps = echarts.EChartOption.SeriesMap;

declare module '@rsuite/charts/lib/series/Map' {


  export default class Map extends React.Component<MapProps, any> {

  }
}

interface PieProps extends echarts.EChartOption.SeriesPie {
  donut?: boolean;
}

declare module '@rsuite/charts/lib/series/Pie' {

  export default class Pie extends React.Component<PieProps, any> {

  }
}

declare module '@rsuite/charts/lib/series/RadarLine' {

  type RadarLineProps = echarts.EChartOption.SeriesRadar;

  export default class RadarLine extends React.Component<RadarLineProps, any> {

  }
}

type SankeyProps = echarts.EChartOption.SeriesSankey;

declare module '@rsuite/charts/lib/series/Sankey' {

  export default class Sankey extends React.Component<SankeyProps, any> {

  }
}

type ScatterProps = echarts.EChartOption.SeriesScatter;

declare module '@rsuite/charts/lib/series/Scatter' {

  export default class Scatter extends React.Component<ScatterProps, any> {

  }
}

type TreeProps = echarts.EChartOption.SeriesTree;

declare module '@rsuite/charts/lib/series/Tree' {

  export default class Tree extends React.Component<TreeProps, any> {

  }
}

type TreemapProps = echarts.EChartOption.SeriesTreemap;

declare module '@rsiute/charts/lib/series/Treemap' {

  export default class Treemap extends React.Component<TreemapProps, any> {

  }
}

interface EChartsProps {
  height?: number;
  loading?: boolean;
  option?: echarts.EChartOption;
  locale?: {
    emptyMessage?: React.ReactNode;
    loading?: React.ReactNode;
  }
}

declare module '@rsuite/charts/lib/ECharts' {
  export default class ECharts extends React.Component<EChartsProps, any> {
    echarts: echarts.ECharts;
  }
}

interface ChartComponentProps<DataType = any[]> extends EChartsProps {
  name?: string;
  data?: DataType;
}

declare class ChartComponent<P extends ChartComponentProps, S = any> extends React.Component<P, S> {
  echarts: echarts.ECharts;
}

declare module '@rsuite/charts/lib/charts/BarChart' {

  interface BarChartProps extends ChartComponentProps {
    horizontal?: boolean;
    tooltip?: boolean;
    xAxis?: boolean;
    yAis?: boolean;
    legend?: boolean;
  }

  export default class BarChart extends ChartComponent<BarChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/FunnelChart' {

  interface FunnelChartProps extends ChartComponentProps {
    asc?: boolean;
    tooltip?: boolean;
  }

  export default class FunnelChart extends ChartComponent<FunnelChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/LineChart' {

  interface LineChartProps extends ChartComponentProps {
    tooltip?: boolean;
  }

  export default class LineChart extends ChartComponent<LineChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/MapChart' {

  interface MapChartProps extends ChartComponentProps<MapProps['data']>, MapProps {
    visualMap?: boolean;
  }

  export default class MapChart extends ChartComponent<MapChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/PieChart' {

  interface PieChartProps extends ChartComponentProps<PieProps['data']>, PieProps {
    legend?: boolean;
  }

  export default class PieChart extends ChartComponent<PieChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/RadarChart' {

  interface RadarChartProps extends ChartComponentProps {
    tooltip?: boolean;
    legend?: boolean;
  }

  export default class RadarChart extends ChartComponent<RadarChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/SankeyChart' {

  interface SankeyChartProps extends ChartComponentProps<SankeyProps['data']> {

  }

  export default class SankeyChart extends ChartComponent<SankeyChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/ScatterChart' {

  interface ScatterChartProps extends ChartComponentProps<ScatterProps['data']> {

  }

  export default class ScatterChart extends ChartComponent<ScatterChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/TreeChart' {

  interface TreeChartProps extends ChartComponentProps<TreeProps['data']> {

  }

  export default class TreeChart extends ChartComponent<TreeChartProps> {

  }
}

declare module '@rsuite/charts/lib/charts/TreemapChart' {

  interface TreemapChartProps extends ChartComponentProps<TreemapProps['data']> {

  }

  export default class TreemapChart extends ChartComponent<TreemapChartProps> {

  }
}
