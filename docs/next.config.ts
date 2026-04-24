import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['recharts'],
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    // root is the charts root (parent of docs/), so turbopack can follow
    // the docs/node_modules/@rsuite/charts symlink outside the app dir.
    root: path.resolve(__dirname, '..'),
    resolveAlias: {
      // Resolve @rsuite/charts directly from TypeScript source.
      // Paths below are relative to turbopack.root (the charts root).
      '@rsuite/charts': './src/index.ts',
      // Deduplicate React to a single instance to prevent the dual-React
      // bug that silently breaks hook calls in chart components.
      react: './docs/node_modules/react',
      'react-dom': './docs/node_modules/react-dom',
      'react/jsx-runtime': './docs/node_modules/react/jsx-runtime.js',
      'react/jsx-dev-runtime': './docs/node_modules/react/jsx-dev-runtime.js',
    },
  },
};

export default nextConfig;
