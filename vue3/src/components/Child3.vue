<template>
  <div class="child3">
    <h3 :class="$style.title1">child3</h3>
    <h3 :class="cla.title">child3</h3>
    <div class="title3">title3</div>
    <div class="title4">title4</div>
  </div>
</template>
<script>
import { defineComponent, ref, reactive, useCssModule } from "vue";
export default defineComponent({
  setup() {
    const color1 = ref("green");
    const color2 = reactive({ color: "blue" });

    console.log(useCssModule());
    console.log(useCssModule("cla"));
    return {
      color1,
      color2,
    };
  },
});
</script>

<style module lang="scss">
.title1 {
  color: yellowgreen;
}
</style>

<style module="cla" lang="scss">
// 不支持嵌套
.child3 {
  .title2 {
    color: lavenderblush;
  }
}
.title {
  color: green;
}
</style>

<style lang="scss" scoped>
.title3 {
  color: v-bind(color1);
}
.title4 {
  color: v-bind("color2.color");
}
</style>
