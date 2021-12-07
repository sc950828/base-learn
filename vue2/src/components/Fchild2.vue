<template>
  <div>
    <input type="text" :value="value" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "demi",
    };
  },
  activated() {
    console.log("fchild2 activated");
  },
  deactivated() {
    console.log("fchild2 deactivated");
  },
  beforeDestroy() {
    console.log("fchild2 beforeDestroy");
  },
  destroyed() {
    console.log("fchild2 destroyed");
  },
};
</script>
