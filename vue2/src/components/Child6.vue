<template>
  <div>
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "Child6Name",
  props: ["msg"],
  data() {
    return {
      name: "child6",
    };
  },
  methods: {
    say() {
      console.log("say child6");
    },
  },
  computed: {
    title() {
      return this.name + "title";
    },
  },
};
</script>
