<template>
  <div>
    <div>{{ title2 }}</div>
    <div>{{ title1 }}</div>
    <button v-on:click="click1">修改子元素数据</button>

    <div>provide inject传递过来的数据： {{ name }}</div>
    <div>provide inject传递过来的方法<button @click="say">say</button></div>
  </div>
</template>
<script>
export default {
  name: "Child1",
  props: {
    title2: String,
  },
  inject: ["name", "say"],
  data() {
    return {
      title1: "Child1",
    };
  },
  beforeCreate() {
    console.log("child1 beforeCreate");
  },
  created() {
    console.log("child1 created");
    // throw new Error("Child1 自定义错误");
  },
  beforeMount() {
    console.log("child1 beforeMount");
  },
  mounted() {
    console.log("child1 mounted");
  },
  beforeUpdate() {
    console.log("child1 beforeUpdate");
  },
  updated() {
    console.log("child1 updated");
  },
  beforeDestroy() {
    console.log("child1 beforeDestroy");
  },
  destroyed() {
    console.log("child1 destroyed");
  },
  methods: {
    click1() {
      this.title1 = "子元素数据被修改";
      // this.$emit("changeChild", this.title1);
    },
    childSay() {
      console.log("child say");
    },
  },
};
</script>
