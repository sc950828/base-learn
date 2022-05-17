<template>
  <div class="customref">
    <div>{{ text }}</div>
    <input v-model="text" />
  </div>
</template>
<script>
import { defineComponent, customRef } from "vue";

export default defineComponent({
  setup() {
    const useDebouncedRef = (value, delay = 2000) => {
      let timeout;
      return customRef((track, trigger) => {
        return {
          get() {
            track();
            console.log(value);
            return value;
          },
          set(newValue) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              value = newValue;
              trigger();
            }, delay);
          },
        };
      });
    };
    return {
      text: useDebouncedRef("randy"),
    };
  },
});
</script>
