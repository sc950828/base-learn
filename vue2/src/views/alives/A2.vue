<template>
  <div class="">
    子2
    <router-link to="/alive/a1/a1-1">a-1-1</router-link>
    <input type="text" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "A2",
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
    console.log("a2 activated");
  },
  deactivated() {
    console.log("a2 deactivated");
  },
};
</script>

<style scoped lang=""></style>
