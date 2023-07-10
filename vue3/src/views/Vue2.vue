<template>
  <div class="">
    <div v-for="(item, index) of arr1" :key="index">
      {{ item.name }}
    </div>

    <button @click="change1">通过下标修改</button>

    <ul>
      <li v-for="(item, index) of arr2" :key="index">{{ item.name }}</li>
    </ul>

    <button @click="changeobj">改变对象</button>
  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      arr1: [{ name: "randy" }, { name: "demi" }],
      arr2: [{ name: "randy" }],
      obj1: {},
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    change1() {
      // 是可以的
      this.arr1[0].name = "jack";

      // 直接修改是不可以的
      // this.arr1[0] = { name: "yyy" };

      // 直接添加是不可以的
      // this.arr1[2] = { name: "jack" };
    },
    changeobj() {
      this.obj1 = this.arr2[0];
      this.obj1.name = "demi";
      console.log(this.obj1);
      console.log(this.arr2);
    },
  },
};
</script>

<style scoped lang=""></style>
