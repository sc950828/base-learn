<template>
  <div class="">
    <h1>Home</h1>
    <!-- <button @click="goPage('/about')">goAbout</button> -->
    <button @click="goPage('/userlist')">goUserList</button>
    <!-- <button @click="goPage('/parent')">goParent</button> -->
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "",
  components: {},
  props: {},
  emits: {},
  setup() {
    const router = useRouter();
    const route = useRoute();

    const goPage = (path) => {
      router.push(path);
    };

    return { goPage };
  },
});
</script>

<style scoped lang="scss"></style>
