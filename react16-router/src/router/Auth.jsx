import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense } from "react";

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
  // console.log("auth", userInfo, props);

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
  // 动态菜单不需要 判断角色了
  // 路由需要角色、并且当前有用户信息 并且角色不匹配则去没有权限页面
  if (meta && meta.roles && userInfo && !meta.roles.includes(userInfo.role)) {
    // console.log(props, userInfo);
    return <Redirect to="/nopermission" />;
  }
  return (
    // 动态菜单 lazy 需要添加 Suspense
    <Suspense>
      <Route
        path={path}
        exact={exact}
        strict={strict}
        render={(props) => (
          <Component
            {...props}
            routes={routes}
            // btns={meta.btns && userInfo ? meta.btns[userInfo.role] : []} // 注入它相应权限的按钮，写死配置
            btns={meta.btns ? meta.btns : []} // 动态添加路由
          />
        )}
      ></Route>
    </Suspense>
  );
}

export default Auth;
