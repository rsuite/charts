import type { NextConfig } from 'next';
import path from 'path';

const srcIndexPath = path.resolve(__dirname, '../src/index.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  distDir: 'out',
  turbopack: {
    resolveAlias: {
      '@rsuite/charts': srcIndexPath,
    },
  },
  webpack(config) {
    config.resolve.alias['@rsuite/charts'] = srcIndexPath;
    return config;
  },
};

export default nextConfig;
