import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  clean: true,
  dts: true,
  legacyOutput: true,
});
