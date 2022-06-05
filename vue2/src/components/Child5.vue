<template>
  <div>
    <div>{{ msg }}</div>
    <button @click="handleClick">change</button>
  </div>
</template>
<script>
export default {
  props: ["msg"],
  methods: {
    handleClick() {
      const newMsg = "我被修改了";
      this.$emit("changeMsg", newMsg);
    },
  },
};
</script>
