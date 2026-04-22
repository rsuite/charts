import React from 'react';
import { ScatterChart as RechartsScatterChart } from 'recharts';
import ChartContainer from '../ChartContainer';
import type { ChartContainerProps } from '../ChartContainer';
import { useChartContext } from '../ChartContext';
import { injectSeriesColors } from '../utils';

type RechartsScatterChartProps = React.ComponentPropsWithoutRef<typeof RechartsScatterChart>;

export interface ScatterChartProps
  extends Omit<RechartsScatterChartProps, 'width' | 'height'>,
    Pick<ChartContainerProps, 'height' | 'loading' | 'locale' | 'renderEmptyPlaceholder' | 'className' | 'style'> {}

/**
 * Scatter chart with rsuite styling and responsive container.
 */
function ScatterChart({
  height = 300,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  children,
  ...props
}: ScatterChartProps) {
  const { palette } = useChartContext();
  const coloredChildren = injectSeriesColors(children, palette);

  return (
    <ChartContainer
      height={height}
      loading={loading}
      locale={locale}
      renderEmptyPlaceholder={renderEmptyPlaceholder}
      className={className}
      style={style}
    >
      <RechartsScatterChart
        margin={{ top: 10, right: 10, bottom: 10, left: 0 }}
        {...props}
      >
        {coloredChildren}
      </RechartsScatterChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ScatterChart.displayName = 'ScatterChart';
}

export default ScatterChart;
