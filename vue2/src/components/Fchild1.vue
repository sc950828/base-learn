<template>
  <div>
    <input type="text" :value="value" />
    <router-link to="/father/fchild1/fchild1_1">fchild1_1</router-link>
    <keep-alive include="FChild1_1222">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "FChild1",
  data() {
    return {
      value: "randy",
    };
  },
  activated() {
    console.log("fchild1 activated");
  },
  deactivated() {
    console.log("fchild1 deactivated");
  },
  beforeDestroy() {
    console.log("fchild1 beforeDestroy");
  },
  destroyed() {
    console.log("fchild1 destroyed");
  },
};
</script>
