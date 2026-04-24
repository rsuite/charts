import React from 'react';
import { Cell } from 'recharts';

/** recharts series types (by displayName) that accept a `fill` color prop */
const FILL_COLOR_TYPES = ['Bar', 'Funnel', 'RadialBar'];
/** recharts series types (by displayName) that accept a `stroke` color prop */
const STROKE_COLOR_TYPES = ['Line'];
/** recharts series types (by displayName) that accept both `fill` and `stroke` props */
const BOTH_COLOR_TYPES = ['Area', 'Scatter'];
/** recharts radar series type (by displayName) */
const RADAR_COLOR_TYPES = ['Radar'];

const getComponentDefaults = (colorsProp: any): Record<string, Record<string, any>> => ({
  CartesianGrid: { strokeDasharray: '3 3', stroke: colorsProp.grid, vertical: false },
  XAxis: {
    tick: { fill: colorsProp.axisLabel, fontSize: 12 },
    axisLine: { stroke: colorsProp.axisLine },
    tickLine: false,
    tickMargin: 12,
  },
  YAxis: {
    tick: { fill: colorsProp.axisLabel, fontSize: 12 },
    axisLine: false,
    tickLine: false,
    tickMargin: 12,
    width: 48,
  },
  Brush: { stroke: colorsProp.axisLine, fill: '#F8FAFC', height: 24, travellerWidth: 8 },
  Bar: { maxBarSize: 32 },
  Line: {
    type: 'monotone',
    strokeWidth: 2,
    dot: { r: 3, fill: '#fff', strokeWidth: 2 },
    activeDot: { r: 6, stroke: '#fff', strokeWidth: 2 },
  },
  Area: {
    type: 'monotone',
    strokeWidth: 2,
    fillOpacity: 0.15,
    dot: false,
    activeDot: { r: 6, stroke: '#fff', strokeWidth: 2 },
  },
  Pie: { stroke: '#fff', strokeWidth: 2 },
  Funnel: { stroke: '#fff', strokeWidth: 2 },
  LabelList: { stroke: 'none', fill: colorsProp.axisLabel, fontSize: 13 },
  Label: { stroke: 'none', fill: colorsProp.axisLabel, fontSize: 13 },
  Tooltip: {
    contentStyle: {
      backgroundColor: colorsProp.tooltipBackground,
      border: `1px solid ${colorsProp.tooltipBorder}`,
      borderRadius: 8,
      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      fontSize: 13,
      padding: '12px 16px',
    },
    itemStyle: { color: colorsProp.tooltipText, padding: '4px 0', fontWeight: 600, fontSize: 13 },
    labelStyle: { color: colorsProp.tooltipLabel, fontWeight: 500, marginBottom: 8, fontSize: 12 },
    cursor: { fill: colorsProp.grid, stroke: colorsProp.axisLine, strokeWidth: 1 },
  },
  Legend: {
    iconType: 'circle',
    iconSize: 8,
    wrapperStyle: { fontSize: 13, color: colorsProp.legendText, paddingTop: 16 },
    verticalAlign: 'bottom',
    align: 'center',
  },
});

function getTypeName(type: any): string {
  if (!type) return '';
  return type.displayName || type.name || '';
}

/**
 * Iterates over `children` and injects palette colors into recharts
 * series components that don't already have explicit color props.
 */
export function injectSeriesColors(
  children: React.ReactNode,
  palette: string[],
  colorsProp: any
): React.ReactNode {
  let colorIndex = 0;
  const COMPONENT_DEFAULTS = getComponentDefaults(colorsProp);

  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    const typeName = getTypeName(child.type);
    const props = child.props as Record<string, any>;

    let injectedProps: Record<string, any> = {};

    // Base defaults for this component type
    if (COMPONENT_DEFAULTS[typeName]) {
      injectedProps = { ...COMPONENT_DEFAULTS[typeName] };
    }

    // Color injection logic
    const defaultProps =
      typeof child.type === 'function' ? (child.type as any).defaultProps : undefined;

    if (FILL_COLOR_TYPES.includes(typeName)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.fill || props.fill === defaultProps?.fill) injectedProps.fill = color;
    } else if (STROKE_COLOR_TYPES.includes(typeName)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.stroke || props.stroke === defaultProps?.stroke) injectedProps.stroke = color;
    } else if (BOTH_COLOR_TYPES.includes(typeName)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.stroke || props.stroke === defaultProps?.stroke) {
        injectedProps.stroke = color;
      }
      if (!props.fill || props.fill === defaultProps?.fill) {
        injectedProps.fill = color;
      }
    } else if (RADAR_COLOR_TYPES.includes(typeName)) {
      const color = palette[colorIndex % palette.length];
      colorIndex++;
      if (!props.stroke || props.stroke === defaultProps?.stroke) {
        injectedProps.stroke = color;
        injectedProps.fill = color;
        injectedProps.fillOpacity = props.fillOpacity !== undefined ? props.fillOpacity : 0.2;
      }
    }

    // Special logic for Pie Chart: Auto inject colored `<Cell>` babies if not provided
    if (
      typeName === 'Pie' &&
      props.data &&
      (!props.children || React.Children.count(props.children) === 0)
    ) {
      injectedProps.children = props.data.map((_: any, idx: number) => {
        const color = palette[(colorIndex + idx) % palette.length];
        return React.createElement(Cell, { key: `auto-cell-${idx}`, fill: color });
      });
      colorIndex += props.data.length;
    }

    // Recursively handle nested children (e.g. fragments)
    if (props.children && typeName !== 'Pie') {
      // Avoid duplicating iteration on Pie if we already handled/overwrote children
      injectedProps.children = injectSeriesColors(props.children, palette, colorsProp);
    }

    // Only clone if we actually injected new props
    if (Object.keys(injectedProps).length > 0) {
      // Respect user's explicit props over injected defaults
      for (const k in props) {
        if (
          props[k] !== undefined &&
          k !== 'children' &&
          injectedProps[k] !== undefined &&
          props[k] !== defaultProps?.[k]
        ) {
          delete injectedProps[k];
        }
      }
      if (Object.keys(injectedProps).length > 0 || (props.children && injectedProps.children)) {
        return React.cloneElement(child as React.ReactElement<any>, injectedProps);
      }
    }

    return child;
  });
}

/**
 * Checks if a data array is considered "empty" for showing the empty placeholder.
 * It also checks if any children (like <Funnel> or <Pie>) have their own data prop.
 */
export function isDataEmpty(
  data: unknown[] | undefined | null,
  children?: React.ReactNode
): boolean {
  if (data && data.length > 0) return false;

  if (children) {
    let hasDataInChild = false;
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const props = child.props as any;
        if (props.data && Array.isArray(props.data) && props.data.length > 0) {
          hasDataInChild = true;
        }
      }
    });
    if (hasDataInChild) return false;
  }

  return true;
}
