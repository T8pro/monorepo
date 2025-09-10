import { defineConfig } from 'tsup';
import { cssModulesPlugin } from './plugins/css-modules-plugin.js';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  esbuildPlugins: [cssModulesPlugin()],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
