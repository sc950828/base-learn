<template>
  <div>
    <button @click="goHome">goHome</button>
    <router-link :to="{ path: '/' }">home</router-link>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    console.log(route.params);
    console.log(route.query);
    console.log(route.path);
    console.log(route.fullPath);

    const goHome = () => {
      router.push("/");
    };
    return {
      goHome,
    };
  },
});
</script>
