import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test-setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.test.{ts,tsx}', 'src/test-setup.ts'],
    },
  },
  resolve: {
    alias: [
      // Map .svg imports to the existing mock (same as jest moduleNameMapper)
      {
        find: /\.svg$/,
        replacement: path.resolve(__dirname, '__mocks__/svg.js'),
      },
    ],
  },
});
