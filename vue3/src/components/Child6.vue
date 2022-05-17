<template>
  <div class="child6">
    <input type="text" :value="modelValue" @input="changeName" />
  </div>
</template>
<script setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  modelValue: String,
});
const emits = defineEmits({
  "update:modelValue": null,
});
const changeName = (e) => {
  emits("update:modelValue", e.target.value);
};
// setup(props, context) {
//   console.log(props); // {capitalize: true}
//   const changeName = (e) => {
//     if (props.modelModifiers.capitalize) {
//       context.emit("update:modelValue", e.target.value.toUpperCase());
//     } else {
//       context.emit("update:modelValue", e.target.value);
//     }
//   };
//   return {
//     changeName,
//   };
// }
</script>
