<template>
  <div class="child4">
    <button @click="handleClick">handleClick</button>
    <input type="text" @input="handleInput" />
  </div>
</template>
<script>
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  // emits: ["submit"],
  // emits: {
  //   submit: null
  // },
  // 自定义验证
  emits: {
    submit: ({ name, age }) => {
      if (name && age) {
        return true;
      } else {
        return false;
      }
    },

    click: null,
  },
  setup(props, { emit }) {
    const handleClick = () => {
      emit("submit", { name: "randy" });
    };
    const handleInput = (e) => {
      emit("click", { value: e.target.value });
    };

    return {
      handleClick,
      handleInput,
    };
  },
});
</script>
