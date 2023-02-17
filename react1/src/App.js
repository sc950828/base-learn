import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Life from "./views/Life";
import Router from "./views/Router";
import Store from "./views/Store";
import Async from "./views/Async";
import Debounce from "./views/Debounce";
import Throttle from "./views/Throttle";
import About from "./views/About";
import Test1 from "./views/Test1";
import Test2 from "./views/Test2";
import Test3 from "./views/Test3";
import Test4 from "./views/Test4";

function App() {
  return (
    <div>
      <div className="nav">
        <Link to="/home">Home</Link>
        <Link to="/life">Life</Link>
        <Link to="/router">Router</Link>
        <Link to="/store">Store</Link>
        <Link to="/async">Async</Link>
        <Link to="/debounce">防抖</Link>
        <Link to="/throttle">节流</Link>
        <Link to="/about">测试</Link>
        <Link to="/test1">练习1</Link>
        <Link to="/test2">练习2</Link>
        <Link to="/test3">练习3</Link>
        <Link to="/test4">练习4</Link>
      </div>

      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/life" component={Life}></Route>
        <Route path="/router" component={Router}></Route>
        <Route path="/store" component={Store}></Route>
        <Route path="/async" component={Async}></Route>
        <Route path="/debounce" component={Debounce}></Route>
        <Route path="/throttle" component={Throttle}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/test1" component={Test1}></Route>
        <Route path="/test2" component={Test2}></Route>
        <Route path="/test3" component={Test3}></Route>
        <Route path="/test4" component={Test4}></Route>
      </Switch>
    </div>
  );
}

export default App;
