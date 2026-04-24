import React from 'react';
import { isDataEmpty, injectSeriesColors } from './utils';
import { colors } from './theme';
import { Bar as RechartsBar } from 'recharts';

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
});
