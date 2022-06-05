<template>
  <div class="">
    <div>{{ msg }}</div>
    <button @click="handelClick">changeMsg</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
  },
  emits: { changeMsg: null },
  setup(props, { emit }) {
    const handelClick = () => {
      emit("changeMsg", "我被改变了");
    };
    return { handelClick };
  },
});
</script>

<style scoped lang=""></style>
