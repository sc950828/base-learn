<template>
  <div class="title">使用webpack搭建vue3脚手架</div>
  <img src="./logo.png" alt="logo" />
  <div class="img"></div>
  <div>{{ user.name }} 今年 {{ user.age }} 岁啦</div>
  <button @click="say">say</button>
</template>

<script lang="ts">
interface IUser {
  name: string;
  age: number;
}
import { say } from "./help1";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "",
  setup() {
    const user = reactive<IUser>({ name: "randy", age: 27 });

    return {
      user,
      say,
    };
  },
});
</script>

<style scoped lang="css">
.title {
  color: red;
}
.img {
  width: 300px;
  height: 300px;
  background-image: url("./logo.png");
}
</style>
