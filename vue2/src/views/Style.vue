<template>
  <div>
    <div :class="customStyle.class1">module 样式</div>
  </div>
</template>

<script>
export default {
  name: "",
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
};
</script>

<style module="customStyle">
.class1 {
  color: red;
}
</style>
