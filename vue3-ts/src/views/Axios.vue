<template>
  <div class=""></div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import { getTodo } from "@/utils/user";

export default defineComponent({
  name: "AxiosView",
  setup() {
    onMounted(async () => {
      const result = await getTodo();
      console.log(result);
    });
    return {};
  },
});
</script>

<style scoped lang=""></style>
