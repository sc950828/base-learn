<template>
  <div>
    <div>
      alive1：<input type="text" v-model="value1" />
      <!-- 默认 子组件也会被缓存 并且 activated deactivated 会早于父组件触发-->
      <!-- <child /> -->

      <!-- 父组件缓存 子组件不缓存 这样也会无效 子组件还是会被缓存 -->
      <!-- <keep-alive include="wu">
        <child />
      </keep-alive> -->

      <!-- 父组件不缓存 单独缓存子组件，子组件虽然会触发 activated deactivated 但是也会触发 beforeDestroy destroyed 所以缓存无效-->
      <keep-alive include="Alive1-1">
        <child />
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Alive1_1 from "@/components/Alive1_1";
export default {
  name: "Alive1",
  components: {
    child: Alive1_1,
  },
  data() {
    return {
      value1: "alive1",
    };
  },
  activated() {
    console.log("alive1 activated");
  },
  deactivated() {
    console.log("alive1 deactivated");
  },
  beforeDestroy() {
    console.log("alive1 beforeDestroy");
  },
  destroyed() {
    console.log("alive1 destroyed");
  },
};
</script>
