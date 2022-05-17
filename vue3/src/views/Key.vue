<template>
  <div>
    <template v-for="(value, index) of arr" :key="index">
      <div>
        {{ value }}
      </div>
    </template>

    <ul>
      <li v-for="(list, index) of lists2" :key="index">
        <div v-if="list.show">{{ list.name }}</div>
      </li>
    </ul>

    <template>
      没有特殊指令的标记 (v-if/else-if/else、v-for 或 v-slot) 的 template
      现在被视为普通元素，并将渲染为原生的 template 元素，而不是渲染其内部内容。
    </template>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";
const arr = reactive(["a", "b", "c"]);

const lists2 = reactive([
  { name: "randy", show: true },
  { name: "demi", show: false },
  { name: "jack", show: true },
]);
</script>
