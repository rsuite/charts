import React from 'react';
import { Treemap as RechartsTreemap, Tooltip as RechartsTooltip } from 'recharts';
import ChartContainer from '../ChartContainer';
import type { ChartContainerProps } from '../ChartContainer';
import { useChartTheme } from '../ChartContext';
import { injectSeriesColors } from '../utils';
import type { TreemapProps as RechartsTreemapProps } from 'recharts';

export interface TreemapProps
  extends Omit<RechartsTreemapProps, 'width' | 'height' | 'style'>,
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
  theme,
  colorPalette,
  data,
  children,
  content,
  nameKey = 'name',
  ...props
}: TreemapProps) {
  const { palette, colors } = useChartTheme(theme, colorPalette);

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

  // Inject a default Tooltip content for Treemap that reads the correct name/value
  // from payload[0].payload because recharts Treemap's payload[0].name is the dataKey,
  // not the actual item name.
  const processedChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    const type = child.type as any;
    const displayName = type?.displayName || type?.name || '';
    if (displayName !== 'Tooltip' && type !== RechartsTooltip) return child;

    const tooltipProps = child.props as any;
    if (tooltipProps.content) return child; // user already provided custom content

    return React.cloneElement(child as React.ReactElement<any>, {
      content: ({ active, payload }: any) => {
        if (!active || !payload?.length) return null;
        const item = payload[0];
        const d = item?.payload ?? {};
        const name = d[nameKey as string] ?? item?.name ?? '';
        const value = item?.value ?? '';
        const formattedValue = tooltipProps.formatter ? tooltipProps.formatter(value, name, item) : value;
        return (
          <div style={{
            background: 'rgba(255,255,255,0.96)',
            border: 'none',
            borderRadius: 8,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            fontSize: 13,
            padding: '8px 14px',
          }}>
            <span style={{ color: '#8A8E99', fontWeight: 500 }}>{name}</span>
            {name && <span style={{ margin: '0 4px', color: '#8A8E99' }}>:</span>}
            <span style={{ color: '#1A1D24', fontWeight: 500 }}>{formattedValue}</span>
          </div>
        );
      },
    });
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
      theme={theme}
      colorPalette={colorPalette}
    >
      <RechartsTreemap data={data} content={defaultContent as any} nameKey={nameKey} {...props}>
        {injectSeriesColors(processedChildren, palette, colors)}
      </RechartsTreemap>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Treemap.displayName = 'Treemap';
}

export default Treemap;
