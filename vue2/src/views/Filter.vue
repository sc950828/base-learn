<template>
  <div>
    <div>{{ name | toUpperCase }}</div>
    <!-- class 和 :class可以共存 -->
    <div class="a" :class="name">
      {{ name | toUpperCase(this) | addValue("!!!") }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "randy",
    };
  },
  // 在vue3中被移除了
  filters: {
    toUpperCase(val, val2) {
      // 通过传递参数的方式获取this
      console.log(val2);
      return val.toUpperCase();
    },
    addValue(val, val2) {
      return val + val2;
    },
  },
};
</script>
