import Ref1 from "../components/Ref1";
import Ref2 from "../components/Ref2";
import Ref3 from "../components/Ref3";
import { useRef, useState } from "react";

const RefTest2 = () => {
  const ref1 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  const refItems = [];
  const ref2 = useRef();
  let ref3 = null;

  // 还可以用来缓存数据
  let [data, setData] = useState(0);

  let initData = {
    name: "randy",
    age: 26,
  };

  let refData = useRef(initData);

  console.log(initData); // { name: "randy", age: 26 }
  console.log(refData.current); // 不会被初始化 所以age一直累加

  const outputRefs = () => {
    // ref转发 获取的是具体dom元素
    console.log(ref1.current);
    // 获取的是组件
    console.log(ref2.current);
    console.log(ref3);
    // dom
    console.log(ref8.current); // <div>普通元素</div>
    // 循环
    console.log(ref9.current); // <div>2: 3</div>
    console.log(refItems); // [div, div, div]
  };

  // 触发重新渲染
  const changeData = () => {
    setData(data + 1);

    initData.age = initData.age + 1;
    refData.current.age = refData.current.age + 1;
  };

  const setItems = (el) => {
    if (el) {
      refItems.push(el);
    }
  };

  return (
    <div>
      {/* 这是ref转发，能获取到组件里面的dom元素 */}
      <Ref1 ref={ref1}></Ref1>
      {/* 这是获取组件 */}
      <Ref2 ref={ref2}></Ref2>
      {/* 这种方式也可以 */}
      <Ref3 ref={(el) => (ref3 = el)}></Ref3>

      <div ref={ref8}>普通元素</div>
      {[1, 2, 3].map((item, index) => (
        <div key={index} ref={ref9}>
          {index}: {item}
        </div>
      ))}
      {[1, 2, 3].map((item, index) => (
        <div key={index} ref={setItems}>
          {index}: {item}
        </div>
      ))}

      <button onClick={outputRefs}>输出refs</button>

      <div>{data}</div>
      <button onClick={changeData}>改变数据</button>
    </div>
  );
};

export default RefTest2;
