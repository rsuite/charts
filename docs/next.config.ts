import type { NextConfig } from 'next';
import path from 'path';

const srcIndexPath = path.resolve(__dirname, '../src/index.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  distDir: 'out',
  turbopack: {
    resolveAlias: {
      // Turbopack requires a path relative to the project root (docs/),
      // not an absolute filesystem path.
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
