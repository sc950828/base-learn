import React, { useEffect } from "react";
import Test from "../components/Test";
import TestWithRouter from "../components/TestWithRouter";
import { Switch, Route, useHistory } from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Auth from "../router/Auth";

export default function Home(props) {
  console.log("Home", props);

  // useEffect(() => {
  //   const unblock = props.history.block((location, action) => {
  //     console.log(location, action);
  //     return "离开？";
  //   });

  //   const unlisten = props.history.listen((location, action) => {
  //     console.log("listen", location, action);
  //   });
  //   return () => {
  //     unblock && unblock();
  //     unlisten && unlisten();
  //   };
  // }, []);

  const goPage = (path) => {
    props.history.push(path);
  };

  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          goPage("/about");
        }}
      >
        goAbout
      </button>
      <button
        onClick={() => {
          goPage("/home/child1");
        }}
      >
        goChild1
      </button>
      <button
        onClick={() => {
          goPage("/home/child2");
        }}
      >
        goChild2
      </button>

      <div className="box" style={{ padding: "20px" }}>
        <Switch>
          {/* <Route path="/home/child1" component={Child1}></Route>
          <Route path="/home/child2" component={Child2}></Route> */}

          {props.routes.map((route) => {
            return (
              // 路由鉴权
              <Auth key={route.path} {...route}></Auth>
            );
          })}
        </Switch>
      </div>

      {/* <Test></Test> */}
      {/* <TestWithRouter></TestWithRouter> */}
    </div>
  );
}
