import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter
    // 会捕获 history.block 弹框
    // getUserConfirmation={(message, callback) => {
    //   console.log(message, callback);
    //   // true 跳转 false不跳转
    //   callback(true);
    // }}
    >
      <App />
    </BrowserRouter>
  </Provider>
);
