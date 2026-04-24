import React from 'react';
import { isDataEmpty, injectSeriesColors } from './utils';
import { colors } from './theme';
import { Bar as RechartsBar, Pie as RechartsPie } from 'recharts';

const palette = ['#ff0000', '#00ff00', '#0000ff'];

describe('isDataEmpty', () => {
  it('returns true for empty array', () => {
    expect(isDataEmpty([])).toBe(true);
  });

  it('returns true for null', () => {
    expect(isDataEmpty(null)).toBe(true);
  });

  it('returns true for undefined', () => {
    expect(isDataEmpty(undefined)).toBe(true);
  });

  it('returns false for non-empty array', () => {
    expect(isDataEmpty([{ name: 'a', v: 1 }])).toBe(false);
  });
});

describe('injectSeriesColors', () => {
  it('returns non-element children unchanged', () => {
    const result = injectSeriesColors('plain text', palette, colors);
    // React.Children.map wraps even non-element children in an array
    expect(result).toEqual(['plain text']);
  });

  it('injects fill color into Bar elements', () => {
    const bar = React.createElement(RechartsBar as any, { dataKey: 'v' });
    const result = injectSeriesColors(bar, palette, colors) as any;
    expect(result).toBeTruthy();
    // fill color should be injected from the palette
    expect(result[0].props.fill).toBe(palette[0]);
  });

  it('does not override explicit fill on Bar', () => {
    const bar = React.createElement(RechartsBar as any, { dataKey: 'v', fill: '#custom' });
    const result = injectSeriesColors(bar, palette, colors) as any;
    // Should not crash, and explicit fill should be preserved
    expect(result).toBeTruthy();
    expect(result[0].props.fill).toBe('#custom');
  });

  it('handles null children gracefully', () => {
    const result = injectSeriesColors(null, palette, colors);
    expect(result).toBeNull();
  });

  it('handles array of children', () => {
    const children = [
      React.createElement('span', { key: '1' }, 'a'),
      React.createElement('span', { key: '2' }, 'b'),
    ];
    const result = injectSeriesColors(children, palette, colors);
    expect(Array.isArray(result)).toBe(true);
  });

  it('returns children unchanged when palette is empty', () => {
    const bar = React.createElement(RechartsBar as any, { dataKey: 'v' });
    const result = injectSeriesColors(bar, [], colors);
    // Should return original children without modification
    expect(result).toBe(bar);
  });
});

describe('injectSeriesColors - Pie auto-Cell', () => {
  const pieData = [
    { name: 'A', value: 10 },
    { name: 'B', value: 20 },
    { name: 'C', value: 30 },
  ];

  it('auto-injects Cell children for Pie when data has no explicit fill', () => {
    const pie = React.createElement(RechartsPie as any, {
      dataKey: 'value',
      data: pieData,
    });
    const result = injectSeriesColors(pie, palette, colors) as any;
    const injectedChildren = result[0].props.children;
    expect(Array.isArray(injectedChildren)).toBe(true);
    expect(injectedChildren).toHaveLength(3);
    // Each auto-Cell should have a fill from the palette
    expect(injectedChildren[0].props.fill).toBe(palette[0]);
    expect(injectedChildren[1].props.fill).toBe(palette[1]);
    expect(injectedChildren[2].props.fill).toBe(palette[2]);
  });

  it('does NOT auto-inject Cell when all data items have explicit fill values', () => {
    const dataWithFill = [
      { name: 'A', value: 10, fill: '#aaa' },
      { name: 'B', value: 20, fill: '#bbb' },
    ];
    const pie = React.createElement(RechartsPie as any, {
      dataKey: 'value',
      data: dataWithFill,
    });
    const result = injectSeriesColors(pie, palette, colors) as any;
    // Should NOT have injected children overriding user fills
    const injectedChildren = result[0].props.children;
    expect(injectedChildren).toBeUndefined();
  });

  it('does NOT auto-inject Cell when any data item has an explicit fill', () => {
    const mixedData = [
      { name: 'A', value: 10, fill: '#custom' },
      { name: 'B', value: 20 },
    ];
    const pie = React.createElement(RechartsPie as any, {
      dataKey: 'value',
      data: mixedData,
    });
    const result = injectSeriesColors(pie, palette, colors) as any;
    const injectedChildren = result[0].props.children;
    expect(injectedChildren).toBeUndefined();
  });

  it('does NOT auto-inject Cell when Pie already has explicit children', () => {
    const existingCell = React.createElement('Cell' as any, { key: 'c0', fill: '#custom' });
    const pie = React.createElement(RechartsPie as any, {
      dataKey: 'value',
      data: pieData,
      children: existingCell,
    });
    const result = injectSeriesColors(pie, palette, colors) as any;
    // The children should remain the original explicit cell, not the auto-generated ones
    const childrenResult = result[0].props.children;
    // Should not be an array of 3 auto cells
    expect(Array.isArray(childrenResult) ? childrenResult.length : 1).toBe(1);
  });
});
