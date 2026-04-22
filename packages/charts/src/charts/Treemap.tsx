import React from 'react';
import { Treemap as RechartsTreemap } from 'recharts';
import ChartContainer from '../ChartContainer';
import type { ChartContainerProps } from '../ChartContainer';
import { useChartContext } from '../ChartContext';
import type { TreemapProps as RechartsTreemapProps } from 'recharts';

export interface TreemapProps
  extends Omit<RechartsTreemapProps, 'width' | 'height'>,
    Pick<ChartContainerProps, 'height' | 'loading' | 'locale' | 'renderEmptyPlaceholder' | 'className' | 'style'> {}

/**
 * Treemap chart with rsuite styling and responsive container.
 * Uses rsuite palette for automatic block coloring.
 */
function Treemap({
  height = 300,
  loading,
  locale,
  renderEmptyPlaceholder,
  className,
  style,
  data,
  children,
  content,
  ...props
}: TreemapProps) {
  const { palette } = useChartContext();

  // Default colorizer using rsuite palette
  const defaultContent =
    content ||
    (({ x, y, width, height: h, index, name }: any) => {
      if (!width || !height || width < 2 || h < 2) return null;
      const color = palette[(index as number) % palette.length];
      return (
        <g>
          <rect
            x={x}
            y={y}
            width={width}
            height={h}
            style={{ fill: color, stroke: '#fff', strokeWidth: 2 }}
          />
          {width > 40 && h > 20 && (
            <text
              x={x + width / 2}
              y={y + h / 2}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              fontSize={12}
            >
              {name}
            </text>
          )}
        </g>
      );
    });

  return (
    <ChartContainer
      height={height}
      loading={loading}
      empty={!data || (data as any[]).length === 0}
      locale={locale}
      renderEmptyPlaceholder={renderEmptyPlaceholder}
      className={className}
      style={style}
    >
      <RechartsTreemap data={data} content={defaultContent} {...props}>
        {children}
      </RechartsTreemap>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Treemap.displayName = 'Treemap';
}

export default Treemap;
