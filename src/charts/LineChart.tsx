import React from 'react';
import { LineChart as RechartsLineChart } from 'recharts';
import ChartContainer, { ChartContainerProps } from '../ChartContainer';
import { useChartContext } from '../ChartContext';
import { injectSeriesColors, isDataEmpty } from '../utils';

type RechartsLineChartProps = React.ComponentPropsWithoutRef<typeof RechartsLineChart>;

export interface LineChartProps
  extends Omit<RechartsLineChartProps, 'width' | 'height'>,
    Pick<ChartContainerProps, 'height' | 'loading' | 'locale' | 'renderEmptyPlaceholder' | 'className' | 'style'> {}

/**
 * Line chart with rsuite styling and responsive container.
 *
 * @example
 * ```tsx
 * <LineChart height={300} data={[{ name: 'Jan', value: 100 }]}>
 *   <Line dataKey="value" />
 *   <XAxis dataKey="name" />
 *   <YAxis />
 *   <Tooltip />
 *   <Legend />
 *   <CartesianGrid />
 * </LineChart>
 * ```
 */
function LineChart({
  height = 300,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  data,
  children,
  ...props
}: LineChartProps) {
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
      <RechartsLineChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
        {...props}
      >
        {coloredChildren}
      </RechartsLineChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  LineChart.displayName = 'LineChart';
}

export default LineChart;
