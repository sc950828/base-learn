<template>
  <div class="">
    <button @click="changeCom1">alive1</button>
    <button @click="changeCom2">alive2</button>

    <!-- 不写include exclude 默认缓存下面所有组件 -->

    <!-- 组件一定要定义好name -->
    <!-- <keep-alive include="alive2"> -->
    <keep-alive include="alive1,alive2">
      <component :is="com"></component>
    </keep-alive>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  shallowRef,
  onActivated,
  onDeactivated,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import Alive1 from "@/components/Alive1";
import Alive2 from "@/components/Alive2";

export default defineComponent({
  name: "",
  mixins: [],
  components: {
    Alive1,
    Alive2,
  },
  props: {},
  emits: {},
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();

    const com = shallowRef(Alive1);

    const changeCom1 = () => {
      com.value = Alive1;
    };

    const changeCom2 = () => {
      com.value = Alive2;
    };

    onActivated(() => {
      console.log("Alive onActivated");
    });

    onDeactivated(() => {
      console.log("Alive onDeactivated");
    });

    return { com, changeCom1, changeCom2 };
  },
});
</script>

<style scoped lang=""></style>
