<template>
  <div class="dynamic">
    <!-- 必须在data中定义 -->
    <!-- <component :is="DynamicChild"></component> -->

    <!-- 这种使用组件名的方式只需要引入并注册组件即可 -->
    <component :is="'dynamic-child'"></component>

    <component :is="'button'">也可以渲染普通元素哦</component>
  </div>
</template>

<script>
import DynamicChild from "@/components/DynamicChild.vue";
export default {
  name: "",
  mixins: [],
  components: {
    DynamicChild,
  },
  props: {},
  data() {
    return {
      // DynamicChild,
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>

<style scoped lang=""></style>
