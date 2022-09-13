import "./App.css";
import { Routes, Route, Link, Navigate, useRoutes } from "react-router-dom";
import Home from "./views/Home";
import Function1 from "./views/Function1";
import ClassState from "./views/ClassState";
import Com1 from "./views/Com";
import Clock from "./views/Clock";
import Event1 from "./views/Event1";
import If from "./views/If";
import For from "./views/For";
import Parent1 from "./views/Parent1";
import ContextTest from "./views/ContextTest";
import Error1 from "./views/Error1";
import RefTest from "./views/RefTest";
import RefTest2 from "./views/RefTest2";
import FragmentTest from "./views/FragmentTest";
import Jsx1 from "./views/Jsx1";
import Life1 from "./views/Life1";
import Life2 from "./views/Life2";
import Portal from "./views/Portal";
import Profiler1 from "./views/Profiler1";
import Render1 from "./views/Render1";
import Render2 from "./views/Render2";
import PropTypeTest from "./views/PropTypeTest";
import Style1 from "./views/Style1";
import StateHook from "./views/StateHook";
import EffectHook from "./views/EffectHook";
import LayoutEffectHook from "./views/LayoutEffectHook";
import ReducerHook from "./views/ReducerHook";
import MemoTest from "./views/MemoTest";
import MemoHook from "./views/MemoHook";
import CallbackHook from "./views/CallbackHook";
import CustomHook from "./views/CustomHook";
import Router from "./views/Router";
import Route1 from "./views/Routes/Route1";
import Route2 from "./views/Routes/Route2";
import Route3 from "./views/Routes/Route3";
import Route4 from "./views/Routes/Route4";
import Route5 from "./views/Routes/Route5";
import Route6 from "./views/Routes/Route6";
import Store from "./views/Store";
import Mobx from "./views/Mobx";

import routes from "./routerConfig/routes";

function App() {
  const elements = useRoutes(routes);

  return (
    <div>
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/function1">Function1</Link>
        <Link to="/classstate">ClassState</Link>
        <Link to="/com1">Com1</Link>
        <Link to="/clock">Clock</Link>
        <Link to="/event1">Event1</Link>
        <Link to="/if">If</Link>
        <Link to="/for">For</Link>
        <Link to="/parent1">Parent1</Link>
        <Link to="/contexttest">ContextTest</Link>
        <Link to="/error1">Error1</Link>
        <Link to="/reftest">RefTest</Link>
        <Link to="/reftest2">RefTest2</Link>
        <Link to="/fragmenttest">FragmentTest</Link>
        <Link to="/jsx1">Jsx1</Link>
        <Link to="/life1">Life1</Link>
        <Link to="/life2">Life2</Link>
        <Link to="/portal">Portal</Link>
        <Link to="/profiler1">Profiler1</Link>
        <Link to="/render1">Render1</Link>
        <Link to="/render2">Render2</Link>
        <Link to="/proptypetest">PropTypeTest</Link>
        <Link to="/style1">Style1</Link>
        <Link to="/statehook">StateHook</Link>
        <Link to="/effecthook">EffectHook</Link>
        <Link to="/layouteffecthook">LayoutEffectHook</Link>
        <Link to="/reducerhook">ReducerHook</Link>
        <Link to="/memotest">MemoTest</Link>
        <Link to="/memohook">MemoHook</Link>
        <Link to="/callbackhook">CallbackHook</Link>
        <Link to="/customhook">CustomHook</Link>
        <Link to="/router">Router</Link>
        <Link to="/store">Store</Link>
        <Link to="/mobx">Mobx</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/function1" element={<Function1 />}></Route>
        <Route path="/classstate" element={<ClassState />}></Route>
        <Route path="/com1" element={<Com1 />}></Route>
        <Route path="/Clock" element={<Clock />}></Route>
        <Route path="/event1" element={<Event1 />}></Route>
        <Route path="/if" element={<If />}></Route>
        <Route path="/for" element={<For />}></Route>
        <Route path="/parent1" element={<Parent1 />}></Route>
        <Route path="/contexttest" element={<ContextTest />}></Route>
        <Route path="/error1" element={<Error1 />}></Route>
        <Route path="/reftest" element={<RefTest />}></Route>
        <Route path="/reftest2" element={<RefTest2 />}></Route>
        <Route path="/fragmenttest" element={<FragmentTest />}></Route>
        <Route path="/jsx1" element={<Jsx1 />}></Route>
        <Route path="/life1" element={<Life1 />}></Route>
        <Route path="/life2" element={<Life2 />}></Route>
        <Route path="/portal" element={<Portal />}></Route>
        <Route path="/profiler1" element={<Profiler1 />}></Route>
        <Route path="/render1" element={<Render1 />}></Route>
        <Route path="/render2" element={<Render2 />}></Route>
        <Route path="/proptypetest" element={<PropTypeTest />}></Route>
        <Route path="/style1" element={<Style1 />}></Route>
        <Route path="/statehook" element={<StateHook />}></Route>
        <Route path="/effecthook" element={<EffectHook />}></Route>
        <Route path="/layouteffecthook" element={<LayoutEffectHook />}></Route>
        <Route path="/reducerhook" element={<ReducerHook />}></Route>
        <Route path="/memotest" element={<MemoTest />}></Route>
        <Route path="/memohook" element={<MemoHook />}></Route>
        <Route path="/callbackhook" element={<CallbackHook />}></Route>
        <Route path="/customhook" element={<CustomHook />}></Route>

        {/* <Route path="/router/*" element={<Router />}> */}
        <Route path="/router" element={<Router />}>
          {/* 全路径或相对路径都支持 */}
          {/* <Route path="/router/route1" element={<Route1 />}></Route> */}
          <Route path="route1" element={<Route1 />}></Route>
          <Route path="route2" element={<Route2 />}></Route>
          {/* vue 能带? 表示可选  react不行*/}
          <Route path="route3/:id" element={<Route3 />}></Route>
          <Route path="route4" element={<Route4 />}></Route>

          <Route
            path="route5"
            element={<Navigate to="/router/route1"></Navigate>}
          ></Route>
          {/* <Route
            path="route5"
            element={
              true ? <Navigate to="../route1"></Navigate> : <Route5></Route5>
            }
          ></Route> */}
          {/* <Route
            path="route5"
            element={
              false ? <Navigate to="../route1"></Navigate> : <Route5></Route5>
            }
          ></Route> */}

          {/* 动态参数 类组件 */}
          <Route path="route6/:name" element={<Route6 />}></Route>
        </Route>

        <Route path="/store" element={<Store />}></Route>
        <Route path="/mobx" element={<Mobx />}></Route>
      </Routes>

      {elements}
    </div>
  );
}

export default App;
