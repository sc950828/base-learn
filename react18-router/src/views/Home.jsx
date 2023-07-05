import React, { useEffect } from "react";
import Test from "../components/Test";
// import TestWithRouter from "../components/TestWithRouter";
import { Route, useOutlet, useNavigate } from "react-router-dom";
import Child1 from "./Child1";
import Child2 from "./Child2";

export default function Home(props) {
  console.log("Home", props);
  const outlet = useOutlet();
  const navigate = useNavigate();

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
    navigate(path);
  };

  return (
    <div>
      <h1>Home React-Router6</h1>
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
        {outlet}
      </div>

      {/* <Test></Test> */}
      {/* <TestWithRouter></TestWithRouter> */}
    </div>
  );
}
