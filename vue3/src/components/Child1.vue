<template>
  <div class="child1">
    <button @click="changeName">改变值</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: String,
    // name: String,
  },
  setup(props, context) {
    // console.log(props);
    // // Attribute (非响应式对象，等同于 $attrs)
    // console.log(context.attrs);

    // // 插槽 (非响应式对象，等同于 $slots)
    // console.log(context.slots);

    // // 触发事件 (方法，等同于 $emit)
    // console.log(context.emit);

    // // 暴露公共 property (函数)
    // console.log(context.expose);
    const changeName = () => {
      context.emit("update:modelValue", "demi");
      // context.emit("update:name", "demi");
    };
    return {
      changeName,
    };
  },
});
</script>
<style scoped lang="scss">
.child1 {
  // .value {
  //   color: blue;
  // }

  // 全局样式 相当于写在一个没有写scoped的style标签里面
  :global(.value) {
    color: blue;
  }
}
</style>
