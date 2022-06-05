<template>
  <div>
    <slot v-bind:user="user1"> </slot>
    <slot name="main" v-bind:user="user2"> </slot>
    <slot name="footer" :user="user3"> </slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user1: {
        name: "randy",
        age: 27,
      },
      user2: {
        name: "demi",
        age: 24,
      },
      user3: {
        name: "jack",
        age: 21,
      },
    };
  },
  mounted() {
    console.log(this.$slots);
    console.log(this.$scopedSlots);
    console.log(
      this.$scopedSlots.default({
        user: this.user1,
      })
    );
  },
};
</script>
