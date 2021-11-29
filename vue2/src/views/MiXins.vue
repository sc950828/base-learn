<template>
  <div>
    <h3>mixins</h3>
    <p>比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。</p>
    <div>{{ name }}</div>
    <p>
      同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
    </p>
    <p>
      值为对象的选项，例如 methods、components 和
      directives，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
    </p>
  </div>
</template>
<script>
import index1 from "@/mixins/index1.js";
export default {
  mixins: [index1],
  data() {
    return {
      name: "randy",
    };
  },
  methods: {
    say() {
      console.log("say");
    },
  },
  created() {
    console.log("created");
    this.say();
  },
};
</script>
