import { SET_USERINFO_TYPE, SET_USERMENUS_TYPE } from "../types";
import routes, { transformRoutes } from "@/router/routes";

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

export const setUserInfoAction2 = (payload) => {
  return {
    type: SET_USERINFO_TYPE,
    payload,
  };
};

// 假设这里调用后端接口获取了用户菜单
const getUserMenus = async () => {
  const menus = await Promise.resolve([
    {
      element: "../views/Home.jsx",
      path: "/home",
      meta: {
        title: "首页",
        needLogin: false,
      },
      children: [
        {
          path: "/home/child1",
          element: "../views/Child1.jsx",
          meta: {
            title: "子页面1",
            needLogin: false,
          },
        },
        {
          path: "/home/child2",
          element: "../views/Child2.jsx",
          meta: {
            title: "子页面2",
            needLogin: true,
            btns: ["add", "select"], // 当前用户只有add和select按钮
          },
        },
      ],
    },
  ]);

  return transformRoutes(menus).concat(routes);
};

export const setUserMenusAction = () => {
  return {
    type: SET_USERMENUS_TYPE,
    payload: getUserMenus(),
  };
};
