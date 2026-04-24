import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    // root is the charts root (parent of docs/) so turbopack can follow
    // the docs/node_modules/@rsuite/charts symlink outside the app dir.
    root: path.resolve(__dirname, '..'),
  },
};

export default nextConfig;
