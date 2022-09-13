<template>
  <div>
    <div>{{ message }}</div>
    <!-- <div>{{ num }}</div>
    <div><button @click="say">say</button></div>
    <div><button @click="changeMessage">changeMessage</button></div> -->
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
    },
    changeMessage() {
      this._data.message = "demi";
    },
  },
};
</script>
