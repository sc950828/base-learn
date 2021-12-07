<template>
  <div>
    <div>{{ name }}</div>
    <button @click="changeName">change Name</button>
    <div>{{ name2 }}</div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  data() {
    return {
      name: "randy",
    };
  },
  // 跟踪虚拟 DOM 重新渲染时调用
  renderTracked({ key, target, type }) {
    console.log({ key, target, type });
  },
  // 当虚拟 DOM 重新渲染被触发时调用
  renderTriggered({ key, target, type }) {
    console.log({ key, target, type });
  },
  methods: {
    changeName() {
      this.name = "randy1";
    },
  },
  setup() {
    const name2 = ref("randy2");
    return {
      name2,
    };
  },
};
</script>
