import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom'],
  loader: {
    '.scss': 'text',
  },
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
