<template>
  <div>
    <div ref="ref1">hi 我是异步组件</div>
    <button @click="click1">click1</button>
  </div>
</template>
<script>
import { defineComponent, inject, ref } from "vue";
export default defineComponent({
  async setup() {
    const inject1 = inject("inject1");
    console.log(inject1.value);
    const ref1 = ref(null);

    const click1 = (e) => {
      console.log(e);
      console.log(ref1.value);
    };

    const sleep = (times) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, times);
      });
    };

    await sleep(2000);

    return {
      click1,
      ref1,
    };
  },
});
</script>
