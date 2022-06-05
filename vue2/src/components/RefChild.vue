<template>
  <div>{{ title }}</div>
</template>

<script>
export default {
  data() {
    return {
      title: "ref 子组件",
    };
  },
  methods: {
    say() {
      console.log("hi：" + this.title);
    },
  },
};
</script>
