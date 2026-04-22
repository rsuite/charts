import React from 'react';
import {
  Bar,
  Line,
  Area,
  Scatter,
  Radar,
  RadialBar,
  Funnel,
} from 'recharts';

/** recharts series types that support auto color injection */
const COLOR_FILL_TYPES = [Bar, Funnel, RadialBar] as React.ComponentType<any>[];
const COLOR_STROKE_TYPES = [Line] as React.ComponentType<any>[];
const COLOR_BOTH_TYPES = [Area, Scatter] as React.ComponentType<any>[];
const COLOR_RADAR_TYPES = [Radar] as React.ComponentType<any>[];

/**
 * Iterates over `children` and injects palette colors into recharts
 * series components that don't already have explicit color props.
 */
export function injectSeriesColors(
  children: React.ReactNode,
  palette: string[]
): React.ReactNode {
  let colorIndex = 0;

  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) return child;

    const type = child.type as React.ComponentType<any>;
    const props = child.props as Record<string, any>;

    if (COLOR_FILL_TYPES.includes(type)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.fill) {
        return React.cloneElement(child as React.ReactElement<any>, { fill: color });
      }
      return child;
    }

    if (COLOR_STROKE_TYPES.includes(type)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.stroke) {
        return React.cloneElement(child as React.ReactElement<any>, { stroke: color });
      }
      return child;
    }

    if (COLOR_BOTH_TYPES.includes(type)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.stroke && !props.fill) {
        return React.cloneElement(child as React.ReactElement<any>, {
          stroke: color,
          fill: color,
        });
      }
      return child;
    }

    if (COLOR_RADAR_TYPES.includes(type)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.stroke) {
        return React.cloneElement(child as React.ReactElement<any>, {
          stroke: color,
          fill: color,
          fillOpacity: props.fillOpacity !== undefined ? props.fillOpacity : 0.2,
        });
      }
      return child;
    }

    // Recursively handle nested children (e.g. fragments)
    if (props.children) {
      return React.cloneElement(child as React.ReactElement<any>, {
        children: injectSeriesColors(props.children, palette),
      });
    }

    return child;
  });
}

/**
 * Checks if a data array is considered "empty" for showing the empty placeholder.
 */
export function isDataEmpty(data: unknown[] | undefined | null): boolean {
  return !data || data.length === 0;
}
