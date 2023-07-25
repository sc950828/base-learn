import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Login from "./views/Login";
import Child1 from "./views/Child1";
import Child2 from "./views/Child2";
import routes, { transformRoutes } from "./router/routes";
import { useDispatch } from "react-redux";
import { setUserInfoAction } from "./store/actions/userActions";

function App() {
  const pages = useRoutes(transformRoutes(routes));
  const dispatch = useDispatch();
  console.log("App");
  useEffect(() => {
    // 获取用户信息
    dispatch(setUserInfoAction());
  }, []);

  return (
    <div className="app-wrapper">
      {/* <Routes>
        <Route
          path="/"
          element={<Navigate to="/home/child1"></Navigate>}
        ></Route>
        <Route path="/home/*" element={<Home></Home>}>
          <Route path="child1" element={<Child1></Child1>}></Route>
          <Route path="child2" element={<Child2></Child2>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes> */}

      {pages}
    </div>
  );
}

export default App;
