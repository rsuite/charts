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

/** recharts series types that accept a `fill` color prop */
const FILL_COLOR_TYPES = [Bar, Funnel, RadialBar] as React.ComponentType<any>[];
/** recharts series types that accept a `stroke` color prop */
const STROKE_COLOR_TYPES = [Line] as React.ComponentType<any>[];
/** recharts series types that accept both `fill` and `stroke` props */
const BOTH_COLOR_TYPES = [Area, Scatter] as React.ComponentType<any>[];
/** recharts radar series type */
const RADAR_COLOR_TYPES = [Radar] as React.ComponentType<any>[];

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

    if (FILL_COLOR_TYPES.includes(type)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.fill) {
        return React.cloneElement(child as React.ReactElement<any>, { fill: color });
      }
      return child;
    }

    if (STROKE_COLOR_TYPES.includes(type)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.stroke) {
        return React.cloneElement(child as React.ReactElement<any>, { stroke: color });
      }
      return child;
    }

    if (BOTH_COLOR_TYPES.includes(type)) {
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

    if (RADAR_COLOR_TYPES.includes(type)) {
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
