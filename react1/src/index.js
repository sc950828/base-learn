import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routerConfig/routes";
import Auth from "./routerConfig/Auth";
import { Provider } from "react-redux";
import store from "./store";

// console.log(store);
// 监听
// store.subscribe(() => console.log(store.getState()));

// store.dispatch({ type: "counter/incremented" });
// store.dispatch({ type: "counter/incremented" });
// store.dispatch({ type: "counter/decremented" });

// store.dispatch({ type: "name/incremented" });
// store.dispatch({ type: "name/incremented" });
// store.dispatch({ type: "name/decremented" });
// store.dispatch({ type: "age/incremented", payload: {num: 10} });
// store.dispatch({ type: "age/decremented", payload: {num: 5} });

// 一个dispatch会进入到所有的reducer，在里面判断。
// setTimeout(() => {
//   store.dispatch({ type: "counter/incremented" });
// }, 3000);

ReactDOM.render(
  // redux
  <Provider store={store}>
    <BrowserRouter>
      <App />

      {/* 使用 react-router-config */}
      {/* {renderRoutes(routes)} */}

      {/* 自己实现 */}
      {/* <Switch>
      {routes.map((route) => {
        return (
          // 路由鉴权
          // <Auth key={route.path} {...route}></Auth>

          <Route
            path={route.path}
            key={route.path}
            // 普通组件
            // component={route.component}

            // 渲染函数，可以传自定义参数
            render={(props) => {
              return (
                <route.component
                  {...props}
                  routes={route.routes}
                ></route.component>
              );
            }}
          ></Route>
        );
      })}
    </Switch> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
