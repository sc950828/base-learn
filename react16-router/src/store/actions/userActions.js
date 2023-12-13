import { SET_USERINFO_TYPE, SET_USERMENUS_TYPE } from "../types";
import { lazy } from "react";
import routes from "@/router/routes";

// 假设这里调用后端接口获取了用户信息数据
const getUserInfo = async () => {
  const userInfo = await Promise.resolve({ role: "manage", name: "jack" });
  return userInfo;
};

export const setUserInfoAction = () => {
  return {
    type: SET_USERINFO_TYPE,
    payload: getUserInfo(),
  };
};

// 菜单转路由
const transformMenuToRoute = (menus) => {
  return menus.map((menu) => {
    return {
      path: menu.path,
      name: menu.name,
      component: lazy(() => import(menu.component)),
      exact: menu.exact,
      strict: menu.strict,
      redirect: menu.redirect,
      meta: menu.meta,
      // 如果有子路由，则递归处理
      routes: menu.routes ? transformMenuToRoute(menu.routes) : [],
    };
  });
};

// 假设这里调用后端接口获取了用户菜单
const getUserMenus = async () => {
  const menus = await Promise.resolve([
    {
      component: "../../views/Home.jsx",
      path: "/home",
      meta: {
        title: "首页",
        needLogin: false, // 不需要登录
      },
      routes: [
        {
          path: "/home/child1",
          component: "../../views/Child1.jsx",
          meta: {
            title: "子页面1",
            needLogin: false, // 不需要登录
          },
        },
        {
          path: "/home/child2",
          component: "../../views/Child2.jsx",
          meta: {
            title: "子页面2",
            needLogin: true, // 需要登录
          },
        },
      ],
    },
  ]);

  return transformMenuToRoute(menus).concat(routes);
};

export const setUserMenusAction = () => {
  return {
    type: SET_USERMENUS_TYPE,
    payload: getUserMenus(),
  };
};
