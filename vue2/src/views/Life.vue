<template>
  <div>
    <div>{{ title1 }}</div>
    <button @click="click1">单独修改父元素数据</button>
    <button @click="click2">修改传递给子元素的数据</button>
    <div>user.name {{ user.name }}</div>

    <Child1 :title2="title2" @changeChild="changeChild" ref="childRef" />
  </div>
</template>
<script>
import Child1 from "@/components/Child1";
export default {
  components: {
    Child1,
  },
  provide() {
    return {
      // 所以 provide 提供的基本数据类型不具备响应式的
      name: "父组件provide数据",
      title: this.title1,
      say: this.click1,
      // 但是引用数据类型是具备响应式
      user: this.user,
      say2: this.click5,
    };
  },
  data() {
    return {
      title1: "父元素数据",
      title2: "传递给子元素的数据",
      user: { name: "randy" },
    };
  },
  beforeCreate() {
    console.log("father beforeCreate", this.$data);
  },
  created() {
    console.log("father created", this.$data);
  },
  beforeMount() {
    console.log("father beforeMount");
  },
  mounted() {
    console.log("father mounted");

    // setTimeout(() => {
    //   // 迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
    //   this.$forceUpdate();
    // }, 2000);
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
      this.title1 = "单独改变了父元素数据";
    },
    click2() {
      this.title2 = "传递给子元素的数据变了！！！";
    },
    changeChild(value) {
      this.title1 = value;
    },
    click5() {
      this.user.name = "demi";
    },
  },
};
</script>
