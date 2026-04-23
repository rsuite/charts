import React from 'react';
import { PieChart as RechartsPieChart } from 'recharts';
import ChartContainer from '../ChartContainer';
import type { ChartContainerProps } from '../ChartContainer';
import { useChartTheme } from '../ChartContext';
import { injectSeriesColors } from '../utils';

type RechartsPieChartProps = React.ComponentPropsWithoutRef<typeof RechartsPieChart>;

export interface PieChartProps
  extends Omit<RechartsPieChartProps, 'width' | 'height' | 'style'>,
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
 * Pie / Donut chart with rsuite styling and responsive container.
 * Cells are automatically colored using the rsuite palette when not given explicit colors.
 */
function PieChart({
  height = 300,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  theme,
  colorPalette,
  children,
  ...props
}: PieChartProps) {
  const { palette, colors } = useChartTheme(theme, colorPalette);

  const coloredChildren = injectSeriesColors(children, palette, colors);

  const hasPieData = React.Children.toArray(children).some((child) => {
    if (!React.isValidElement(child)) return false;
    const displayName = (child.type as any).displayName || (child.type as any).name || '';
    if (displayName === 'Pie') {
      const pieProps = child.props as any;
      return Array.isArray(pieProps.data) && pieProps.data.length > 0;
    }
    return false;
  });

  return (
    <ChartContainer
      height={height}
      loading={loading}
      empty={!hasPieData}
      locale={locale}
      renderEmptyPlaceholder={renderEmptyPlaceholder}
      className={className}
      style={style}
      theme={theme}
      colorPalette={colorPalette}
    >
      <RechartsPieChart {...props}>{coloredChildren}</RechartsPieChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  PieChart.displayName = 'PieChart';
}

export default PieChart;
