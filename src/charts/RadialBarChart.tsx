import React from 'react';
import { RadialBarChart as RechartsRadialBarChart } from 'recharts';
import ChartContainer from '../ChartContainer';
import type { ChartContainerProps } from '../ChartContainer';
import { useChartTheme } from '../ChartContext';
import { injectSeriesColors, isDataEmpty } from '../utils';

type RechartsRadialBarChartProps = React.ComponentPropsWithoutRef<typeof RechartsRadialBarChart>;

export interface RadialBarChartProps
  extends Omit<RechartsRadialBarChartProps, 'width' | 'height' | 'style'>,
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
 * Radial Bar chart with rsuite styling and responsive container.
 */
function RadialBarChart({
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
}: RadialBarChartProps) {
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
      <RechartsRadialBarChart
        data={data}
        cx="50%"
        cy="50%"
        innerRadius="10%"
        outerRadius="80%"
        {...props}
      >
        {coloredChildren}
      </RechartsRadialBarChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  RadialBarChart.displayName = 'RadialBarChart';
}

export default RadialBarChart;
