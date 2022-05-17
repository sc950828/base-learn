<template>
  <div>
    <!-- 默认插槽 -->
    <slot>我是后备内容，没有传递的时候展示</slot>

    <slot name="header"></slot>
    <slot name="content"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$slots);
    console.log(this.$scopedSlots);
  },
};
</script>
