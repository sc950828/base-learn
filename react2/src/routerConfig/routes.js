import Parent from "./Parent";
import Child1 from "./Child1";
import Child2 from "./Child2";

const routes = [
  {
    element: <Parent></Parent>,
    path: "/parent",
    children: [
      {
        path: "child1",
        element: <Child1></Child1>,
      },
      {
        path: "child2",
        element: <Child2></Child2>,
      },
    ],
  },
];

export default routes;
