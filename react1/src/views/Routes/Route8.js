import React from "react";
import { withRouter } from "react-router-dom";
import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Route8(props) {
  console.log("Route8 props: ", props);

  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  const params = useParams();

  console.log("history: ", history);
  console.log("location: ", location);
  console.log("match: ", match);
  console.log("params: ", params);

  return (
    <div>
      Route8 我是函数组件，并且不是路由组件，需要使用路由api
      需要使用hook或withRouter
    </div>
  );
}

// export default Route8;
export default withRouter(Route8);
