import { defineConfig } from 'vite';
import vuePlugin from '@vitejs/plugin-vue';
// import remotePlugin from './plugin/remote-module-plugin.js';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    vuePlugin(),
    federation({
      // 远程模块声明
      name: 'main',
      remotes: {
        'remote-v2':
          'https://low-code-ui.oss-cn-beijing.aliyuncs.com/custome-vant/assets/remote-v2.js',
      },
      // 共享依赖声明
      shared: ['vue'],
    }),
  ],
  build: { target: 'es2020' },
});
