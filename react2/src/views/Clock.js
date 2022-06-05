import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.upTime();
    }, 1000);
  }

  upTime() {
    // this.setState({
    //   date: new Date(),
    // });

    // 能获取前一个state 和最新 props
    this.setState((preState, preProps) => {
      console.log(preState.date.toLocaleString(), preProps);
      return {
        date: new Date(),
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div>{this.state.date.toLocaleString()}</div>
      </div>
    );
  }
}

export default Clock;
