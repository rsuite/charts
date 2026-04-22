import type { NextConfig } from 'next';
import path from 'path';

const srcIndexPath = path.resolve(__dirname, '../src/index.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  distDir: 'out',
  turbopack: {
    // Fix Turbopack mis-detecting its root from a lockfile found in the
    // user's home directory.  Setting root explicitly to __dirname (docs/)
    // ensures relative paths in resolveAlias are resolved correctly.
    root: __dirname,
    resolveAlias: {
      // Relative to the root above (docs/), so resolves to charts/src/index.ts.
      '@rsuite/charts': '../src/index.ts',
    },
  },
  webpack(config) {
    // webpack accepts absolute paths fine
    config.resolve.alias['@rsuite/charts'] = srcIndexPath;
    return config;
  },
};

export default nextConfig;
