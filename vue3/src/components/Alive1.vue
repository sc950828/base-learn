<template>
  <div class="">
    <div>alive1: <input type="text" /></div>
    <!-- 父组件缓存了，子组件也会被缓存 -->
    <!-- <div>textarea:<Alive1_1></Alive1_1></div> -->

    <!-- 父组件缓存，设置子组件不缓存，子组件并不会不缓存 -->
    <keep-alive include="a">
      <div>textarea:<Alive1_1></Alive1_1></div>
    </keep-alive>

    <!-- 父组件不缓存 子组件也不会被缓存 -->
    <!-- <keep-alive include="alive1_1">
      <div>textarea:<Alive1_1></Alive1_1></div>
    </keep-alive> -->
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onActivated,
  onDeactivated,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Alive1_1 from "@/components/Alive1_1";

export default defineComponent({
  name: "alive1",
  mixins: [],
  components: { Alive1_1 },
  props: {},
  emits: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    onActivated(() => {
      console.log("Alive1 onActivated");
    });

    onDeactivated(() => {
      console.log("Alive1 onDeactivated");
    });

    return {};
  },
});
</script>

<style scoped lang=""></style>
