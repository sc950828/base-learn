import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function Auth(props) {
  const {
    component: Component,
    path,
    meta,
    routes,
    redirect,
    exact,
    strict,
  } = props;

  // 获取用户信息
  const userInfo = useSelector((state) => state.user.userinfo);
  console.log("auth", userInfo, props);
  // 设置网页标题
  if (meta && meta.title) {
    document.title = meta.title;
  }

  // 重定向
  if (redirect) {
    return <Redirect to={redirect} />;
  }

  // 判断是否需要登录
  if (meta && meta.needLogin) {
    const token = localStorage.getItem("token");
    // 没登录去登录页
    if (!token) {
      return <Redirect to="/login" />;
    }
  }
  // 路由需要角色、并且当前有用户信息 并且角色不匹配则去没有权限页面
  if (meta && meta.roles && userInfo && !meta.roles.includes(userInfo.role)) {
    // console.log(props, userInfo);
    return <Redirect to="/nopermission" />;
  }

  return (
    <Route
      path={path}
      exact={exact}
      strict={strict}
      render={(props) => <Component {...props} routes={routes} />}
    ></Route>
  );
}

export default Auth;
