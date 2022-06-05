import React, { Component } from "react";
import { connect } from "react-redux";
import FuncStore from "../components/FuncStore";
import {
  userNameIncrementAction,
  userNameDecrementAction,
  userAgeIncrementAction,
  userAgeDecrementAction,
  userThunk,
} from "../store/actions/userActions";
import {
  counterIncrementAction,
  counterDecrementAction,
} from "../store/actions/counterActions";

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "store",
    };
  }
  render() {
    return (
      <div>
        <div>counter: {this.props.counter}</div>
        <div>name: {this.props.name}</div>
        <div>age: {this.props.age}</div>
        <div>user: {this.props.user.name + this.props.user.age}</div>
        <div>
          <button onClick={this.props.counterIncremented}>
            counterIncremented
          </button>
          <button onClick={this.props.userAgeIncremented}>
            userAgeIncremented
          </button>
        </div>

        <h3>redux thunk</h3>
        <div>
          <button onClick={this.props.handleserThunk}>userThunk</button>
        </div>

        <h3>函数组件</h3>
        <FuncStore></FuncStore>
      </div>
    );
  }
}

// 从store 取 state 放到组件的props里面
// 初次会运行
const mapStateToProps = (state, ownProps) => {
  // 这里的state是store里面的state而不是组件的state
  // ownProps也是组件的props，不会包括这里返回的props
  // console.log(state, ownProps);
  return {
    user: state.user,
    name: state.user.name,
    age: state.user.age,
    counter: state.counter.value,
  };
};

// 从store 取 dispatch 然后触发相应action，并把放到组件的props里面
const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    counterIncremented() {
      dispatch(counterIncrementAction());
    },
    // 传递参数
    userAgeIncremented() {
      dispatch(userAgeIncrementAction(10));
    },
    // 异步操作
    async handleserThunk() {
      const result = await dispatch(userThunk(10));
      console.log(result);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
