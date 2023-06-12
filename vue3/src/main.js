import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

const app = createApp(App);

app.use(mavonEditor);

// app.config.compilerOptions.isCustomElement = (tag) => tag === "basic-button";

app.use(store).use(router).mount("#app");
