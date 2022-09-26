<template>
  <div>
    <div class="div1">div1</div>
    <div class="div2">div2</div>

    <!-- 数据变化就会触发update -->
    <!-- <input type="text" v-model="value" /> -->
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
      value: "randy",
    };
  },
  computed: {},
  watch: {},
  created() {
    console.log("created2");
  },
  updated() {
    console.log("updated2");
  },
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.div1 {
  color: red;
}

.div2 {
  color: green;
}
</style>
