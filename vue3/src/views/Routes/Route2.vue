<template>
  <div>
    <div>$route.params.id: {{ $route.params.id }}</div>
    <div>vue3 props的值在模板中可以直接访问</div>
    <div>props里面的 id: {{ id }}</div>
    <div>props里面的name: {{ name }}</div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted,
  watch,
  watchEffect,
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
  props: ["id", "name"], // 一定要接收
  emits: {},
  setup(props) {
    console.log(props);
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    // 动态参数的变化只会触发 onBeforeRouteUpdate 和 onBeforeUpdate、onUpdated 钩子函数
    // 还可以使用watch 或 watchEffect 来监听

    onMounted(() => {
      console.log("route2 onMounted");
    });

    onUpdated(() => {
      // 拿到的最新参数
      console.log("route2 onUpdated", props.id, route.params.id);
    });

    onUnmounted(() => {
      console.log("route2 onUnmounted");
    });

    onBeforeRouteUpdate((to, from) => {
      console.log("route2 onBeforeRouteUpdate", to, from);
    });

    onBeforeRouteLeave((to, from) => {
      console.log("route2 onBeforeRouteLeave", to, from);
    });

    watch(
      () => route.params.id,
      (newVal, oldVal) => {
        console.log("watch route: ", newVal, oldVal);
      }
    );

    watch(
      () => props.id,
      (newVal, oldVal) => {
        console.log("watch props: ", newVal, oldVal);
      }
    );

    watchEffect(() => {
      console.log("watchEffect route: ", route.params.id);
    });

    watchEffect(() => {
      console.log("watchEffect props: ", props.id);
    });

    return {};
  },
});
</script>

<style scoped lang=""></style>
