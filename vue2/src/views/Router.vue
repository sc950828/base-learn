<template>
  <div>
    router

    <div @click="goback">go -1</div>
  </div>
</template>
<script>
export default {
  methods: {
    goback() {
      // this.$router.go(-1);
      // history.go(-1);
    },
  },
};
</script>
