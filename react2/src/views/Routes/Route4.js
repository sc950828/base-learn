import React from "react";
import {
  useNavigate,
  useLocation,
  useMatch,
  useParams,
  useSearchParams,
} from "react-router-dom";

function Route4() {
  const navigate = useNavigate();

  // navigate的参数和Link接收的参数是一模一样的

  const goPage1 = () => {
    navigate("../route3/75", { state: { fromDashboard: "navigate state" } });
  };

  const goPage2 = () => {
    navigate("../route3/75", {
      state: { fromDashboard: "navigate state" },
      replace: true,
    });
  };

  const goPage3 = () => {
    navigate("/router/route3/76", {
      state: { fromDashboard: "navigate state" },
      replace: true,
    });
  };

  const goPage4 = () => {
    navigate(
      { pathname: "../route3/78", search: "name=demi", hash: "hash3" },
      {
        state: { fromDashboard: "navigate state" },
        replace: false,
      }
    );
  };

  return (
    <div>
      <button onClick={goPage1}>去route3</button>
      <button onClick={goPage2}>去route3 replace</button>

      <button onClick={goPage3}>去route3 绝对路径</button>

      <button onClick={goPage4}>去route3 传递对象</button>
    </div>
  );
}

export default Route4;
