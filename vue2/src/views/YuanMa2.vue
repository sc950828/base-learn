<template>
  <div class="">
    <div>info.name: {{ info.name }}</div>
    <div>info.age: {{ info.age }}</div>
    <div>
      <button @click="setAge">setAge</button>
      <button @click="delName">delName</button>
    </div>
    <!-- array -->
    <div>arr[0]: {{ arr[0] }}</div>
    <div>arr[1][address]: {{ arr[1]["address"] }}</div>
    <div>arr[1][city]: {{ arr[1]["city"] }}</div>
    <div>
      <button @click="setArr0">setArr0</button>
      <button @click="setArrAddress">setArrAddress</button>
      <button @click="setArrCity">setArrCity</button>
    </div>
    <!-- map -->
    <div v-for="[key, value] of map" :key="key">{{ key }}: {{ value }}</div>
    <button @click="say">say</button>
  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  components: {},
  props: {},
  data() {
    // 递归处理每个对象都会有一个 Observer 对象，会有个__ob__属性指向自身
    // 如果是数组，则会为数组里面的元素再创建Observer 对象
    // 根对象的vmCount是1
    return {
      message: "响应式",
      info: { name: "randy" },
      arr: [1, { address: "汨罗" }],
      map: new Map([
        ["name", "randy"],
        ["age", 27],
      ]),
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    console.log(this._data);
    console.log(this.info);
    console.log(this.arr);
  },
  methods: {
    setAge() {
      // this.info.age = 27;

      // 这种可以
      // this.$set(this.info, "age", 27);

      // 重新赋值也可以
      this.info = { name: "randy", age: 27 };
    },
    delName() {
      // 这种方式不会响应式
      // delete this.info.name;
      // 这种可以
      // this.$delete(this.info, "name");
      // 重新赋值也可以
      this.info = { name: "randy", age: 28 };
    },
    setArr0() {
      // 基本数据类型不能通过下标修改
      this.arr[0] = 2;
    },
    setArrAddress() {
      // 直接赋值是不可以的
      // this.arr[1] = { address: "黄市" };
      // 数组里面的数据进行了响应式，所以如果是对象改变是可以响应式的。
      // this.arr[1]["address"] = "黄市";
      // 还有两种方式设置
      // this.$set(this.arr[1], "address", "黄市");
      // this.$set(this.arr, 1, { address: "黄市" });
      // 重新赋值也可以
      this.arr = [1, { address: "黄市" }];
    },
    setArrCity() {
      // 这样是不可以的
      // this.arr[1]["city"] = "岳阳";
      // 两种方式设置
      // this.$set(this.arr[1], "city", "岳阳");
      // this.$set(this.arr, 1, { address: "汨罗", city: "岳阳" });
      // 重新赋值也可以
      this.arr = [1, { address: "汨罗", city: "岳阳" }];
    },
    say() {
      // 记住 map、set的响应式也处理不了，不支持
      // map类似对象，同名属性会替换
      this.map.set("name", "demi");
      console.log(this.map);
    },
  },
};
</script>

<style scoped lang=""></style>
