<template>
  <div class="">
    <!-- 相对路径可以 -->
    <img src="../assets/logo.png" alt="logo" />
    <!-- ~代表按模块加载 -->
    <img src="~../assets/logo.png" alt="logo" />
    <!-- @代表按模块加载，但是只能用于模板，在css中使用需要配合~使用 -->
    <img src="@/assets/logo.png" alt="logo" />

    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>

    <img :src="Img1" alt="" />
    <img :src="Img2" alt="" />
    <img :src="Img3" alt="" />
  </div>
</template>

<script>
import Img1 from "../assets/logo.png";
// js中不能使用~
// import Img2 from "~../assets/logo.png";
import Img2 from "../assets/logo.png";
import Img3 from "@/assets/logo.png";

export default {
  name: "",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      Img1,
      Img2,
      Img3,
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

<style scoped lang="less">
.box1 {
  background-image: url("../assets/logo.png");
  width: 200px;
  height: 200px;
  display: inline-block;
}

.box2 {
  background-image: url("~../assets/logo.png");
  width: 200px;
  height: 200px;
  display: inline-block;
}

.box3 {
  // 不支持
  // background-image: url("@/assets/logo.png");

  // 需要使用~标志出来是按模块处理，才能使用@
  background-image: url("~@/assets/logo.png");
  width: 200px;
  height: 200px;
  display: inline-block;
}
</style>
