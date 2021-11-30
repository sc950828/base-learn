<template>
  <div></div>
</template>
<script>
import router from "@/router";
export default {
  mounted() {
    console.log(router.currentRoute);
    console.log(this.$route);
    console.log(router.getRoutes());
  },
};
</script>
