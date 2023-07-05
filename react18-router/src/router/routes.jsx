import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Login";
import Child1 from "../views/Child1";
import Child2 from "../views/Child2";
import Error404 from "../views/Error404";

import { Navigate } from "react-router-dom";
import Auth from "./Auth";

const routes = [
  {
    element: <Home></Home>,
    path: "/home",
    meta: {
      title: "首页",
      needLogin: false,
    },
    children: [
      {
        path: "/home/child1",
        element: <Child1></Child1>,
        meta: {
          title: "子页面1",
          needLogin: false,
        },
      },
      {
        path: "/home/child2",
        element: <Child2></Child2>,
        meta: {
          title: "子页面2",
          needLogin: true,
        },
      },
    ],
  },
  {
    path: "/about",
    element: <About></About>,
    meta: {
      title: "关于",
      needLogin: true,
    },
  },
  {
    path: "/login",
    element: <Login></Login>,
    meta: {
      title: "登录",
      needLogin: false,
    },
  },
  // 放后面
  {
    path: "/",
    redirect: "/home/child1",
  },
  // 放最后
  {
    path: "*",
    element: <Error404></Error404>,
  },
];

// HOC
const authLoad = (element, meta = {}) => {
  return <Auth meta={meta}>{element}</Auth>;
};

// 路由配置列表数据转换
export const transformRoutes = (routes) => {
  const list = [];
  routes.forEach((route) => {
    const obj = { ...route };
    if (obj.redirect) {
      obj.element = <Navigate to={obj.redirect} replace={true} />;
    }

    if (obj.element) {
      obj.element = authLoad(obj.element, obj.meta);
    }

    delete obj.redirect;
    delete obj.meta;

    if (obj.children) {
      obj.children = transformRoutes(obj.children);
    }
    list.push(obj);
  });
  return list;
};

export default routes;
