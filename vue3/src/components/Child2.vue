<template>
  <div>
    <!-- <div class="value" v-bind="$attrs">{{ name1 }}</div> -->
    <button @click="changeName1">改变name1值</button>
    <button @click="changeName2">改变name2值</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    name1: String,
    name2: String,
  },
  // v-model类似vue2 里面的.sync修饰符
  setup(props, context) {
    // console.log(props);

    // // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs);

    // // 插槽 (非响应式对象，等同于 $slots)
    // console.log(context.slots);

    // // 触发事件 (方法，等同于 $emit)
    // console.log(context.emit);

    // // 暴露公共 property (函数)
    // console.log(context.expose);
    const changeName1 = () => {
      context.emit("update:name1", "demi1");
    };
    const changeName2 = () => {
      context.emit("update:name2", "demi2");
    };
    return {
      changeName1,
      changeName2,
    };
  },
});
</script>
<style scoped lang="scss">
.title {
  color: red;
}
</style>
