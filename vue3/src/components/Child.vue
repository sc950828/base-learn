<template>
  <div class="">child</div>
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

    return {};
  },
});
</script>
