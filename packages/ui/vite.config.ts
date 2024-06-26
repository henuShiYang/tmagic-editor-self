import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import federation from '@originjs/vite-plugin-federation';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
    federation({
      name: 'remote-v2',
      filename: 'remote-v2.js',
      exposes: {
        './button': './packages/src/button/index.vue',
        './buttonConfig': '/packages/src/button/default-value',
        './image': './packages/src/image/index.vue',
      },
      shared: ['vue'],
    }),
  ],

  build: {
    target: 'es2020',
  },
});
