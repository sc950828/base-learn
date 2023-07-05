import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Login";
import Child1 from "../views/Child1";
import Child2 from "../views/Child2";
import Error404 from "../views/Error404";

const routes = [
  {
    component: Home,
    path: "/home",
    meta: {
      title: "首页",
      needLogin: false,
    },
    routes: [
      {
        path: "/home/child1",
        component: Child1,
        meta: {
          title: "子页面1",
          needLogin: false,
        },
      },
      {
        path: "/home/child2",
        component: Child2,
        meta: {
          title: "子页面2",
          needLogin: true,
        },
      },
    ],
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于",
      needLogin: true,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录",
      needLogin: false,
    },
  },
  // 放后面
  {
    path: "/",
    redirect: "/home/child1",
    exact: true,
  },
  // 放最后
  {
    path: "*",
    component: Error404,
  },
];

export default routes;
