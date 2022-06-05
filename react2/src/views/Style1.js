import React, { Component } from "react";
import "../style/style.css";
import classNames from "classnames";
import styled from "styled-components";
import style2 from "../style/style2.module.css";
import "../style/style3.less";
import "../style/style4.scss";
import style3 from "../style/style5.module.scss";

// 这里面的样式跟css一样，不用小驼峰
const Title = styled.h3`
  text-align: left;
  color: palevioletred;
`;

function StyleChild() {
  return <div>我是子组件</div>;
}

export class Style1 extends Component {
  constructor() {
    super();
    this.state = {
      styleObj: { fontSize: "18px", fontWeight: "bold" },
      classStr: "str1",
    };
  }

  render() {
    return (
      <div>
        {/* style必须是一个对象 */}
        {/* style 都改成了小驼峰 */}
        <div style={{ color: "red", fontSize: "18px" }}>内联静态style</div>

        <div style={this.state.styleObj}>内联动态style</div>

        <div className="class1">静态class</div>
        {/* 子组件不支持 */}
        <StyleChild className="class2"></StyleChild>

        {/* 固定多个类是支持的 */}
        <div className={this.state.classStr + " str2"}>动态class</div>

        {/* 动态多个class需要classnames */}
        {/* https://github.com/JedWatson/classnames */}
        <div className={classNames("c1 c2")}>classnames使用 </div>
        <div className={classNames({ c1: true, c2: false })}>
          classnames使用2
        </div>
        <div className={classNames({ c1: true }, { c3: true })}>
          classnames使用3
        </div>

        {/* 还可以使用styled-components */}
        {/* https://github.com/styled-components/styled-components */}
        <Title>styled-components</Title>

        {/* 在create-app中可以使用.module结尾的css文件，以模块使用 */}
        <div className={style2.name}>哈哈</div>

        {/* less */}
        {/* create-react-app没有内置less的配置，直接安装less不能使用 */}
        <div className="name2">使用less</div>

        {/* scss create-react-app内置了scss的配置 只要安装node-sass就能直接使用啦*/}
        <div className="name3">使用scss</div>

        {/* 模块化scss */}
        <div className={style3.name4}>使用模块化scss</div>
      </div>
    );
  }
}

export default Style1;
