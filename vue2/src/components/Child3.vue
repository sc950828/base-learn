<template>
  <div>
    <div>{{ fullName }}</div>
    <div>{{ name }} {{ age }}</div>
    <!-- onClick事件控制在此处 -->
    <div v-on="this.$listeners">$listeners事件</div>
  </div>
</template>
<script>
export default {
  // inheritAttrs false 不接受没有在props中定义的属性
  // inheritAttrs: false,
  props: {
    fullName: String,
    name: String,
    age: Number,
  },
  created() {
    // 获取没在props中定义的但是传递过来的属性
    console.log(this.$attrs);
    console.log(this.$listeners);
    console.log(this.$root);
    console.log(this.$parent);
    console.log("子组件通过this.parent访问父组件属性", this.$parent.obj1);
    // 调用父组件方法
    this.$parent.say();
    // 通过provide和inject获取父元素传递的属性或方法
    this.say();
  },
  methods: {},
  inject: ["say"],
};
</script>
