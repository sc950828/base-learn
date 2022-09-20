<template>
  <div>
    <div>alive2： <input type="text" v-model="value1" /></div>
  </div>
</template>
<script>
export default {
  name: "Alive2",
  data() {
    return {
      value1: "alive2",
    };
  },
  activated() {
    console.log("alive2 activated");
  },
  deactivated() {
    console.log("alive2 deactivated");
  },
  beforeDestroy() {
    console.log("alive2 beforeDestroy");
  },
  destroyed() {
    console.log("alive2 destroyed");
  },
};
</script>
