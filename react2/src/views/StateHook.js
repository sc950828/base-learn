import { useState } from "react";

// 从 16.8.0 开始，React 在以下模块中包含了 React Hook 的稳定实现
function StateHook() {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({ name: "demi", age: 24 });

  const lazy = () => {
    setTimeout(() => {
      // 这种方式拿到的不是最新的count，而是函数初始化的值
      // setCount(count + 1);

      // 这中方式能确保拿到的是最新的前一个值
      setCount((count) => count + 1);
    }, 3000);
  };

  const handleChangeUserName = async () => {
    // 不支持回调和异步，获取不到最新值
    // await setUser((state) => {
    //   console.log(state);
    //   return { ...state.user, name: "jack" };
    // });
    setUser({ ...user, name: "jack" });
    // console.log(user);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>add</button>
        <button onClick={lazy}>lazy add</button>
      </div>

      <div>
        {user.name}, {user.age}
      </div>
      <div>
        <button onClick={handleChangeUserName}>chage name</button>
      </div>
    </div>
  );
}

export default StateHook;
