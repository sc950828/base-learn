import { useReducer } from "react";
import ReducerHook1 from "../components/ReducerHook1";

function ReducerHook() {
  const reducer1 = (state, action) => {
    console.log("reducer1", action);
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return { ...state };
    }
  };
  // 与state不同这里是state对象
  const [state1, dispatch1] = useReducer(reducer1, { count: 0 });

  // 不同reducer互不影响
  const reducer2 = (state, action) => {
    console.log("reducer2", action);
    switch (action.type) {
      case "left":
        return { name: action.payload.o + state.name };
      case "right":
        return { name: state.name + action.payload.o };
      default:
        return { ...state };
    }
  };
  // 与state不同这里是state对象
  const [state2, dispatch2] = useReducer(reducer2, { name: "randy" });

  return (
    <div>
      <div>{state1.count}</div>
      <div>
        <button onClick={() => dispatch1({ type: "increment" })}>
          increment
        </button>
      </div>
      <div>
        <button onClick={() => dispatch1({ type: "decrement" })}>
          decrement
        </button>
      </div>
      <div>{state2.name}</div>
      <div>
        <button
          onClick={() => dispatch2({ type: "left", payload: { o: "#" } })}
        >
          left
        </button>
      </div>
      <div>
        <button
          onClick={() => dispatch2({ type: "right", payload: { o: "*" } })}
        >
          right
        </button>
      </div>

      <ReducerHook1 initialCount={100}></ReducerHook1>
    </div>
  );
}

export default ReducerHook;
