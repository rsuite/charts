import React from 'react';
import { Tooltip as RechartsTooltip } from 'recharts';
import type { TooltipProps } from 'recharts';

const tooltipContentStyle: React.CSSProperties = {
  background: '#ffffff',
  border: '1px solid #e5e5ea',
  borderRadius: 6,
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
  fontSize: 12,
  padding: '8px 12px',
};

const tooltipItemStyle: React.CSSProperties = {
  color: '#272c36',
  padding: '2px 0',
};

const tooltipLabelStyle: React.CSSProperties = {
  color: '#272c36',
  fontWeight: 600,
  marginBottom: 4,
};

const tooltipCursorStyle = { stroke: '#e5e5ea', strokeWidth: 1 };

/**
 * Tooltip with rsuite styling applied.
 * Produces a clean white popup with rsuite border and shadow.
 */
function Tooltip<TValue extends number | string, TName extends number | string>({
  contentStyle = tooltipContentStyle,
  itemStyle = tooltipItemStyle,
  labelStyle = tooltipLabelStyle,
  cursor = tooltipCursorStyle,
  ...props
}: TooltipProps<TValue, TName>) {
  return (
    <RechartsTooltip
      contentStyle={contentStyle}
      itemStyle={itemStyle}
      labelStyle={labelStyle}
      cursor={cursor}
      {...props}
    />
  );
}

Tooltip.displayName = 'Tooltip';

export default Tooltip;
