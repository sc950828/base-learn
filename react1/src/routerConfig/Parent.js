import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Auth from "./Auth";

export class Parent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div>
        Parent
        <div>
          <Link to="/parent/child1">/parent/child1</Link>
          <Link to="/parent/child2">/parent/child2</Link>

          {/* {renderRoutes(this.props.routes)} */}

          <Switch>
            {this.props.routes?.map((route) => {
              return (
                // 路由鉴权
                <Auth key={route.path} {...route}></Auth>

                // <Route
                //   path={route.path}
                //   key={route.path}
                //   render={(props) => {
                //     return (
                //       <route.component
                //         {...props}
                //         routes={route.routes}
                //       ></route.component>
                //     );
                //   }}
                // ></Route>
              );
            })}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Parent;
