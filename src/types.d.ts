declare interface EChartsProps {
  height?: number;
  loading?: boolean;
  option?: echarts.EChartOption;
  locale?: {
    emptyMessage?: React.ReactNode;
    loading?: React.ReactNode;
  };
  children?: React.ReactNode;
}

declare interface ChartComponentProps<DataType = any[]> extends EChartsProps {
  name?: string;
  data?: DataType;
}

declare type AxisLabelFormatter = (value: string | number) => string;
