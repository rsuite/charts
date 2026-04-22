import React from 'react';
import { Legend as RechartsLegend } from 'recharts';
import type { LegendProps } from 'recharts';

const legendWrapperStyle: React.CSSProperties = {
  fontSize: 12,
  color: '#8e8e93',
  paddingTop: 8,
};

/**
 * Legend with rsuite default styling.
 * Positioned at the bottom with circle icons and rsuite text color.
 */
function Legend({
  iconType = 'circle',
  iconSize = 8,
  wrapperStyle = legendWrapperStyle,
  verticalAlign = 'bottom',
  align = 'center',
  ...props
}: LegendProps) {
  return (
    <RechartsLegend
      iconType={iconType}
      iconSize={iconSize}
      wrapperStyle={wrapperStyle}
      verticalAlign={verticalAlign}
      align={align}
      {...props}
    />
  );
}

Legend.displayName = 'Legend';

export default Legend;
