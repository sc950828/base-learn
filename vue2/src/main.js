import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Plugin1 from "@/plugins/Plugin1";
// Vue.use(Plugin1, { name: "自定义插件" });
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["basic-button"];

// 监听基座下发的数据变化
window.microApp?.addDataListener((data) => {
  console.log(data);
  // 当基座下发跳转指令时进行跳转
  if (data.path) {
    router.push(data.path);
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  data: {
    name: "根组件",
  },
}).$mount("#app");
