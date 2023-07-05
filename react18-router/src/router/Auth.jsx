import { Navigate } from "react-router-dom";

export default function Auth(props) {
  const { meta } = props;

  // 设置标题
  if (meta.title) {
    document.title = meta.title;
  }

  const token = localStorage.getItem("token");

  // 权限校验
  if (meta.needLogin && !token) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return <>{props.children}</>;
}
