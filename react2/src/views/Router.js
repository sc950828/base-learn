import React, { Component } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import "../style/router.css";
import Route1 from "./Routes/Route1";

export class Router extends Component {
  constructor(props) {
    super(props);
    console.log("Router props", this.props);
  }

  render() {
    return (
      <div>
        <div className="nav">
          <h3>基础</h3>
          <Link to="route1">/router/route1</Link>

          <h3>传递参数 search、state</h3>
          <Link to="route2?name=randy">/router/route2?name=randy</Link>
          {/* 不支持query，search需要自己封装使用。
              search、hash会显示在浏览器入境，state不显示在浏览器路径。
              hashRouter页面刷新 state 会丢失。
          */}
          <Link
            to={{
              pathname: "route2",
              search: "?name=randy",
              hash: "#the-hash",
            }}
            // state需要单独传递
            state={{ fromDashboard: 1 }}
          >
            传递对象
          </Link>

          <h3>动态参数 params</h3>
          <Link to="route3/72?name=randy1#hash1" state={{ fromDashboard: 1 }}>
            route3/72?name=randy1#hash1
          </Link>
          <Link
            to={{
              pathname: "route3/73",
              search: "?name=randy2",
              hash: "#hash2",
            }}
            state={{ fromDashboard: 2 }}
          >
            对象
          </Link>

          <h3>动态参数 类组件</h3>
          <Link to="route6/randy">route6/randy</Link>
          <Link to="route6/demi">route6/demi</Link>

          <h3>navigate</h3>
          <Link to="route4">route4</Link>

          <h3>重定向</h3>
          <Link to="route5">route5</Link>
        </div>

        {/* 这种方式也还是保留的 ，但是不需要补全父路径*/}
        {/* <Routes>
          <Route path="route1" element={<Route1 />}></Route>
        </Routes> */}

        {/* 只需要定义 Outlet */}
        <Outlet />
      </div>
    );
  }
}

export default Router;
