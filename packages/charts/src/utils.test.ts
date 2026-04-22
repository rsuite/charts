import { isDataEmpty } from './utils';

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
