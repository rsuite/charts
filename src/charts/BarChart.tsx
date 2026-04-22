import React from 'react';
import { BarChart as RechartsBarChart } from 'recharts';
import ChartContainer, { ChartContainerProps } from '../ChartContainer';
import { useChartContext } from '../ChartContext';
import { injectSeriesColors, isDataEmpty } from '../utils';

type RechartsBarChartProps = React.ComponentPropsWithoutRef<typeof RechartsBarChart>;

export interface BarChartProps
  extends Omit<RechartsBarChartProps, 'width' | 'height'>,
    Pick<ChartContainerProps, 'height' | 'loading' | 'locale' | 'renderEmptyPlaceholder' | 'className' | 'style'> {
  /**
   * When true, uses a horizontal bar chart layout.
   * @default false
   */
  horizontal?: boolean;
}

/**
 * Bar chart with rsuite styling and responsive container.
 *
 * @example
 * ```tsx
 * <BarChart height={300} data={[{ name: 'Jan', value: 100 }]}>
 *   <Bar dataKey="value" />
 *   <XAxis dataKey="name" />
 *   <YAxis />
 *   <Tooltip />
 *   <Legend />
 *   <CartesianGrid />
 * </BarChart>
 * ```
 */
function BarChart({
  height = 300,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  horizontal = false,
  data,
  children,
  ...props
}: BarChartProps) {
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
      <RechartsBarChart
        data={data}
        layout={horizontal ? 'vertical' : 'horizontal'}
        margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
        {...props}
      >
        {coloredChildren}
      </RechartsBarChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  BarChart.displayName = 'BarChart';
}

export default BarChart;
