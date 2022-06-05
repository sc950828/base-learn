<template>
  <div>
    <Slot1>
      <div>slot1</div>
      <div>哈哈</div>
      <Attr></Attr>
    </Slot1>

    <h3>老具名插槽</h3>
    <Slot1>
      <div>slot传递过来的 2.6已被废弃但是还能使用 vue3彻底移除</div>
      <div slot="header">header</div>
      <div slot="footer">footer</div>
      <div slot="content">content</div>
    </Slot1>

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

    <h3>老作用域插槽</h3>
    <!-- scope 被 2.5.0 新增的 slot-scope 取代 -->
    <!-- 除了 scope 只可以用于 <template> 元素，其它和 slot-scope 都相同。 -->
    <Slot2>
      <template slot="main" slot-scope="slotProps">
        <div>user name: {{ slotProps.user.name }}</div>
        <div>user age: {{ slotProps.user.age }}</div>
        <div></div>
      </template>
      <template slot-scope="slotProps">
        <div>user name: {{ slotProps.user.name }}</div>
        <div>user age: {{ slotProps.user.age }}</div>
      </template>
      <template slot="footer" slot-scope="{ user: { name, age } }">
        <div>user name: {{ name }}</div>
        <div>user age: {{ age }}</div>
      </template>
    </Slot2>

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

    <h3>内联模板 Attribute</h3>
    <Attr> <div>我在父组件定义的</div> </Attr>
    <Attr inline-template> <div>我在父组件定义的</div> </Attr>
  </div>
</template>
<script>
import Slot1 from "@/components/Slot1";
import Slot2 from "@/components/Slot2";
import Attr from "@/components/Attr";
export default {
  components: {
    Slot1,
    Slot2,
    Attr,
  },
  data() {
    return {};
  },
};
</script>
