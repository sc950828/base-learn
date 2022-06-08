import React from "react";

class If extends React.Component {
  // 条件渲染支持 if && 三目运算  三种方式。
  constructor() {
    super();
    this.state = {
      switch1: true,
      switch2: true,
      switch3: true,
    };
  }

  switch1 = () => {
    this.setState({
      switch1: !this.state.switch1,
    });
  };

  switch2 = () => {
    this.setState({
      switch2: !this.state.switch2,
    });
  };

  switch3 = () => {
    this.setState({
      switch3: !this.state.switch3,
    });
  };

  render() {
    let text1;
    if (this.state.switch1) {
      text1 = <div>开启</div>;
    } else {
      text1 = <div>关闭</div>;
    }

    const styleObj1 = { display: this.state.switch1 ? "block" : "none" };
    const classStr = this.state.switch1 ? "show-item-class" : "hide-item-class";
    return (
      <div>
        <div>
          <div>{text1}</div>
          <button onClick={this.switch1}>if else 开/关</button>
        </div>

        <div>
          {this.state.switch2 && <div>开启</div>}
          {!this.state.switch2 && <div>关闭</div>}
          <button onClick={this.switch2}>&& 开/关</button>
        </div>

        <div>
          {this.state.switch3 ? <div>开启</div> : <div>关闭</div>}
          <button onClick={this.switch3}>三目运算符 开/关</button>
        </div>

        <div style={styleObj1}>style 开启</div>

        <div className={classStr}>className 开启</div>
      </div>
    );
  }
}

export default If;
