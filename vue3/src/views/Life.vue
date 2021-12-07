<template>
  <div></div>
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
} from "vue";
export default defineComponent({
  setup() {
    console.log("setup");
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });
    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });
    onRenderTracked(() => {
      console.log("onRenderTracked");
    });
    onRenderTriggered(() => {
      console.log("onRenderTriggered");
    });
  },
  // vue2这两个生命周期函数还能用
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
});
</script>
