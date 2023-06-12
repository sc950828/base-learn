<template>
  <div @click="clickCount">
    {{ count }}
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineExpose } from "vue";
const props = defineProps({
  msg: String,
});

const count = ref(10);

const say = () => {
  console.log("say");
};

defineExpose({
  say,
});

const emits = defineEmits({
  clickCount: null,
});

const clickCount = () => {
  emits("clickCount");
};
</script>
