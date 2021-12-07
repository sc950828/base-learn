import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Old from "../views/Old.vue";
import Parent from "../views/Parent.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/old",
    name: "Old",
    component: Old,
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
    path: "/life",
    name: "Life",
    component: () => import(/* webpackChunkName: "life" */ "../views/Life.vue"),
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
