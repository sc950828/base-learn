<template>
  <div>
    <input type="text" :value="value" @input="handleInput" />
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
