import React from "react";
import { useDispatch } from "react-redux";
import { setUserInfoAction2 } from "../store/actions/userActions";

export default function Child2(props) {
  const dispatch = useDispatch();
  const changeRole = () => {
    // 获取用户信息
    dispatch(setUserInfoAction2({ role: "admin", name: "randy" }));
  };
  return (
    <div>
      <div>Child2 按钮权限</div>
      <div>
        {props.btns.includes("add") && <button>add</button>}
        {props.btns.includes("delete") && <button>delete</button>}
        {props.btns.includes("edit") && <button>edit</button>}
        {props.btns.includes("select") && <button>select</button>}
      </div>

      {/* <button onClick={changeRole}>改变角色为admin</button> */}
    </div>
  );
}
