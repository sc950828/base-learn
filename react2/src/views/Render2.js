import React, { Component } from "react";

import Mouse3 from "../components/Mouse3";
import Mouse4 from "../components/Mouse4";

import CatImg from "../components/CatImg";
import CatImg2 from "../components/CatImg2";

export class Render2 extends Component {
  // 通过自定义属性名 或 children传递

  customRen = (state) => {
    return <CatImg2 mouse={state}></CatImg2>;
  };

  render() {
    return (
      <div>
        {/* 就是名字不一定是render，可以随便取，只要子组件能获取到该属性即可 */}

        {/* 想渲染啥就渲染啥，更好，没写死 */}
        {/* <Mouse3
          customRender={(state) => <CatImg mouse={state}></CatImg>}
        ></Mouse3> */}

        {/* <Mouse3
          customRender={(state) => <CatImg2 mouse={state}></CatImg2>}
        ></Mouse3> */}

        {/* 我们还可以通过children传递， 不一定说必须是属性 */}
        {/* <Mouse4>{(state1) => <CatImg mouse={state1}></CatImg>}</Mouse4> */}

        {/* 这种更好，因为函数不再内联，是固定的，利于性能优化 */}
        <Mouse4>{this.customRen}</Mouse4>
      </div>
    );
  }
}

export default Render2;
