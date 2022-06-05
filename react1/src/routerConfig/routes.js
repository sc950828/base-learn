import Parent from "./Parent";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Login from "./Login";

const routes = [
  {
    component: Parent,
    path: "/parent",
    auth: false,
    meta: { title: "Parent" },
    routes: [
      {
        path: "/parent/child1",
        component: Child1,
        auth: false,
        meta: { title: "Child1" },
      },
      {
        path: "/parent/child2",
        component: Child2,
        auth: true,
        meta: { title: "Child2" },
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    auth: false,
    meta: { title: "Login" },
  },
];

export default routes;
