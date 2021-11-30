import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
  },
  {
    path: "/jsxtest",
    name: "JsxTest",
    // 这种也是异步加载
    component: (resolve) => require(["../views/JsxTest"], resolve),
  },
  {
    path: "/route",
    name: "Route",
    // 这种也是异步加载
    component: (resolve) => require(["../views/Route"], resolve),
  },
  {
    path: "/storetest",
    name: "StoreTest",
    component: () =>
      import(/* webpackChunkName: "filter" */ "../views/StoreTest.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
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

export default router;
