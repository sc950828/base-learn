<template>
  <div class="">
    <ul>
      <li v-for="list of lists" :key="list.key">{{ list.value }}</li>
    </ul>

    <div>
      <button @click="addItem">添加</button>
      <button @click="randomItem">乱序</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      lists: [
        { key: 1, value: "a" },
        { key: 2, value: "b" },
        { key: 3, value: "c" },
        { key: 4, value: "d" },
      ],
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    addItem() {
      this.lists.unshift({ key: 5, value: "哈哈" });
    },
    randomItem() {
      this.lists = [
        { key: 2, value: "b" },
        { key: 1, value: "a" },
        { key: 3, value: "c" },
        { key: 4, value: "d" },
      ];
    },
  },
};
</script>

<style scoped lang=""></style>
