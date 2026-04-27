import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['127.0.0.1'],
  transpilePackages: ['@rsuite/charts', 'recharts'],
  output: 'export',
  turbopack: {
    // root is the charts root (parent of docs/) so turbopack can follow
    // the docs/node_modules/@rsuite/charts symlink outside the app dir.
    root: path.resolve(__dirname, '..'),
    // Force a single React instance. Without this, @rsuite/charts source
    // (compiled via transpilePackages) resolves react from
    // ../node_modules/react, while docs/app resolves from
    // docs/node_modules/react — the duplicate causes hooks to silently
    // fail and breaks hydration (blank charts, dead click handlers).
    // Turbopack resolveAlias values must be relative paths starting with './'
    // (relative to the turbopack root, which is charts/).
    resolveAlias: {
      react: './docs/node_modules/react',
      'react-dom': './docs/node_modules/react-dom',
      'react/jsx-runtime': './docs/node_modules/react/jsx-runtime',
      'react/jsx-dev-runtime': './docs/node_modules/react/jsx-dev-runtime',
    },
  },
};

export default nextConfig;
