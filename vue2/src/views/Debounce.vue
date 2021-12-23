<template>
  <div style="height: 2000px"></div>
</template>
<script>
import { debounce1 } from "@/utils/index";
export default {
  // 方法1
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll);
  // },
  // methods: {
  //   handleScroll: debounce1(function (e) {
  //     console.log(e);
  //   }, 1000),
  // },

  // 方法2
  mounted() {
    window.addEventListener("scroll", this.debounce(this.handleScroll, 1000));
  },
  methods: {
    debounce(func, delay) {
      let timer = null;
      return function () {
        const context = this;
        const args = arguments;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    },
    handleScroll(e) {
      console.log(e);
    },
  },
};
</script>
