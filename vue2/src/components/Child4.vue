<template>
  <div>
    <input type="text" :value="customValue" @input="handleInput" />
    <button @click="updateSyncTestValue">修改syncTest的值</button>
  </div>
</template>
<script>
export default {
  // 定义传过来的值名字叫是value 修改值的事件是change事件
  model: {
    prop: "customValue",
    event: "customInput",
  },
  props: {
    customValue: String,
    syncTest: String,
  },
  methods: {
    handleInput(e) {
      this.$emit("customInput", e.target.value);
    },
    updateSyncTestValue() {
      this.$emit("update:syncTest", "new syncTest value");
    },
  },
};
</script>
