<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">基础</router-link> |
      <router-link to="/about">父子组件传值 事件</router-link> |
      <router-link to="/life">生命周期</router-link> |
      <router-link to="/event">事件</router-link> |
      <router-link to="/mixins">Mixins</router-link> |
      <router-link to="/filter">Filter</router-link> |
      <router-link to="/alive">Alive</router-link> |
      <router-link to="/jsxtest">JsxTest</router-link> |
      <router-link to="/slot">Slot</router-link> |
      <router-link to="/storetest">Store</router-link> |
      <router-link to="/father">Father</router-link> |
      <router-link to="/debounce">Debounce</router-link> |
      <router-link to="/download">下载</router-link> |
      <router-link to="/style">样式</router-link> |
      <router-link to="/ref">ref</router-link> |
      <router-link to="/router">路由</router-link> |
      <router-link to="/dynamic">动态组件</router-link> |
      <router-link to="/image">图片加载</router-link> |
      <router-link to="/yuanma1">源码分析1</router-link> |
      <router-link to="/yuanma2" tag="span">源码分析2</router-link> |
    </div>
    <router-view />

    <!-- <ExtendCom /> -->
  </div>
</template>
<script>
import Vue from "vue";
// import ExtendCom from "@/components/ExtendCom";

export default {
  components: {
    // ExtendCom,
  },
  props: {
    num: Number,
  },
  data() {
    return {};
  },

  mounted() {
    // 使用Vue.extend创建的组件能实例化
    const AlertComponent = Vue.extend({
      // template: "<div>{{ message }}</div>",
      render: (h) => h("div", { class: "alert1" }),
      data() {
        return {
          message: "randy1",
        };
      },
    });

    // new Vue 就是直接实例化
    const AlertComponent2 = new Vue({
      render: (h) => h("div", { class: "alert2" }, "randy2"),
      data() {
        return {
          message: "randy2",
        };
      },
    });
    // const instance1 = new AlertComponent().$mount("#app");
    // console.log(AlertComponent);
    // new AlertComponent({ el: "#app" });
    // console.log(instance1);

    // const instance2 = new AlertComponent2().$mount("#app");
    // console.log(instance2);
    // console.log(AlertComponent2);

    // vue静态属性
    // console.log("Vue.version", Vue.version);
    // console.log("Vue.config", Vue.config);
    // console.log("Vue.util", Vue.util);
    // console.log("Vue.options", Vue.options);

    // console.log("$isServer", Vue.$isServer);
    // console.log("$ssrContext", Vue.$ssrContext);
  },
};
</script>
