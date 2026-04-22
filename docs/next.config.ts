import type { NextConfig } from 'next';
import path from 'path';

const srcIndexPath = path.resolve(__dirname, '../src/index.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  distDir: 'out',
  turbopack: {
    resolveAlias: {
      // Use the same absolute path as webpack — Turbopack accepts absolute
      // paths and this avoids any ambiguity about what [project] root it
      // uses when resolving relative aliases.
      '@rsuite/charts': srcIndexPath,
    },
  },
  webpack(config) {
    // webpack accepts absolute paths fine
    config.resolve.alias['@rsuite/charts'] = srcIndexPath;
    return config;
  },
};

export default nextConfig;
