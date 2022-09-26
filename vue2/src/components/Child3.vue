<template>
  <div>
    <h3>child3</h3>
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
    // 获取没在props中定义的但是传递过来的属性，除了class和style
    console.log(this.$attrs);
    // 接收的是除去原生事件
    console.log(this.$listeners);

    console.log(this.$root);
    console.log(this.$parent);

    this.say();
  },
  methods: {},
  inject: ["say"],
};
</script>
