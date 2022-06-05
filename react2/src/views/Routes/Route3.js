import React, { useEffect } from "react";
import {
  useNavigate,
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";
import withRouter from "./withRouter";

function Route3(props) {
  // console.log("route3 props:", props);
  const navigate = useNavigate();
  const location = useLocation();
  // match 感觉没啥用了
  // const match = useMatch("/router/route3/:ids");
  const params = useParams();

  // console.log("navigate: ", navigate);
  // console.log("location: ", location);
  // console.log("match: ", match);
  // console.log("params: ", params);

  // 使用search参数
  let [searchParams, setSearchParams] = useSearchParams();
  // URLSearchParams 对象
  // console.log(searchParams);
  // console.log("searchParams: ", Object.fromEntries(searchParams));

  useEffect(() => {
    console.log(params);
  }, [params]);

  return (
    <div>
      <div>params: {params?.id}</div>
      <div>location.hash: {location.hash}</div>
      <div>location.state: {location.state?.fromDashboard}</div>
    </div>
  );
}

export default Route3;

// 用了 withRouter 就可以在类组件 获取到 history location params
// 函数组件 useParams就能获取 params，很方便
// export default withRouter(Route3);
