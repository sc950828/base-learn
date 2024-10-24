<template>
  <div class="">404</div>
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

    console.log(route);

    return {};
  },
});
</script>

<style scoped lang="scss"></style>
