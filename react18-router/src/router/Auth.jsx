import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

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
  if (meta && meta.roles && userInfo && !meta.roles.includes(userInfo.role)) {
    // console.log(props, userInfo);
    return <Navigate to="/nopermission" replace></Navigate>;
  }

  return <>{props.children}</>;
}
