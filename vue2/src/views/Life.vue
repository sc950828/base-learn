<template>
  <div>
    <h3>生命周期</h3>
    <div @click="click1">{{ title1 }}</div>
    <div @click="click2">修改传递给子元素的数据</div>
    <Child1 :title2="title2" />
  </div>
</template>
<script>
import Child1 from "@/components/Child1";
export default {
  components: {
    Child1,
  },
  data() {
    return {
      title1: "父元素",
      title2: "传递给子元素的数据",
    };
  },
  beforeCreate() {
    console.log("father beforeCreate");
  },
  created() {
    console.log("father created");
  },
  beforeMount() {
    console.log("father beforeMount");
  },
  mounted() {
    console.log("father mounted");

    setTimeout(() => {
      // 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
      this.$forceUpdate();
    }, 2000);
  },
  beforeUpdate() {
    console.log("father beforeUpdate");
  },
  updated() {
    console.log("father updated");
  },
  beforeDestroy() {
    console.log("father beforeDestroy");
  },
  destroyed() {
    console.log("father destroyed");
  },
  errorCaptured(err, vm, info) {
    // 在捕获一个来自后代组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。
    // 此钩子可以返回 false 以阻止该错误继续向上传播。
    console.log("father errorCaptured", err, vm, info);
  },
  methods: {
    click1() {
      this.title1 = "单独改变了title1";
    },
    click2() {
      this.title2 = "传递给子元素的数据变了！！！";
    },
  },
};
</script>
