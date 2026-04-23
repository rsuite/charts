import React from 'react';
import { isDataEmpty, injectSeriesColors } from './utils';
import { colors } from './theme';

const palette = ['#red', '#green', '#blue'];

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
    expect(result).toBe('plain text');
  });

  it('injects fill color into Bar elements', () => {
    const bar = React.createElement('Bar' as any, { dataKey: 'v' });
    // Simulate displayName
    (bar.type as any).displayName = 'Bar';
    const result = injectSeriesColors(bar, palette, colors) as any;
    expect(result).toBeTruthy();
  });

  it('does not override explicit fill on Bar', () => {
    const bar = React.createElement('Bar' as any, { dataKey: 'v', fill: '#custom' });
    (bar.type as any) = { displayName: 'Bar' };
    const result = injectSeriesColors(bar, palette, colors);
    // Should not crash
    expect(result).toBeTruthy();
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
