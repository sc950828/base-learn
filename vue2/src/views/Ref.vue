<template>
  <div>
    <div v-for="(list, index) of lists" :key="index" ref="refDiv">
      {{ index }}{{ list }}
    </div>
    <span ref="refSpan">span</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lists: [1, 2, 3],
    };
  },
  mounted() {
    console.log(this.$refs.refDiv);
    console.log(this.$refs.refSpan);
  },
};
</script>
