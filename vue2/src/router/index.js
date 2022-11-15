import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/life",
    name: "Life",
    component: () => import(/* webpackChunkName: "life" */ "../views/Life.vue"),
  },
  {
    path: "/event",
    name: "Event",
    component: () =>
      import(/* webpackChunkName: "event" */ "../views/Event.vue"),
  },
  {
    path: "/mixins",
    name: "MiXins",
    component: () =>
      import(/* webpackChunkName: "mixins" */ "../views/MiXins.vue"),
  },
  {
    path: "/filter",
    name: "Filter",
    component: () =>
      import(/* webpackChunkName: "filter" */ "../views/Filter.vue"),
  },
  {
    path: "/alive",
    name: "Alive",
    // 这种也是异步加载
    component: (r) =>
      require.ensure([], () => r(require("../views/Alive.vue")), "alive"),
    children: [
      {
        path: "a1",
        name: "A1",
        // 这种也是异步加载
        component: (resolve) => require(["../views/alives/A1"], resolve),
        children: [
          {
            path: "a1-1",
            name: "A1-1",
            // 这种也是异步加载
            component: (resolve) => require(["../views/alives/A1-1"], resolve),
          },
        ],
      },
      {
        path: "a2",
        name: "A2",
        // 这种也是异步加载
        component: (resolve) => require(["../views/alives/A2"], resolve),
      },
    ],
  },
  {
    path: "/jsxtest",
    name: "JsxTest",
    // 这种也是异步加载
    component: (resolve) => require(["../views/JsxTest"], resolve),
  },
  {
    path: "/slot",
    name: "Slot",
    component: (resolve) => require(["../views/Slot"], resolve),
  },

  {
    path: "/router",
    name: "Router",
    // 重定向，去子路由 必须传全路径
    // redirect: "/router/route1",
    // 相对重定向，不加/相当于替换本身 / 后面的内容，这里会跳转到 /ref去
    // redirect: "slot",
    // redirect: { name: "Route1" },
    // redirect: (to) => {
    //   return { path: "/router/route1" };
    // },
    component: () =>
      import(/* webpackChunkName: "router" */ "@/views/Router.vue"),
    children: [
      {
        path: "route1",
        name: "Route1",
        component: () =>
          import(/* webpackChunkName: "router" */ "@/views/Routes/Route1.vue"),
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
          // console.log(route);
          return { name: "randy", id: route.params.id };
        },
      },
      {
        path: "route3/:name?",
        name: "Route3",
        component: () =>
          import(/* webpackChunkName: "router" */ "../views/Routes/Route3.vue"),
      },
      {
        path: "route4",
        name: "Route4",
        component: () =>
          import(/* webpackChunkName: "router" */ "../views/Routes/Route4.vue"),
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
    path: "/storetest",
    name: "StoreTest",
    component: () =>
      import(/* webpackChunkName: "filter" */ "../views/StoreTest.vue"),
  },
  {
    path: "/father",
    name: "Father",
    component: () =>
      import(/* webpackChunkName: "father" */ "../views/Father.vue"),
    children: [
      {
        path: "fchild1",
        name: "FChild1",
        component: () =>
          import(/* webpackChunkName: "father" */ "@/components/Fchild1.vue"),
        children: [
          {
            path: "fchild1_1",
            name: "FChild1_1",
            component: () =>
              import(
                /* webpackChunkName: "father" */ "@/components/Fchild1_1.vue"
              ),
          },
        ],
      },
      {
        path: "fchild2",
        name: "FChild2",
        component: () =>
          import(/* webpackChunkName: "father" */ "@/components/Fchild2.vue"),
      },
    ],
  },
  {
    path: "/debounce",
    name: "Debounce",
    component: () =>
      import(/* webpackChunkName: "debounce" */ "@/views/Debounce.vue"),
  },
  {
    path: "/download",
    name: "Download",
    component: () =>
      import(/* webpackChunkName: "download" */ "@/views/Download.vue"),
  },
  {
    path: "/style",
    name: "Style",
    component: () =>
      import(/* webpackChunkName: "style" */ "@/views/Style.vue"),
  },
  {
    path: "/ref",
    name: "Ref",
    component: () => import(/* webpackChunkName: "ref" */ "@/views/Ref.vue"),
  },
  {
    path: "/dynamic",
    name: "Dynamic",
    component: () =>
      import(/* webpackChunkName: "dynamic" */ "@/views/Dynamic.vue"),
  },
  {
    path: "/image",
    name: "Image",
    component: () =>
      import(/* webpackChunkName: "image" */ "@/views/Image.vue"),
  },
  {
    path: "/array",
    name: "Array",
    component: () =>
      import(/* webpackChunkName: "array" */ "@/views/Array.vue"),
  },
  {
    path: "/yuanma1",
    name: "YuanMa1",
    component: () =>
      import(/* webpackChunkName: "yuanma" */ "@/views/YuanMa1.vue"),
  },
  {
    path: "/yuanma11",
    name: "YuanMa11",
    component: () =>
      import(/* webpackChunkName: "yuanma" */ "@/views/YuanMa1.vue"),
  },
  {
    path: "/yuanma2",
    name: "YuanMa2",
    component: () =>
      import(/* webpackChunkName: "yuanma" */ "@/views/YuanMa2.vue"),
  },
  {
    path: "/yuanma3",
    name: "YuanMa3",
    component: () =>
      import(/* webpackChunkName: "yuanma" */ "@/views/YuanMa3.vue"),
  },
  {
    path: "/yuanma4",
    name: "YuanMa4",
    component: () =>
      import(/* webpackChunkName: "yuanma" */ "@/views/YuanMa4.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      // vue3 变成了top left
      return { x: 0, y: 0, behavior: "smooth" };
    }
  },
});

router.beforeEach((to, from, next) => {
  // console.log("beforeEach");
  // console.log(to, from);
  // console.log(VueRouter.START_LOCATION);

  next();

  // if (to.path == "/about" && to.path !== "mixins") {
  //   // 重新又走了一遍路由
  //   next("/mixins");
  // } else {
  //   next();
  // }
});

// 所有都处理完后进入该方法，因为支持next所以可以在该方法进行再次跳转
router.beforeResolve((to, from, next) => {
  // console.log("beforeResolve");
  next();
});

router.afterEach((to, from) => {
  // console.log("afterEach");
});

export default router;
