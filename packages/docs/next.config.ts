import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  distDir: 'out',
};

export default nextConfig;
