<template>
  <div>
    <div>{{ message }}</div>
    <div>{{ num }}</div>
    <div><button @click="say">say</button></div>
    <div><button @click="changeMessage">changeMessage</button></div>

    <!-- <router-link to="/yuanma11">yuanma11</router-link> -->
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 123,
    },
  },
  data() {
    return {
      message: "randy",
    };
  },
  computed: {
    count() {
      return 666;
    },
  },
  // 对于不同路由，相同组件的跳转，并不会触发生命周期方法，可以使用watch监听。
  // 获取beforeRouterEnter 等路由钩子
  // 如果依然想重新渲染，怎么办呢？可以使用key，在router-view上添加key
  watch: {
    $route(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log(this);
  },
  // 实际上是做了一层代理，所以props data methods不能同名
  methods: {
    say() {
      console.log(this.message);
      console.log(this._data.message);
      console.log(this.$data.message);
      console.log(this.num);
      console.log(this._props.num);
      console.log(this.$props.num);

      // this.$options能获取到最原始的东西，比如初始化的data
      // 不管数据怎么改变我还是能获取到原始数据。
      console.log(this.$options.data());
    },
    changeMessage() {
      this._data.message = "demi";
    },
  },
};
</script>
