import { useMemo } from 'react';
import {
  LineChart as RechartsLineChart,
  AreaChart as RechartsAreaChart,
  BarChart as RechartsBarChart,
  Line,
  Area,
  Bar,
  YAxis,
} from 'recharts';
import ChartContainer, { type ChartContainerProps } from '../ChartContainer';
import { useChartTheme } from '../ChartContext';

export interface SparklineProps
  extends Omit<ChartContainerProps, 'empty' | 'children' | 'htmlTitle'> {
  /**
   * The data for the sparkline. Can be an array of numbers or an array of objects.
   */
  data: number[] | Record<string, any>[];
  /**
   * The key to access data value if data is an array of objects.
   * If data is an array of numbers, this property is ignored.
   * @default 'value'
   */
  dataKey?: string;
  /**
   * The type of sparkline to render.
   * @default 'line'
   */
  type?: 'line' | 'area' | 'bar';
  /**
   * The curve algorithm for line and area charts.
   * @default 'monotone'
   */
  curveType?: 'monotone' | 'linear' | 'step' | 'stepBefore' | 'stepAfter';
  /**
   * The color of the sparkline. Defaults to the first color in the chart palette.
   */
  color?: string;
  /**
   * The width of the line or bar.
   * @default 2
   */
  strokeWidth?: number;
  /**
   * The opacity of the area chart fill.
   * @default 0.2
   */
  fillOpacity?: number;
  /**
   * Whether to scale the Y axis to the min and max of the data instead of starting from 0.
   * @default true
   */
  scaleToFit?: boolean;
}

/**
 * A beautiful, minimal chart without axes or grids to show data trends.
 * Inspired by Chakra UI Sparkline.
 */
function Sparkline({
  data,
  dataKey = 'value',
  type = 'line',
  curveType = 'monotone',
  color,
  strokeWidth = 2,
  fillOpacity = 0.2,
  scaleToFit = true,
  height = 48,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  theme,
  colorPalette,
}: SparklineProps) {
  const { palette } = useChartTheme(theme, colorPalette);
  const themeColor = color || palette[0];

  const parsedData = useMemo(() => {
    if (!data || !Array.isArray(data)) return [];
    if (typeof data[0] === 'number') {
      return data.map((value, index) => ({ value, index }));
    }
    return data;
  }, [data]);

  const activeDataKey = typeof data?.[0] === 'number' ? 'value' : dataKey;
  const empty = parsedData.length === 0;

  // Minimal margin to avoid clipping thickness
  const margin = { top: strokeWidth, right: strokeWidth, bottom: strokeWidth, left: strokeWidth };

  const yAxis = <YAxis hide domain={scaleToFit ? ['dataMin', 'dataMax'] : [0, 'dataMax']} />;

  let chartElement;

  if (type === 'bar') {
    chartElement = (
      <RechartsBarChart data={parsedData} margin={margin}>
        {yAxis}
        <Bar
          dataKey={activeDataKey}
          fill={themeColor}
          radius={[2, 2, 0, 0]}
          isAnimationActive={false}
        />
      </RechartsBarChart>
    );
  } else if (type === 'area') {
    chartElement = (
      <RechartsAreaChart data={parsedData} margin={margin}>
        {yAxis}
        <Area
          type={curveType}
          dataKey={activeDataKey}
          stroke={themeColor}
          fill={themeColor}
          strokeWidth={strokeWidth}
          fillOpacity={fillOpacity}
          isAnimationActive={false}
        />
      </RechartsAreaChart>
    );
  } else {
    chartElement = (
      <RechartsLineChart data={parsedData} margin={margin}>
        {yAxis}
        <Line
          type={curveType}
          dataKey={activeDataKey}
          stroke={themeColor}
          strokeWidth={strokeWidth}
          dot={false}
          isAnimationActive={false}
        />
      </RechartsLineChart>
    );
  }

  return (
    <ChartContainer
      height={height}
      loading={loading}
      empty={empty}
      locale={locale}
      renderEmptyPlaceholder={renderEmptyPlaceholder}
      className={className}
      style={style}
      theme={theme}
      colorPalette={colorPalette}
    >
      {chartElement}
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Sparkline.displayName = 'Sparkline';
}

export default Sparkline;
