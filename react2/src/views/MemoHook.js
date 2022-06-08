import { useMemo, useState } from "react";
import MemoHook1 from "../components/MemoHook1";

function MemoHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("randy");

  // 没有依赖的时候 和useEffect一样，初始和更新都会运行
  // 没什么意义
  // const useMemo1 = useMemo(() => {
  // console.log("useMemo1");
  // });

  // 这种也没什么意义，只在初始化运行一次
  // const useMemo2 = useMemo(() => {
  //   console.log("useMemo2");
  // }, []);

  // 1. 用来缓存值，当依赖变化值才变，类似vue里面的computed
  const useMemo3 = useMemo(() => {
    // console.log("useMemo3", count);
    // 返回值等于useMemo的返回值
    return count;
  }, [count]);

  // 2. 类似memo 缓存组件，不过需要自定定义依赖，没memo那么智能
  // 当count变，组件才重新渲染
  const MemoMemoHook1 = useMemo(
    () => <MemoHook1 count={count}></MemoHook1>,
    [count]
  );

  // 3. 优化列表渲染
  const [lists, setLists] = useState(["a", "b", "c"]);

  return (
    <div>
      <div>count{count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>add count</button>
      </div>
      <div>useMemo3,我是依赖count{useMemo3}</div>

      {/* 依赖 count，按理来说只有count改变才会重新渲染，但是name改变也会重新渲染 */}
      {/* <MemoHook1 count={count}></MemoHook1> */}

      {/* 前面说到使用memo可以解决，这里使用 useMemo 也可以解决 */}
      {MemoMemoHook1}

      {/* 同样适用于列表渲染 */}
      {/* 依赖 lists，按理来说只有lists改变才会重新渲染，但是name改变也会重新渲染 */}
      {/* {lists.map((item, index) => {
        console.log("map render");
        return <div key={index}>{item}</div>;
      })} */}

      {/* 使用useMemo优化，当lists改变才重新渲染 */}
      {useMemo(() => {
        return lists.map((item, index) => {
          console.log("map render");
          return <div key={index}>{item}</div>;
        });
      }, [lists])}
      <div>
        <button onClick={() => setLists(["d", "e", "f"])}>change lists</button>
      </div>

      <div>{name}</div>
      <div>
        <button onClick={() => setName(name + "!")}>
          change name 没什么依赖我
        </button>
      </div>
    </div>
  );
}

export default MemoHook;
