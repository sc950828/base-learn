<template>
  <div>route1</div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

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

    return {};
  },
});
</script>

<style scoped lang=""></style>
