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
    path: "/router",
    name: "Router",
    component: () =>
      import(/* webpackChunkName: "router" */ "../views/Router.vue"),
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
});

export default router;
