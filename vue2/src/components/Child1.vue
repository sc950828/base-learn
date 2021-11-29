<template>
  <div>
    <div v-on:click="click1">{{ title1 }}</div>
    <div>{{ title2 }}</div>
  </div>
</template>
<script>
export default {
  name: "Child1",
  props: {
    title2: String,
  },
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
      this.title1 = "Child1啊";
    },
  },
};
</script>
