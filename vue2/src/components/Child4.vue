<template>
  <div>
    <input type="text" :value="value1" @input="handleInput" />
    <button @click="updateSyncTestValue">修改syncTest的值</button>
  </div>
</template>
<script>
export default {
  // 定义传过来的值名字叫是value 修改值的事件是change事件
  model: {
    prop: "value1",
    event: "change",
  },
  props: {
    value1: String,
    syncTest: String,
  },
  methods: {
    handleInput(e) {
      this.$emit("change", e.target.value);
    },
    updateSyncTestValue() {
      this.$emit("update:syncTest", "new syncTest value");
    },
  },
};
</script>
