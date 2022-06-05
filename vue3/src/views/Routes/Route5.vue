<template>
  <div>route5</div>
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
    console.log("route: ", route);
    // 原信息只会在meta里面
    console.log(route.meta);
    // console.log(route.meta2);

    return {};
  },
});
</script>
