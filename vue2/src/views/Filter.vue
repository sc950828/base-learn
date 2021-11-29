<template>
  <div>
    <div>{{ name | toUpperCase }}</div>
    <div>{{ name | toUpperCase | addValue("!!!") }}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "randy",
    };
  },
  filters: {
    toUpperCase(val) {
      return val.toUpperCase();
    },
    addValue(val, val2) {
      return val + val2;
    },
  },
};
</script>
