import type { NextConfig } from 'next';
import path from 'path';

const srcIndexPath = path.resolve(__dirname, '../src/index.ts');

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts', '@react-code-view/react'],
  output: 'export',
  distDir: 'out',
  typescript: {
    // The library source (../src/) is type-checked independently.
    // Skipping here avoids false errors when resolving types across packages.
    ignoreBuildErrors: true,
  },
  webpack(config) {
    config.resolve.alias['@rsuite/charts'] = srcIndexPath;
    // When the alias resolves to ../src outside of docs/, webpack still needs
    // to find recharts and other deps from docs/node_modules.
    config.resolve.modules = [path.resolve(__dirname, 'node_modules'), 'node_modules'];
    return config;
  },
};

export default nextConfig;
