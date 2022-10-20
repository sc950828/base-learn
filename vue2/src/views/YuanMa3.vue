<template>
  <div>
    <div ref="test">{{ test }}</div>
    <button @click="handleClick">handleClick</button>
  </div>
</template>

<script>
// import Vue from "vue";
export default {
  data() {
    return {
      test: "start",
    };
  },
  methods: {
    handleClick() {
      // Vue.config.async = false;
      // this._watcher.sync = true;
      this.$nextTick(() => {
        console.log("nextTick", this.$refs.test.innerText);
      });
      this.test = "end";
      // console.log(this);
      console.log(this.$refs.test.innerText);
      // this.$nextTick(() => {
      //   console.log("nextTick", this.$refs.test.innerText);
      // });
    },
  },
};
</script>

<style scoped lang=""></style>
