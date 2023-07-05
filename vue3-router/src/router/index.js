import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store/index";

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

const modules = import.meta.glob("../views/*.vue");

// 转换成 vue-router 需要的格式
const transformRoute = (menus) => {
  return menus.map((menu) => {
    return {
      path: menu.path,
      name: menu.name,
      component: modules[menu.component],
      meta: {
        title: menu.title,
        btns: menu.btns,
      },
      // 如果有子路由，则递归处理
      children: menu.children ? transformRoute(menu.children) : [],
    };
  });
};

const addRoutes = (routes) => {
  routes.forEach((route) => {
    router.addRoute(route);
  });
};

const whiteLists = ["/login", "/"];

router.beforeEach(async (to, from, next) => {
  // 是否是白名单
  if (!whiteLists.includes(to.path)) {
    // 获取token
    const token = localStorage.getItem("token");

    // 如果有token 则直接放行
    if (token) {
      // // 获取用户信息，从store里面获取
      // let userInfo = store.getters["getUserInfo"];
      // // 如果没有用户信息就获取用户信息
      // if (!userInfo) {
      //   userInfo = await store.dispatch("getUserInfoAction");
      // }

      // // 如果页面需要权限，并且用户角色不满足则去无权限提示页
      // if (to.meta.roles && !to.meta.roles.includes(userInfo.role)) {
      //   return next("/nopermission");
      // }

      // next();

      // 获取用户菜单信息，从store里面获取
      let userMenus = store.getters["getUserMenus"];
      // 如果没有用户信息就获取用户信息
      if (!userMenus) {
        userMenus = await store.dispatch("getUserMenuAction");
        // 菜单转成路由
        const userRoute = transformRoute(userMenus);
        // 动态添加路由
        // vue2
        // router.addRoutes(userRoute)
        // next({ ...to , replace: true});

        // vue3
        // 因为 vue3 移除了 router.addRoutes()方法，所以需要手动实现addRoutes方法。
        addRoutes(userRoute);
        return next({ ...to });
      }

      // 有name说明路由存在，否则说明没有该路由
      if (to.name) {
        next();
      } else {
        next("/nopermission");
      }
    } else {
      // 否则去登录页
      next("/login");
    }
  } else {
    // 是白名单则直接进入
    next();
  }
});

// 修改标题的工作可以放在全局后置守卫
router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
