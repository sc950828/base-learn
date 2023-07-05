<template>
  <div class="">
    <h1>Parent</h1>
    <button @click="goPage('/parent/child1')">goChild1</button>
    <button @click="goPage('/parent/child2')">goChild2</button>

    <router-view></router-view>
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
