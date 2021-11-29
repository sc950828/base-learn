export default {
  data() {
    return {
      name: "mixin randy",
    };
  },
  methods: {
    say() {
      console.log("mixin say");
    },
  },
  // 生命周期方法会先调用
  created() {
    console.log("mixin created");
    // 会调用上级组件的say方法
    this.say();
  },
};
