import React from 'react';
import { BarChart as RechartsBarChart } from 'recharts';
import ChartContainer, { ChartContainerProps } from '../ChartContainer';
import { useChartTheme } from '../ChartContext';
import { injectSeriesColors, isDataEmpty } from '../utils';

type RechartsBarChartProps = React.ComponentPropsWithoutRef<typeof RechartsBarChart>;

export interface BarChartProps
  extends Omit<RechartsBarChartProps, 'width' | 'height' | 'style'>,
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
  theme,
  colorPalette,
  horizontal = false,
  data,
  children,
  ...props
}: BarChartProps) {
  const { palette, colors } = useChartTheme(theme, colorPalette);
  const coloredChildren = injectSeriesColors(children, palette, colors);

  // Conditionally handle `radius` for Bar elements to avoid broken stacked corners
  // and incorrect horizontal rounded corners.
  const processedChildren = React.Children.map(coloredChildren, (child) => {
    if (!React.isValidElement(child)) return child;
    const typeName = (child.type as any).displayName || (child.type as any).name || '';
    if (typeName === 'Bar') {
      const barProps = child.props as any;
      if (barProps.radius === undefined) {
        // Stacked bars get no radius to prevent gaps mid-stack.
        // Horizontal bars get right-sided radius. Vertical get top-sided radius.
        const radius = barProps.stackId ? 0 : horizontal ? [0, 4, 4, 0] : [4, 4, 0, 0];
        if (radius !== 0) {
          return React.cloneElement(child as React.ReactElement<any>, { radius });
        }
      }
    }
    return child;
  });

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
      <RechartsBarChart
        data={data}
        layout={horizontal ? 'vertical' : 'horizontal'}
        margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
        {...props}
      >
        {processedChildren}
      </RechartsBarChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  BarChart.displayName = 'BarChart';
}

export default BarChart;
