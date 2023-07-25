import { SET_USERINFO_TYPE } from "../types";

// 假设这里调用后端接口获取了用户信息数据
const getUserInfo = async () => {
  const userInfo = await Promise.resolve({ role: "manage", name: "jack" });
  return userInfo;
};

export const setUserInfoAction = () => {
  return {
    type: SET_USERINFO_TYPE,
    payload: getUserInfo(),
  };
};
