import { Route, Redirect } from "react-router-dom";

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
