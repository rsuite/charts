import React from 'react';
import { ResponsiveContainer } from 'recharts';
import { ChartContext, useChartTheme } from './ChartContext';

export interface ChartContainerLocale {
  emptyMessage?: React.ReactNode;
  loading?: React.ReactNode;
}

export interface ChartContainerProps {
  /**
   * Height of the chart in pixels.
   * @default 300
   */
  height?: number;
  /**
   * Whether the chart is loading.
   */
  loading?: boolean;
  /**
   * Whether the chart has no data to display.
   */
  empty?: boolean;
  /**
   * Locale strings for empty/loading states.
   */
  locale?: ChartContainerLocale;
  /**
   * Theme of the chart
   * @default 'light'
   */
  theme?: 'light' | 'dark' | 'auto';
  /**
   * Custom color palette that overrides the rsuite default palette.
   */
  colorPalette?: string[];
  /**
   * Custom placeholder rendered when the chart is empty.
   */
  renderEmptyPlaceholder?: () => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactElement | React.ReactElement[];
}

const containerStyle: React.CSSProperties = {
  position: 'relative',
  width: '100%',
};

const emptyStyle: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#8e8e93',
  fontSize: 14,
  lineHeight: '20px',
  pointerEvents: 'none',
};

const loaderStyle: React.CSSProperties = {
  ...emptyStyle,
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  zIndex: 10,
  pointerEvents: 'all',
};

/**
 * ChartContainer wraps a recharts chart with responsive sizing, empty state,
 * loading state, and rsuite theming.
 *
 * @example
 * ```tsx
 * <ChartContainer height={300}>
 *   <BarChart data={data}>
 *     <Bar dataKey="value" />
 *     <XAxis dataKey="name" />
 *     <YAxis />
 *     <Tooltip />
 *     <Legend />
 *   </BarChart>
 * </ChartContainer>
 * ```
 */
function ChartContainer({
  height = 300,
  loading = false,
  empty = false,
  locale = {},
  theme = 'auto',
  colorPalette,
  renderEmptyPlaceholder,
  className,
  style,
  children,
}: ChartContainerProps) {
  const { emptyMessage = 'No data found', loading: loadingText = 'Loading...' } = locale;

  const contextValue = useChartTheme(theme, colorPalette);

  function renderEmpty() {
    if (typeof renderEmptyPlaceholder === 'function') {
      return renderEmptyPlaceholder();
    }
    return <div style={emptyStyle}>{emptyMessage}</div>;
  }

  return (
    <ChartContext.Provider value={contextValue}>
      <div
        className={`rs-chart-container${className ? ` ${className}` : ''}`}
        style={{ ...containerStyle, height, ...style }}
      >
        {empty && !loading && renderEmpty()}
        <ResponsiveContainer width="100%" height="100%">
          {Array.isArray(children) ? children[0] : children}
        </ResponsiveContainer>
        {loading && <div style={loaderStyle}>{loadingText}</div>}
      </div>
    </ChartContext.Provider>
  );
}

if (process.env.NODE_ENV !== 'production') {
  ChartContainer.displayName = 'ChartContainer';
}

export default ChartContainer;
