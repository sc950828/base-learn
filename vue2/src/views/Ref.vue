<template>
  <div>
    <span ref="sigleRef">ref span</span>

    <div v-for="(list, index) of lists" :key="index" ref="forRef">
      <div>{{ index }}：{{ list }}</div>
    </div>

    <RefChild ref="childRef" />
  </div>
</template>
<script>
import RefChild from "@/components/RefChild";
export default {
  components: {
    RefChild,
  },
  data() {
    return {
      lists: [1, 2, 3],
    };
  },
  mounted() {
    console.log(this.$refs.sigleRef); // <span>ref span</span>
    console.log(this.$refs.forRef); // [div, div, div]
    console.log(this.$refs.childRef); // 输出子组件
    // 直接可以使用子组件的方法和属性
    console.log(this.$refs.childRef.title); // ref 子组件
    this.$refs.childRef.say(); // hi：ref 子组件

    // 类似子组件自己调用
    console.log(this.$refs.childRef.$data); // {title: "ref 子组件"}
    console.log(this.$refs.childRef.$props); // 获取传递的属性
    console.log(this.$refs.childRef.$parent); // 获取父组件
    console.log(this.$refs.childRef.$root); // 获取根组件
  },
};
</script>
