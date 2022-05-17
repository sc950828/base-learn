<template>
  <div>
    <h2>life child</h2>
    <div>{{ name }}</div>
    <button @click="changeName">changeName</button>
    <div>{{ name1 }}</div>
    <div>provide inject传递过来的数据：{{ fName }}</div>
    <div>provide inject 支持默认值：{{ fAge }}</div>
    <div>provide inject传递过来的方法<button @click="say">say</button></div>
  </div>
</template>
<script>
import {
  defineComponent,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  ref,
  inject,
} from "vue";
export default defineComponent({
  props: {
    name1: String,
  },
  setup(props, { emit, expose }) {
    const name = ref("child randy");
    const changeName = () => {
      name.value = "child demi";
      emit("changeChildName", name.value);
    };

    const fName = inject("fName", "haha");
    const fAge = inject("fAge", "27");
    const say = inject("say");

    console.log("child setup");

    onBeforeMount(() => {
      console.log("child onBeforeMount");
    });
    onMounted(() => {
      console.log("child onMounted");
    });
    onBeforeUpdate(() => {
      console.log("child onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("child onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("child onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("child onUnmounted");
    });
    onErrorCaptured(() => {
      console.log("child onErrorCaptured");
    });
    onRenderTracked(({ key, target, type }) => {
      console.log("child onRenderTracked", { key, target, type });
    });
    onRenderTriggered(({ key, target, type }) => {
      console.log("child onRenderTriggered", { key, target, type });
    });

    const childSay = () => {
      console.log("childSay");
    };

    const sex = "male";

    expose({
      childSay,
      sex,
    });

    return {
      name,
      changeName,
      fName,
      fAge,
      say,
    };
  },
  // vue2这两个生命周期函数还能用
  beforeCreate() {
    console.log("child beforeCreate");
  },
  created() {
    console.log("child created");
  },
});
</script>
