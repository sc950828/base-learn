import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      needLogin: false, // 不需要登录
      title: "首页",
    },
  },
  // {
  //   path: "/about", // 该页面只有admin和管理员才能进入
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"), // 路由懒加载
  //   meta: {
  //     needLogin: true, // 需要登录
  //     title: "关于",
  //     roles: ["admin", "manage"],
  //   },
  // },
  {
    path: "/nopermission", // 没权限就进入该页面
    name: "NoPermission",
    component: () =>
      import(
        /* webpackChunkName: "nopermission" */ "../views/NoPermission.vue"
      ), // 路由懒加载
    meta: {
      needLogin: true, // 需要登录
      title: "暂无权限",
    },
  },
  // {
  //   path: "/userlist", // 该页面只有admin才能进入
  //   name: "UserList",
  //   component: () =>
  //     import(/* webpackChunkName: "userlist" */ "../views/UserList.vue"), // 路由懒加载
  //   meta: {
  //     needLogin: true, // 需要登录
  //     title: "用户管理",
  //     roles: ["admin", "manage"],
  //     btns: {
  //       admin: ["add", "delete", "edit", "select"], // admin 有增删改查按钮
  //       manage: ["select"], // 普通管理员只有查看按钮
  //     },
  //   },
  // },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"), // 路由懒加载
    meta: {
      needLogin: false, // 不需要登录
      title: "登录",
    },
  },
];

export default routes;
