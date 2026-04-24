import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: path.resolve(__dirname, '..'),
    resolveAlias: {
      // Force all react imports to resolve to the same instance.
      // Without this, @rsuite/charts (symlinked from docs/node_modules)
      // resolves react from the root node_modules, causing a dual-React
      // instance bug that silently breaks hook calls inside chart components.
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime'),
      'react/jsx-dev-runtime': path.resolve(
        __dirname,
        'node_modules/react/jsx-dev-runtime'
      ),
    },
  },
};

export default nextConfig;
