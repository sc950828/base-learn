<template>
  <div>
    <h3>默认插槽</h3>
    <Slot1>
      <h3>slot</h3>
    </Slot1>

    <h3>老具名插槽</h3>
    <!-- <Slot1>
      <div>slot传递过来的 2.6已被废弃但是还能使用</div>
      <div slot="header">header</div>
      <div slot="footer">footer</div>
      <div slot="content">content</div>
    </Slot1> -->

    <h3>新具名插槽</h3>
    <Slot1>
      <template v-slot:header>header</template>
      <template v-slot:footer>footer</template>
      <template v-slot:content>content</template>
    </Slot1>

    <h3>新具名插槽缩写 #</h3>
    <Slot1>
      <div>v-slot传递过来的</div>
      <template #header>header2</template>
      <template #footer>footer2</template>
      <template #content>content2</template>
    </Slot1>

    <h3>新作用域插槽</h3>
    <Slot2>
      <template v-slot:main="slotProps">
        <div>user name: {{ slotProps.user.name }}</div>
        <div>user age: {{ slotProps.user.age }}</div>
        <div></div>
      </template>
      <template v-slot:default="slotProps">
        <div>user name: {{ slotProps.user.name }}</div>
        <div>user age: {{ slotProps.user.age }}</div>
      </template>
      <template v-slot:footer="{ user: { name, age } }">
        <div>user name: {{ name }}</div>
        <div>user age: {{ age }}</div>
      </template>
    </Slot2>
  </div>
</template>
<script>
import Slot1 from "@/components/Slot1";
import Slot2 from "@/components/Slot2";
export default {
  components: {
    Slot1,
    Slot2,
  },
  data() {
    return {};
  },
};
</script>
