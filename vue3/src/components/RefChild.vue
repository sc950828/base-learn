<template>
  <div>{{ msg }}</div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";

export default defineComponent({
  props: ["msg"],
  setup(props, { expose }) {
    const say = () => {
      console.log("RefChild say");
    };

    const name = ref("RefChild");
    const user = reactive({ name: "randy", age: 27 });

    //  如果定义了会覆盖return中的内容
    expose({
      user,
      say,
    });

    return {
      name,
      user,
      say,
    };
  },
});
</script>
