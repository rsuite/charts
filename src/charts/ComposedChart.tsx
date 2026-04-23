import React from 'react';
import { ComposedChart as RechartsComposedChart } from 'recharts';
import ChartContainer, { ChartContainerProps } from '../ChartContainer';
import { useChartTheme } from '../ChartContext';
import { injectSeriesColors, isDataEmpty } from '../utils';

type RechartsComposedChartProps = React.ComponentPropsWithoutRef<typeof RechartsComposedChart>;

export interface ComposedChartProps
  extends Omit<RechartsComposedChartProps, 'width' | 'height' | 'style'>,
    Pick<
      ChartContainerProps,
      | 'theme'
      | 'colorPalette'
      | 'height'
      | 'loading'
      | 'locale'
      | 'renderEmptyPlaceholder'
      | 'className'
      | 'style'
    > {
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
  theme,
  colorPalette,
  vertical = false,
  data,
  children,
  ...props
}: ComposedChartProps) {
  const { palette, colors } = useChartTheme(theme, colorPalette);
  const coloredChildren = injectSeriesColors(children, palette, colors);
  const empty = isDataEmpty(data as any[], children);

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
