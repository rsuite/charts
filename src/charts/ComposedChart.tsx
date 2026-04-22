import React from 'react';
import { ComposedChart as RechartsComposedChart } from 'recharts';
import ChartContainer, { ChartContainerProps } from '../ChartContainer';
import { useChartContext } from '../ChartContext';
import { injectSeriesColors, isDataEmpty } from '../utils';

type RechartsComposedChartProps = React.ComponentPropsWithoutRef<typeof RechartsComposedChart>;

export interface ComposedChartProps
  extends Omit<RechartsComposedChartProps, 'width' | 'height'>,
    Pick<ChartContainerProps, 'height' | 'loading' | 'locale' | 'renderEmptyPlaceholder' | 'className' | 'style'> {
  /**
   * When true, uses a vertical layout.
   * @default false
   */
  vertical?: boolean;
}

/**
 * Composed chart combining Bar, Line, and Area series with rsuite styling.
 *
 * @example
 * ```tsx
 * <ComposedChart height={300} data={data}>
 *   <Bar dataKey="bar" />
 *   <Line dataKey="line" />
 *   <Area dataKey="area" />
 *   <XAxis dataKey="name" />
 *   <YAxis />
 *   <Tooltip />
 *   <Legend />
 *   <CartesianGrid />
 * </ComposedChart>
 * ```
 */
function ComposedChart({
  height = 300,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  vertical = false,
  data,
  children,
  ...props
}: ComposedChartProps) {
  const { palette } = useChartContext();
  const coloredChildren = injectSeriesColors(children, palette);
  const empty = isDataEmpty(data as any[]);

  return (
    <ChartContainer
      height={height}
      loading={loading}
      empty={empty}
      locale={locale}
      renderEmptyPlaceholder={renderEmptyPlaceholder}
      className={className}
      style={style}
    >
      <RechartsComposedChart
        data={data}
        layout={vertical ? 'vertical' : 'horizontal'}
        margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
        {...props}
      >
        {coloredChildren}
      </RechartsComposedChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ComposedChart.displayName = 'ComposedChart';
}

export default ComposedChart;
