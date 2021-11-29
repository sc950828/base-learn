<template>
  <div>
    <button @click="changeCom">切换组件</button>
    <!-- include exclude 必须定义name属性 通过name属性匹配 -->
    <!-- include 和 exclude prop 允许组件有条件地缓存。二者都可以用逗号分隔字符串、正则表达式或一个数组来表示： -->
    <keep-alive include="Alive1">
      <component :is="currentCom"></component>
    </keep-alive>
  </div>
</template>
<script>
import Alive1 from "@/components/Alive1";
import Alive2 from "@/components/Alive2";
export default {
  components: {
    Alive1,
    Alive2,
  },
  data() {
    return {
      currentCom: Alive1,
    };
  },
  methods: {
    changeCom() {
      if (this.currentCom == Alive1) {
        this.currentCom = Alive2;
      } else {
        this.currentCom = Alive1;
      }
    },
  },
};
</script>
