import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/store",
    name: "Store",
    component: () =>
      import(/* webpackChunkName: "store" */ "../views/Store.vue"),
  },
  {
    path: "/pinia",
    name: "Pinia",
    component: () =>
      import(/* webpackChunkName: "pinia" */ "../views/Pinia.vue"),
  },
  {
    path: "/axios",
    name: "Axios",
    component: () =>
      import(/* webpackChunkName: "axios" */ "../views/Axios.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
