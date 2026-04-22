import React from 'react';
import { PieChart as RechartsPieChart, Cell } from 'recharts';
import ChartContainer from '../ChartContainer';
import type { ChartContainerProps } from '../ChartContainer';
import { useChartContext } from '../ChartContext';

type RechartsPieChartProps = React.ComponentPropsWithoutRef<typeof RechartsPieChart>;

export interface PieChartProps
  extends Omit<RechartsPieChartProps, 'width' | 'height'>,
    Pick<ChartContainerProps, 'height' | 'loading' | 'locale' | 'renderEmptyPlaceholder' | 'className' | 'style'> {}

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
  children,
  ...props
}: PieChartProps) {
  const { palette } = useChartContext();

  // Inject Cell colors into Pie children when Cells aren't already provided
  const coloredChildren = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;
    // Check for recharts Pie by displayName
    const displayName =
      (child.type as any).displayName || (child.type as any).name || '';
    if (displayName === 'Pie') {
      const pieProps = child.props as any;
      // Only inject Cells when there are no Cell children and there's data
      const hasCells = React.Children.toArray(pieProps.children).some(c => {
        if (!React.isValidElement(c)) return false;
        const name = (c.type as any).displayName || (c.type as any).name || '';
        return name === 'Cell';
      });

      if (!hasCells && Array.isArray(pieProps.data)) {
        const cells = pieProps.data.map((_: any, index: number) => (
          <Cell key={index} fill={palette[index % palette.length]} />
        ));
        return React.cloneElement(child as React.ReactElement<any>, {
          children: cells,
        });
      }
    }
    return child;
  });

  const hasPieData = React.Children.toArray(children).some(child => {
    if (!React.isValidElement(child)) return false;
    const displayName =
      (child.type as any).displayName || (child.type as any).name || '';
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
    >
      <RechartsPieChart {...props}>
        {coloredChildren}
      </RechartsPieChart>
    </ChartContainer>
  );
}

if (process.env.NODE_ENV !== 'production') {
  PieChart.displayName = 'PieChart';
}

export default PieChart;
