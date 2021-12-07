<template>
  <div>
    <div>{{ $route.params.id }}</div>
    <router-link to="/route/59">改变id</router-link>
  </div>
</template>
<script>
import router from "@/router";
export default {
  mounted() {
    console.log(router.currentRoute);
    console.log(this.$route);
    console.log(router.getRoutes());
  },
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
};
</script>
