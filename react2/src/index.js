import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

// 在reducer里面配置对象相当于 多个reducer

// console.log(store);

// store.subscribe(() => console.log(store.getState()));

// store.dispatch(incremented());
// // 传递的参数就是action里面的payload;
// store.dispatch(add(10));
// store.dispatch(decremented());

// jsx自动语法需要添加设置 "emmet.includeLanguages": {"javascript": "javascriptreact"}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
