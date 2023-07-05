<template>
  <div>$route.params.name: {{ $route.params.name }}</div>
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

    // 动态参数的变化只会触发 onBeforeRouteUpdate 和 onUpdated 钩子函数

    onMounted(() => {
      console.log("route3 onMounted");
    });

    onUpdated(() => {
      console.log("route3 onUpdated");
    });

    onUnmounted(() => {
      console.log("route3 onUnmounted");
    });

    onBeforeRouteUpdate((to, from) => {
      console.log("route3 onBeforeRouteUpdate", to, from);
    });

    onBeforeRouteLeave((to, from) => {
      console.log("route3 onBeforeRouteLeave", to, from);
    });

    return {};
  },
  // 选项式api还是可以使用的
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteUpdate(to, from, next) {
    console.log("beforeRouteUpdate");
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    next();
  },
});
</script>

<style scoped lang=""></style>
