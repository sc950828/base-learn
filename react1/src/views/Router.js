import React, { Component } from "react";
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import "../styles/router.css";
import Index from "./Routes/Index";
import Route1 from "./Routes/Route1";
import Route2 from "./Routes/Route2";
import Route3 from "./Routes/Route3";
import Route4 from "./Routes/Route4";
import Route6 from "./Routes/Route6";
import Route7 from "./Routes/Route7";
import Route9 from "./Routes/Route9";

// router 4/5
export class Router extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    const { history, location, match } = this.props;
    // console.log("history:", history);
    // console.log("location:", location);
    // console.log("match:", match);
  }

  componentDidMount() {
    // 路由监听，统一路由重复点击也会重复触发
    this.unlisten = this.props.history.listen((location, action) => {
      console.log(location, action);
    });

    this.unblock = this.props.history.block((location, action) => {
      console.log(location, action);
      // return "离开？";
    });
  }

  // 组件卸载时，解除监听
  componentWillUnmount() {
    this.unlisten();
    this.unblock();
  }

  render() {
    return (
      <div>
        <div className="nav">
          <h3>exact 精准匹配才生效, strict尾/， sensitive大小写</h3>
          <Link to={`${this.props.match.path}/`}>Index</Link>
          <Link to={`${this.props.match.path}/route1`}>/router/route1</Link>
          <Link to={`${this.props.match.path}/ROUTE1`}>/router/ROUTE1</Link>

          {/* 可以设置样式的导航 */}
          {/* 默认是class="active"，可以再设置*/}
          <NavLink
            to={`${this.props.match.path}/route1`}
            activeClassName="active-class"
          >
            NavLink route1
          </NavLink>

          <h3>动态参数</h3>
          <Link to={`${this.props.match.path}/route2/72`}>
            /router/route2/72
          </Link>
          <Link to={`${this.props.match.path}/route2/73`}>
            /router/route2/73
          </Link>

          <h3>传递参数</h3>
          <Link to={`${this.props.match.path}/route3?name=randy`}>
            /router/route3?name=randy
          </Link>
          {/* 不支持query，search需要自己封装使用。
              search、hash会显示在浏览器入境，state不显示在浏览器路径。
              hashRouter页面刷新 state 会丢失。
          */}
          <Link
            to={{
              pathname: `${this.props.match.path}/route3`,
              search: "?name=randy",
              hash: "#the-hash",
              state: { fromDashboard: 1 },
            }}
          >
            传递对象
          </Link>

          <h3>withRouter</h3>
          <Link to={`${this.props.match.path}/route4`}>/router/route4</Link>

          <h3>redirect</h3>
          <Link to={`${this.props.match.path}/route6`}>/router/route6</Link>

          <h3>
            函数组件使用hooks获取路由
            useHistory、useLocation、useRouteMatch、useParams{" "}
          </h3>
          <Link to={`${this.props.match.path}/route7`}>/router/route7</Link>

          <h3>编程式导航 路由跳转</h3>
          <Link to={`${this.props.match.path}/route9`}>/router/route9</Link>

          <h3>router config </h3>
          <Link to="/parent">/parent</Link>
        </div>

        <Switch>
          {/* 这里不配置 exact 后面所有路由都匹配不上，因为后面路由都是/开头 */}
          {/* exact 精准匹配才生效, strict尾/， sensitive大小写，这三个参数默认值都是false*/}
          <Route
            path={`${this.props.match.path}/`}
            component={Index}
            strict
            exact
          ></Route>
          <Route
            path={`${this.props.match.path}/route1`}
            component={Route1}
            // sensitive
          ></Route>

          {/* 如果路由 Route 外部包裹 Switch 时，路由匹配到对应的组件后，就不会继续渲染其他组件了。 */}
          {/* 但是如果外部不包裹 Switch 时，所有路由组件会先渲染一遍，然后选择所有匹配的路由进行显示。 */}
          {/* <Route path={`${this.props.match.path}/`} component={Index}></Route> */}

          {/* 动态参数组件 参数修改会触发 Update相关钩子和componentWillReceiveProps */}
          <Route
            path={`${this.props.match.path}/route2/:id`}
            component={Route2}
          ></Route>

          {/* 传递参数 */}
          <Route
            path={`${this.props.match.path}/route3`}
            component={Route3}
          ></Route>

          {/* withRouter */}
          <Route
            path={`${this.props.match.path}/route4`}
            component={Route4}
          ></Route>

          {/* redirect */}
          {/* 写在外面相当于在/router下redirect */}
          {/* <Redirect to={`${this.props.match.path}/route1`} /> */}

          <Route path={`${this.props.match.path}/route6`}>
            {/* 在组件里面redirect，相当于路径匹配到 /router/route6 才redireect */}
            {/* <Redirect to="/home" /> */}
            {/* <Redirect to="/home" push /> */}

            {/* 支持绝对路径和相对路径 */}
            <Redirect to={`${this.props.match.path}/route4`} push />
            {/* <Redirect to={`route4`} push /> */}

            {/* {true ? <Redirect to="/home" /> : <Route6></Route6>} */}
            {/* {false ? <Redirect to="/home" /> : <Route6></Route6>} */}
          </Route>

          {/* 函数组件 */}
          <Route
            path={`${this.props.match.path}/route7`}
            component={Route7}
          ></Route>

          {/* 编程式导航 */}
          <Route
            path={`${this.props.match.path}/route9`}
            component={Route9}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default Router;
