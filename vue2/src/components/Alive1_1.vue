<template>
  <div>
    <div>
      <input type="text" v-model="value1" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Alive1-1",
  data() {
    return {
      value1: "alive1-1",
    };
  },
  activated() {
    console.log("alive1-1 activated");
  },
  deactivated() {
    console.log("alive1-1 deactivated");
  },
  beforeDestroy() {
    console.log("alive1-1 beforeDestroy");
  },
  destroyed() {
    console.log("alive1-1 destroyed");
  },
};
</script>
