<template>
  <div class="style-wrapper">
    <!-- 模块化测试 -->
    <div :class="customStyle.class1">module 样式</div>

    <!-- 穿透测试 -->
    <Style class="child"></Style>
    <!-- forceUpdate -->
    <button @click="test">forceUpdate</button>
  </div>
</template>

<script>
import Style from "@/components/Style";
export default {
  name: "",
  mixins: [],
  components: {
    Style,
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {
    console.log("created");
  },
  mounted() {},
  updated() {
    console.log("updated");
  },
  destroyed() {},
  methods: {
    test() {
      // 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
      // 触发组件的更新
      this.$forceUpdate();
    },
  },
};
</script>

<style module="customStyle">
.class1 {
  color: red;
}
</style>

<style lang="less" scoped>
// 如果子组件没有scoped，父组件是可以直接修改样式的
// 如果样式同时设置了，父组件会覆盖子组件

// 想要穿透，就必须给父类设置scoped
// 原理就是 把父的scoped值也放到子元素上去了

// /deep/ .div1 {
//   color: yellow;
// }

.child {
  font-size: 20px;
}
</style>
