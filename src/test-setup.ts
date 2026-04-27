import '@testing-library/jest-dom/vitest';

// ResizeObserver is not implemented in jsdom (used by recharts ResponsiveContainer).
// Calling observe() immediately fires the callback with a non-zero size so that
// recharts does not log "The width(0) and height(0) of chart should be greater than 0".
global.ResizeObserver = class ResizeObserver {
  private callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    this.callback(
      [
        {
          target,
          contentRect: { width: 800, height: 600, top: 0, left: 0, right: 800, bottom: 600, x: 0, y: 0, toJSON: () => {} },
          borderBoxSize: [{ inlineSize: 800, blockSize: 600 }],
          contentBoxSize: [{ inlineSize: 800, blockSize: 600 }],
          devicePixelContentBoxSize: [],
        } as ResizeObserverEntry,
      ],
      this
    );
  }

  unobserve() {}
  disconnect() {}
};

// matchMedia is not implemented in jsdom
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});
