import { useReducer } from "react";

function ReducerHook1(props) {
  const init = (initialCount) => {
    return { count: initialCount, name: "randy" };
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return init(action.initialCount);
      default:
        return { ...state };
    }
  };

  // 这种方式的好处是初始值可以通过传递过来
  // 并且 还可以调用初始化方法恢复到初始值
  // props.initialCount会被作为init方法的参数
  const [state, dispatch] = useReducer(reducer, props.initialCount, init);

  return (
    <div>
      <div>
        {state.count}, {state.name}
      </div>
      <div>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "reset", initialCount: 0 })}>
          reset
        </button>
      </div>
    </div>
  );
}

export default ReducerHook1;
