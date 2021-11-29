<template>
  <div>
    <slot name="default">不传我就默认显示咯</slot>
    <!-- 传值 -->
    <slot name="header" :user1="user1" :user2="user2"></slot>
    <slot name="footer" :user3="user3"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user1: {
        name: "randy1",
      },
      user2: {
        name: "randy2",
      },
      user3: {
        name: "randy3",
      },
    };
  },
};
</script>
