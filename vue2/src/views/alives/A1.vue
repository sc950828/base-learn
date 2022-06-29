<template>
  <div class="">
    子1
    <router-link to="/alive/a1/a1-1">a-1-1</router-link>
    <input type="text" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "A1",
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
  methods: {},
  activated() {
    console.log("a1 activated");
  },
  deactivated() {
    console.log("a1 deactivated");
  },
};
</script>

<style scoped lang=""></style>
