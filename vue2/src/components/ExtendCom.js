import Vue from "vue";

// 这种方式创建的组件也能用，但是会有警告
// option "el" can only be used during instance creation with the `new` keyword.
const ExtendCom = Vue.extend({
  // template: "<div>{{ message }}</div>",
  render: (h) => h("div", { class: "extend com" }, "Vue.extend 创建的组件"),
  data() {
    return {
      message: "Vue.extend 创建的组件",
    };
  },
  el: "#app",
});

export default ExtendCom;
