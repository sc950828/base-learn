import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Parent from "../views/Parent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/parent",
    name: "Parent",
    component: Parent,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/base",
    name: "Base",
    component: () => import(/* webpackChunkName: "base" */ "../views/Base.vue"),
  },
  {
    path: "/key",
    name: "Key",
    component: () => import(/* webpackChunkName: "key" */ "../views/Key.vue"),
  },
  {
    path: "/life",
    name: "Life",
    component: () => import(/* webpackChunkName: "life" */ "../views/Life.vue"),
  },
  {
    path: "/slot",
    name: "Slot",
    component: () => import(/* webpackChunkName: "slot" */ "../views/Slot.vue"),
  },
  {
    path: "/jsx",
    name: "Jsx",
    component: () => import(/* webpackChunkName: "jsx" */ "../views/Jsx.jsx"),
  },
  {
    path: "/customref",
    name: "CustomRef",
    component: () =>
      import(/* webpackChunkName: "customref" */ "../views/CustomRef.vue"),
  },
  {
    path: "/computed",
    name: "Computed",
    component: () =>
      import(/* webpackChunkName: "computed" */ "../views/Computed.vue"),
  },
  {
    path: "/watch",
    name: "Watch",
    component: () =>
      import(/* webpackChunkName: "watch" */ "../views/Watch.vue"),
  },
  {
    path: "/customhook",
    name: "CustomHook",
    component: () =>
      import(/* webpackChunkName: "customhook" */ "../views/CustomHook.vue"),
  },
  {
    path: "/style",
    name: "Style",
    component: () =>
      import(/* webpackChunkName: "style" */ "../views/Style.vue"),
  },
  {
    path: "/ref",
    name: "Ref",
    component: () => import(/* webpackChunkName: "ref" */ "../views/Ref.vue"),
  },
  {
    path: "/router",
    name: "Router",
    component: () =>
      import(/* webpackChunkName: "router" */ "../views/Router.vue"),
    // 重定向，去子路由 必须传全路径
    // redirect: "/router/route1",

    // 或者传递name
    // redirect: { name: "Route1" },

    // 相对重定向，不加/相当于替换本身 / 后面的内容，这里会跳转到 /ref去
    // redirect: "ref",

    // 传递方法
    // redirect: (to) => {
    //   // 方法接收目标路由作为参数，这里就是 {fullPath: '/router', path: '/router', query: {…}, hash: '', name: 'Router'}
    //   // return 重定向的字符串路径/路径对象
    //   console.log(to);
    //   return { path: "/router/route1" };
    // },

    // 别名 alias
    alias: "/aliasrouter", // 这样/router和/aliasrouter都匹配该路由
    children: [
      {
        path: "route1",
        name: "Route1",
        // 相对重定向，不加/相当于替换本身 / 后面的内容，
        // 本身是/router/route1 这里会跳转到 /router/route4去
        // redirect: "route4",
        component: () =>
          import(/* webpackChunkName: "router" */ "../views/Routes/Route1.vue"),
      },
      {
        path: "route2/:id",
        name: "Route2",
        component: () =>
          import(/* webpackChunkName: "router" */ "../views/Routes/Route2.vue"),
        // 请记得，参数一定要在props里面接收
        // props: true,
        // props: { id: 72, name: "randy" },
        props: (route) => {
          console.log(route);
          return { name: "randy", id: route.params.id };
        },
      },
      // ？表示可选
      {
        path: "route3/:name?",
        name: "Route3",
        component: () =>
          import(/* webpackChunkName: "router" */ "../views/Routes/Route3.vue"),
      },
      {
        path: "route4",
        name: "Route4",
        // vue3新增的两个配置
        // sensitive: true,
        // strict: true,
        component: () =>
          import(/* webpackChunkName: "router" */ "../views/Routes/Route4.vue"),
      },
      {
        path: "route5",
        name: "Route5",
        meta: { name: "randy" },
        meta2: { name: "randy2" }, // 无效
        component: () =>
          import(/* webpackChunkName: "router" */ "../views/Routes/Route5.vue"),
      },
      {
        path: "route6",
        name: "Route6",
        component: () =>
          import(/* webpackChunkName: "router" */ "../views/Routes/Route6.vue"),
      },
    ],
  },
  {
    path: "/store",
    name: "Store",
    component: () =>
      import(/* webpackChunkName: "store" */ "../views/Store.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 始终滚动到顶部
    // return { top: 0 };

    // savedPosition 只有当这是一个 popstate 导航时才可用（由浏览器的后退/前进按钮触发）
    // 可以用来回到之前的位置
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }

    // 延迟滚动
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({ left: 0, top: 0, behavior: "smooth" });
    //   }, 500);
    // });
  },
});

export default router;
