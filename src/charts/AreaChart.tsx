import React from 'react';
import { AreaChart as RechartsAreaChart } from 'recharts';
import ChartContainer, { ChartContainerProps } from '../ChartContainer';
import { useChartTheme } from '../ChartContext';
import { injectSeriesColors, isDataEmpty } from '../utils';

type RechartsAreaChartProps = React.ComponentPropsWithoutRef<typeof RechartsAreaChart>;

export interface AreaChartProps
  extends Omit<RechartsAreaChartProps, 'width' | 'height' | 'style'>,
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
    > {}

/**
 * Area chart with rsuite styling and responsive container.
 *
 * @example
 * ```tsx
 * <AreaChart height={300} data={[{ name: 'Jan', value: 100 }]}>
 *   <Area dataKey="value" />
 *   <XAxis dataKey="name" />
 *   <YAxis />
 *   <Tooltip />
 *   <Legend />
 *   <CartesianGrid />
 * </AreaChart>
 * ```
 */
function AreaChart({
  height = 300,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  theme,
  colorPalette,
  data,
  children,
  ...props
}: AreaChartProps) {
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
      <RechartsAreaChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
        {...props}
      >
        {coloredChildren}
      </RechartsAreaChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  AreaChart.displayName = 'AreaChart';
}

export default AreaChart;
