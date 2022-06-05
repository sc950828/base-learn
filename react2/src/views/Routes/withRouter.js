import { useLocation, useNavigate, useParams } from "react-router";

// https://github.com/remix-run/react-router/issues/7256
export default function withRouter(Child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();

    return (
      <Child
        {...props}
        navigate={navigate}
        location={location}
        params={params}
      />
    );
  };
}
