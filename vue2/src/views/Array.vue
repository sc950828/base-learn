<template>
  <div class="">
    <div v-for="(item, index) of arr1" :key="index">
      {{ item.name }}
    </div>

    <button @click="change1">通过下标修改</button>
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
  },
};
</script>

<style scoped lang=""></style>
