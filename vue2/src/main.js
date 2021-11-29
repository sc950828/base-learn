import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Plugin1 from "@/plugins/Plugin1";
// Vue.use(Plugin1, { name: "自定义插件" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
