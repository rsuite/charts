import { defineConfig } from 'tsup';
import svgrPlugin from 'esbuild-plugin-svgr';

export default defineConfig({
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  legacyOutput: true,
  esbuildPlugins: [
    svgrPlugin({
      exportType: 'named',
    }),
  ],
});
