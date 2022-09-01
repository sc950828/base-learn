<!-- 模板内容会被忽略 -->
<template>
  <div>aaa</div>
</template>

<script>
import { ref, defineComponent, reactive, h } from "vue";

export default defineComponent({
  setup() {
    const count = ref(1);
    const user = reactive({ name: "randy" });

    const inc = () => {
      count.value++;
    };

    // 渲染函数写法
    // 渲染函数其实也可以定义成jsx文件，定义成jsx文件后 就不能写template和style标签了
    return () => h("div", { class: "color" }, "hello randy");
  },
});
</script>

<!-- 样式还是可以使用 -->
<style lang="scss">
.color {
  color: red;
}
</style>
