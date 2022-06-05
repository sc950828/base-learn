<template>
  <div>
    <div>$route.params.id: {{ $route.params.id }}</div>
    <div>vue2 props的值在模板中可以直接访问</div>
    <div>props里面的 id: {{ id }}</div>
    <div>props里面的name: {{ name }}</div>
  </div>
</template>

<script>
export default {
  props: ["id", "name"],
  mounted() {
    console.log("route2 mounted");
  },

  updated() {
    console.log("route2 updated");
  },

  destroyed() {
    // 还能访问到this
    console.log("route2 destroyed", this);
  },

  // 数据更新也只会触发 beforeRouteUpdate、beforeUpdate、updated、watch

  // vue2中都必须显示调用next方法
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },

  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },

  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  },

  watch: {
    $route(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
};
</script>
