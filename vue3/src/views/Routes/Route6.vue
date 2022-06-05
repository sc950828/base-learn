<template>
  <div style="height: 1000px">route6</div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted,
} from "vue";
import { useStore } from "vuex";
import {
  useRouter,
  useRoute,
  onBeforeRouteUpdate,
  onBeforeRouteLeave,
} from "vue-router";

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
