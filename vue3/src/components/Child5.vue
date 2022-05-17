<template>
  <div class="child5">
    <input type="text" @input="changeName" />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({}),
    },
  },
  setup(props, context) {
    console.log(props); // {capitalize: true}
    const changeName = (e) => {
      if (props.modelModifiers.capitalize) {
        context.emit("update:modelValue", e.target.value.toUpperCase());
      } else {
        context.emit("update:modelValue", e.target.value);
      }
    };
    return {
      changeName,
    };
  },
});
</script>
