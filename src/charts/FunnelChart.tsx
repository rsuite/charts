import React from 'react';
import { FunnelChart as RechartsFunnelChart } from 'recharts';
import ChartContainer from '../ChartContainer';
import type { ChartContainerProps } from '../ChartContainer';
import { useChartContext } from '../ChartContext';
import { injectSeriesColors, isDataEmpty } from '../utils';

type RechartsFunnelChartProps = React.ComponentPropsWithoutRef<typeof RechartsFunnelChart>;

export interface FunnelChartProps
  extends Omit<RechartsFunnelChartProps, 'width' | 'height'>,
    Pick<ChartContainerProps, 'height' | 'loading' | 'locale' | 'renderEmptyPlaceholder' | 'className' | 'style'> {}

/**
 * Funnel chart with rsuite styling and responsive container.
 */
function FunnelChart({
  height = 300,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  data,
  children,
  ...props
}: FunnelChartProps) {
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
      <RechartsFunnelChart
        data={data}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        {...props}
      >
        {coloredChildren}
      </RechartsFunnelChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  FunnelChart.displayName = 'FunnelChart';
}

export default FunnelChart;
