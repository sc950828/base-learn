<template>
  <div class="">
    <!-- <Child />
    <component :is="'Child'"></component>
    <component :is="Com"></component> -->
    <div v-is="Com"></div>
    <div v-is="'Child'"></div>
    <div is="vue:Child"></div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import Child from "../components/Child.vue";

export default defineComponent({
  name: "",
  components: { Child },
  props: {},
  emits: {},
  setup() {
    const router = useRouter();
    const route = useRoute();
    const Com = ref(Child);

    return { Com };
  },
});
</script>
