import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserInfoAction,
  setUserMenusAction,
} from "./store/actions/userActions";

import routes from "./router/routes";
import Auth from "./router/Auth";

function App(props) {
  const dispatch = useDispatch();
  const menus = useSelector((state) => state.user.menus);
  // const history = useHistory();
  // useEffect(() => {
  //   const unblock = history.block((location, action) => {
  //     console.log("block", location, action);
  //     return "离开？";
  //   });

  //   const unlisten = history.listen((location, action) => {
  //     console.log("listen", location, action);
  //   });
  //   return () => {
  //     unblock && unblock();
  //     unlisten && unlisten();
  //   };
  // }, []);

  useEffect(() => {
    // 获取用户信息
    dispatch(setUserInfoAction());

    // 后台动态获取菜单
    dispatch(setUserMenusAction());
  }, []);

  return (
    <div className="app-wrapper">
      <Switch>
        {/* <Route path="/" exact>
          <Redirect to="/home/child1"></Redirect>
        </Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/login" component={Login}></Route> */}

        {/* {routes.map((route) => {
          return (
            // 路由鉴权
            <Auth key={route.path} {...route}></Auth>
          );
        })} */}

        {/* 动态添加路由 */}
        {menus.map((route) => {
          return (
            // 路由鉴权
            <Auth key={route.path} {...route}></Auth>
          );
        })}
      </Switch>
    </div>
  );
}

export default App;
