<template>
  <div>
    <!-- <Jsx1 :myProp1="myProp1" @click.native="click1"></Jsx1> -->
    <Jsx1 :myProp1="myProp1"></Jsx1>
  </div>
</template>
<script>
import Jsx1 from "@/components/Jsx1.jsx";
export default {
  components: {
    Jsx1,
  },
  data() {
    return {
      myProp1: "自定义属性1",
    };
  },
  methods: {
    click1() {
      console.log("click1");
    },
  },
};
</script>
