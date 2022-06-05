import React, { Component } from "react";
import Mouse1 from "../components/Mouse1";

import Mouse2 from "../components/Mouse2";

import CatImg from "../components/CatImg";
import CatImg2 from "../components/CatImg2";

export class Render1 extends Component {
  render() {
    return (
      <div>
        {/* 写死的，不好 */}
        {/* <Mouse1></Mouse1> */}

        {/* 想渲染啥就渲染啥，更好，没写死 */}
        {/* <Mouse2 render={(state) => <CatImg mouse={state}></CatImg>}></Mouse2> */}
        <Mouse2 render={(state) => <CatImg2 mouse={state}></CatImg2>}></Mouse2>
      </div>
    );
  }
}

export default Render1;
