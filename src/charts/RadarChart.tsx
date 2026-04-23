import React from 'react';
import { RadarChart as RechartsRadarChart } from 'recharts';
import ChartContainer from '../ChartContainer';
import type { ChartContainerProps } from '../ChartContainer';
import { useChartTheme } from '../ChartContext';
import { injectSeriesColors } from '../utils';

type RechartsRadarChartProps = React.ComponentPropsWithoutRef<typeof RechartsRadarChart>;

export interface RadarChartProps
  extends Omit<RechartsRadarChartProps, 'width' | 'height' | 'style'>,
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
 * Radar / Spider chart with rsuite styling and responsive container.
 */
function RadarChart({
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
}: RadarChartProps) {
  const { palette, colors } = useChartTheme(theme, colorPalette);
  const coloredChildren = injectSeriesColors(children, palette, colors);

  return (
    <ChartContainer
      height={height}
      loading={loading}
      empty={!data || data.length === 0}
      locale={locale}
      renderEmptyPlaceholder={renderEmptyPlaceholder}
      className={className}
      style={style}
      theme={theme}
      colorPalette={colorPalette}
    >
      <RechartsRadarChart data={data} cx="50%" cy="50%" outerRadius="80%" {...props}>
        {coloredChildren}
      </RechartsRadarChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  RadarChart.displayName = 'RadarChart';
}

export default RadarChart;
