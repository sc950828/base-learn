import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getTodoByIdThunkAction,
  getTodoByIdPromiseAction,
  fetchTodoByIdAction,
  fetchTodoByIdAction2,
} from "../store/actions/todoActions";

export class Async extends Component {
  render() {
    return (
      <div>
        <h2>异步方案</h2>
        <h3>thunk</h3>
        <div>
          <ul>
            <li>todo.id: {this.props.todo?.id}</li>
            <li>todo.userId: {this.props.todo?.userId}</li>
            <li>todo.title: {this.props.todo?.title}</li>
          </ul>
        </div>

        <div>
          <button onClick={this.props.handleGetTodoThunk}>
            handleGetTodoThunk
          </button>
        </div>

        <h3>promise</h3>
        <div>
          <button onClick={this.props.handleGetTodoPromise}>
            handleGetTodoPromise
          </button>
        </div>

        <h3>saga</h3>
        <div>
          <button onClick={this.props.handleGetTodoSaga}>
            handleGetTodoSaga
          </button>
        </div>
        <div>
          <button onClick={this.props.handleGetTodoSaga2}>
            handleGetTodoSaga2
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo.item,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetTodoThunk() {
      dispatch(getTodoByIdThunkAction(1));
    },
    handleGetTodoPromise() {
      dispatch(getTodoByIdPromiseAction(2));
    },
    handleGetTodoSaga() {
      dispatch(fetchTodoByIdAction(3));
    },
    handleGetTodoSaga2() {
      dispatch(fetchTodoByIdAction2(5));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Async);
