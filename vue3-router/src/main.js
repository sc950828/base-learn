import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

// Vue.directive("action", {
//   inserted: function (el, binding, vnode) {
//     const actionName = binding.arg;
//     const permissions = vnode.context.$route.meta.permission;
//     if (
//       !permissions ||
//       permissions.length <= 0 ||
//       !permissions.includes(actionName)
//     ) {
//       (el.parentNode && el.parentNode.removeChild(el)) ||
//         (el.style.display = "none");
//     }
//   },
// });

app.directive("action", {
  created: function (el, binding, vnode) {
    const actionName = binding.arg;
    const btns = binding.value;
    if (btns && btns.includes(actionName)) {
      el.style.display = "inline-block"; // 这里看情况给样式，不是none就可以
    } else {
      el.style.display = "none";
    }
  },
  beforeUpdate(el, binding, vnode, prevVnode) {
    const actionName = binding.arg;
    const btns = binding.value;
    if (btns && btns.includes(actionName)) {
      el.style.display = "inline-block"; // 这里看情况给样式，不是none就可以
    } else {
      el.style.display = "none";
    }
  },
});

app.use(router).use(store).mount("#app");
