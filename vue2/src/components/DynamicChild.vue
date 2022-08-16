<template>
  <div class="dynamic-child">
    我是动态子组件

    <h3>v-model原生支持 input、checkbox、radio、select</h3>
    <div>
      <div>{{ name }}</div>
      <input type="text" v-model="name" />

      <div>{{ checked }}</div>
      <input type="checkbox" v-model="checked" /><span>checkbox1</span>

      <div>{{ selected }}</div>
      <select v-model="selected">
        <option value="randy1">randy1</option>
        <option value="randy2">randy2</option>
        <option value="randy3">randy3</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "dynamic-child",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      name: "randy",
      checked: false,
      selected: "randy2",
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {},
};
</script>
