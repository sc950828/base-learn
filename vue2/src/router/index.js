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
    component: () =>
      import(/* webpackChunkName: "alive" */ "../views/Alive.vue"),
  },
  {
    path: "/jsxtest",
    name: "JsxTest",
    component: () =>
      import(/* webpackChunkName: "jsxtest" */ "../views/JsxTest.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
