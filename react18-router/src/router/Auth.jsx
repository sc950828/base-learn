import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { cloneElement } from "react";

export default function Auth(props) {
  // 获取用户信息
  const userInfo = useSelector((state) => state.user.userinfo);
  const { meta } = props;
  const location = useLocation();
  console.log("auth", userInfo, props, location);

  // 设置标题
  if (meta.title) {
    document.title = meta.title;
  }

  const token = localStorage.getItem("token");

  // 权限校验
  if (meta.needLogin && !token) {
    return <Navigate to="/login" replace></Navigate>;
  }
  // 路由需要角色、并且当前有用户信息 并且角色不匹配则去没有权限页面
  // if (meta && meta.roles && userInfo && !meta.roles.includes(userInfo.role)) {
  //   // console.log(props, userInfo);
  //   return <Navigate to="/nopermission" replace></Navigate>;
  // }

  // 为了给jsx传递属性，使用了 cloneElement。简单点的话可以在routes里面定义组件本身而不是jsx组件。
  // const _cloneElement = cloneElement(props.children, {
  //   btns: meta.btns && userInfo ? meta.btns[userInfo.role] : [],
  // });

  return <>{props.children}</>;
  // return <>{_cloneElement}</>;
}
