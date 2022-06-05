import React from "react";
import { Route, Redirect } from "react-router-dom";

function Auth(props) {
  const { component: Component, path, auth, ...otherProps } = props;

  const token = localStorage.getItem("token");

  if (!auth) {
    return (
      <Route
        path={path}
        render={(props) => {
          return <Component {...props} {...otherProps} />;
        }}
      ></Route>
    );
  }

  // 如果用户有权限，就渲染对应的路由
  if (auth && token) {
    return (
      <Route
        path={path}
        render={(props) => <Component {...props} {...otherProps} />}
      ></Route>
    );
  } else {
    // 如果没有权限，返回配置的默认路由
    return <Redirect to="/login" />;
  }
}

export default Auth;
