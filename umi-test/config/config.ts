import { defineConfig } from 'umi';

// 推荐两种配置方式二选一，.umirc.ts 优先级更高。
export default defineConfig({
  routes: [{ path: '/', component: '@/pages/index' }],
});
