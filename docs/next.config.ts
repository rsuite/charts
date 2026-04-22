import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  distDir: 'out',
  webpack(config) {
    config.resolve.alias['@rsuite/charts'] = path.resolve(__dirname, '../src/index.ts');
    return config;
  },
};

export default nextConfig;
