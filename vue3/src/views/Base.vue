<template>
  <div>
    <h3>v-if</h3>
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else>Not A/B</div>
    <h3>v-show</h3>
    <div v-show="type === 'A'">A</div>

    <h3>v-for of</h3>
    <ul>
      <li v-for="item of arr1" :key="item">{{ item }}</li>
    </ul>
    <ul>
      <li v-for="item of user1" :key="item">{{ item }}</li>
    </ul>

    <h3>v-for in</h3>
    <ul>
      <li v-for="item in arr1" :key="item">{{ item }}</li>
    </ul>
    <ul>
      <li v-for="item in user1" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";

export default defineComponent({
  setup() {
    const type = ref(false);
    const arr1 = reactive(["a", "b", "c"]);
    const user1 = reactive({ name: "randy", age: 27 });

    return {
      type,
      arr1,
      user1,
    };
  },
});
</script>

<style scoped lang=""></style>
