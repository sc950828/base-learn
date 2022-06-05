import React from "react";
import {
  useNavigate,
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Route2() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  console.log("navigate: ", navigate);
  console.log("location: ", location);
  console.log("params: ", params);

  // 使用search参数
  let [searchParams, setSearchParams] = useSearchParams();
  // URLSearchParams 对象
  // console.log(searchParams);
  console.log("searchParams: ", Object.fromEntries(searchParams));

  return (
    <div>
      <div>location.hash: {location.hash}</div>
      <div>location.state: {location.state?.fromDashboard}</div>
    </div>
  );
}

export default Route2;
