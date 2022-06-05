import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, add1 } from "../store/slices/counter1";
import { incremented, decremented, add } from "../store/slices/counter2";
import {
  nameIncrement,
  nameDecrement,
  ageIncremented,
  ageDecremented,
  userThunk,
} from "../store/slices/userSlice";
import FuncStore from "../components/FuncStore";

export class Store extends Component {
  render() {
    return (
      <div>
        <div>counter1: {this.props.counter1}</div>
        <div>counter2: {this.props.counter2}</div>
        <div>
          <button onClick={this.props.handleIncrement}>handleIncrement</button>
          <button onClick={this.props.handleDecrement}>handleDecrement</button>
          <button onClick={this.props.handleAdd1}>handleAdd1</button>
        </div>
        <div>
          <button onClick={this.props.handleIncremented}>
            handleIncremented
          </button>
          <button onClick={this.props.handleDecremented}>
            handleDecremented
          </button>
          <button onClick={this.props.handleAdd}>handleAdd</button>
        </div>

        <div>
          <div>userName: {this.props.userName}</div>
          <div>userAge: {this.props.userAge}</div>
        </div>
        <div>
          <button onClick={this.props.handleUserName}>handleUserName</button>
          <button onClick={this.props.handleUserAge}>handleUserAge</button>
        </div>

        <div>
          <button onClick={this.props.handleUserThunk}>handleUserThunk</button>
        </div>

        <FuncStore></FuncStore>
      </div>
    );
  }
}

const mapStateToProps = (state, preProps) => {
  // console.log(state);
  // 没使用模块直接取，使用了模块加模块名
  return {
    counter1: state.counter1.value,
    counter2: state.counter2.value,
    userName: state.user.name,
    userAge: state.user.age,
  };
};

const mapDispatchToProps = (dispatch, preProps) => {
  return {
    handleIncrement() {
      dispatch(increment());
    },
    handleDecrement() {
      dispatch(decrement());
    },
    handleAdd1() {
      dispatch(add1(10));
    },

    handleIncremented() {
      dispatch(incremented());
    },
    handleDecremented() {
      dispatch(decremented());
    },
    handleAdd() {
      dispatch(add(10));
    },

    handleUserName() {
      dispatch(nameIncrement());
    },
    handleUserAge() {
      dispatch(ageIncremented(10));
    },

    // thunk
    async handleUserThunk() {
      const res = await dispatch(userThunk(1));
      console.log(res);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);
