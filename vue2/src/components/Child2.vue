<template>
  <div>
    <input type="text" :value="value" @input="handleInput" />
    <!-- <input type="text" :value="value" @change="handleInput" /> -->
  </div>
</template>
<script>
export default {
  props: {
    value: String,
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
  },
};
</script>
