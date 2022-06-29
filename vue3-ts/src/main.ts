import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { key } from "./store";
import { createPinia } from "pinia";

const app = createApp(App);

const pinia = createPinia();

app.use(router);
// vuex
app.use(store, key);
// pinia
app.use(pinia);
app.mount("#app");

// 没有选择 vue-class-component
