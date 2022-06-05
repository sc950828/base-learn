import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Route8 from "./Route8";

function Route7(props) {
  // 函数组件 props 也有 路由相关信息
  // const history = useHistory();
  // const location = useLocation();
  // const match = useRouteMatch();
  // const params = useParams();

  console.log("Route7 props: ", props);
  // console.log("history: ", history);
  // console.log("location: ", location);
  // console.log("match: ", match);
  // console.log("params: ", params);

  return (
    <div>
      Route7
      <Route8></Route8>
    </div>
  );
}

export default Route7;
