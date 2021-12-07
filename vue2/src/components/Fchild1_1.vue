<template>
  <div>
    <input type="text" :value="value" />
  </div>
</template>
<script>
export default {
  name: "FChild1_1",
  data() {
    return {
      value: "child1-1",
    };
  },
  activated() {
    console.log("child1-1 activated");
  },
  deactivated() {
    console.log("child1-1 deactivated");
  },
  beforeDestroy() {
    console.log("child1-1  beforeDestroy");
  },
  destroyed() {
    console.log("child1-1  destroyed");
  },
};
</script>
