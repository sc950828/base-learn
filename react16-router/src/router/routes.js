import Home from "@/views/Home";
import About from "../views/About";
import Login from "../views/Login";
import Child1 from "../views/Child1";
import Child2 from "../views/Child2";
import Error404 from "../views/Error404";
import NoPermission from "../views/NoPermission";

const routes = [
  // {
  //   component: Home,
  //   path: "/home",
  //   meta: {
  //     title: "首页",
  //     needLogin: false, // 不需要登录
  //   },
  //   routes: [
  //     {
  //       path: "/home/child1",
  //       component: Child1,
  //       meta: {
  //         title: "子页面1",
  //         needLogin: false, // 不需要登录
  //       },
  //     },
  //     {
  //       path: "/home/child2",
  //       component: Child2,
  //       meta: {
  //         title: "子页面2",
  //         needLogin: true, // 需要登录
  //         roles: ["admin", "manage"], // admin和manage角色才能看
  //         btns: {
  //           admin: ["add", "delete", "edit", "select"], // admin 有增删改查按钮
  //           manage: ["select"], // 普通管理员只有查看按钮
  //         },
  //       },
  //     },
  //   ],
  // },
  // {
  //   path: "/about",
  //   component: About,
  //   meta: {
  //     title: "关于",
  //     needLogin: true, // 需要登录
  //     roles: ["admin"], // admin角色才能看
  //   },
  // },

  // 动态添加路由的时候只需要将固定路由配置在这里
  {
    path: "/login",
    component: Login,
    meta: {
      title: "登录",
      needLogin: false, // 不需要登录
    },
  },
  {
    path: "/nopermission",
    component: NoPermission,
    meta: {
      title: "暂无权限",
      needLogin: false,
    },
  },
  // 放后面
  {
    path: "/",
    redirect: "/home",
    exact: true,
  },
  // 放最后
  {
    path: "*",
    component: Error404,
  },
];

export default routes;
