import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 如果没有 routes 配置，Umi 会进入约定式路由模式，然后分析 src/pages 目录拿到路由配置。
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
});
