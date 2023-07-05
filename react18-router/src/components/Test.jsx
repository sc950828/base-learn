import React from "react";
// import { useHistory, useLocation, useParams } from "react-router-dom";

export default function Test(props) {
  console.log("Test 非路由组件获取不到路由相关信息", props);

  // const history = useHistory();
  // const location = useLocation();
  // const params = useParams();
  // console.log("Test 通过 hooks获取路由信息", history, location, params);

  return <div>Test</div>;
}
