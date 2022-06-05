import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Life from "./views/Life";
import Router from "./views/Router";
import Store from "./views/Store";
import Async from "./views/Async";

function App() {
  return (
    <div>
      <div className="nav">
        <Link to="/home">Home</Link>
        <Link to="/life">Life</Link>
        <Link to="/router">Router</Link>
        <Link to="/store">Store</Link>
        <Link to="/async">Async</Link>
      </div>

      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/life" component={Life}></Route>
        <Route path="/router" component={Router}></Route>
        <Route path="/store" component={Store}></Route>
        <Route path="/async" component={Async}></Route>
      </Switch>
    </div>
  );
}

export default App;
