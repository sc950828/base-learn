<template>
  <div class="">
    孙
    <input type="text" /><button @click="destory">销毁</button>
  </div>
</template>

<script>
export default {
  name: "A1-1",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    destory() {
      this.$destroy();
    },
  },
  activated() {
    console.log("a1-1 activated");
  },
  deactivated() {
    console.log("a1-1 deactivated");
  },
};
</script>

<style scoped lang=""></style>
