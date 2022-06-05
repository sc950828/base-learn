<template>
  <div class="">
    <div>x: {{ point.x }} y: {{ point.y }}</div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import usePoint from "../hooks/usePoint";

export default defineComponent({
  name: "",
  mixins: [],
  components: {},
  props: {},
  emits: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const point = usePoint();

    return { point };
  },
});
</script>

<style scoped lang=""></style>
