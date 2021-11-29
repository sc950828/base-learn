<template>
  <div class="about">
    <h3>父子组件传值 事件</h3>
    {{ value1 }}
    <Child2 v-model="value1" />

    <h3>props</h3>
    <ul>
      <!-- <Child3 :full-name="fullName"></Child3> -->
      <Child3 :fullName="fullName" v-bind="obj1" @click="click1"></Child3>
    </ul>

    <!-- <h3>动态组件</h3>
    <component :is="Com"> </component> -->

    <h3>v-model用在自定义组件上 sync修饰符</h3>
    {{ value2 }}
    <Child4 v-model="value2" :syncTest.sync="syncValue" />

    <h3>slot</h3>
    <Child5>
      <template v-slot:default>默认slot</template>
      <!-- 注意 v-slot 只能添加在 <template> 上 除了如下情况-->
      <!-- 当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上 -->
      <template v-slot:header="slotProps"
        ><div>header</div>
        <div>{{ slotProps.user1.name }}</div>
        <div>{{ slotProps.user2.name }}</div>
      </template>
      <!-- 老式写法 -->
      <!-- <template slot="footer"><div>老式写法footer</div></template> -->
      <template slot="footer" slot-scope="slotProps"
        ><div>老式写法footer</div>
        <div>{{ slotProps.user3.name }}</div></template
      >
      <!-- <template #footer><div>footer</div></template> -->
    </Child5>
  </div>
</template>
<script>
import Child2 from "@/components/Child2";
import Child3 from "@/components/Child3";
import Child4 from "@/components/Child4";
import Child5 from "@/components/Child5";
export default {
  provide() {
    return {
      say: this.say2,
    };
  },
  name: "About",
  components: {
    Child2,
    Child3,
    Child4,
    Child5,
  },
  data() {
    return {
      value1: "randy",
      value2: "randy2",
      syncValue: "syncTest",
      Com: Child3,
      fullName: "randy su",
      obj1: {
        name: "randy",
        age: 24,
        address: "汨罗",
      },
    };
  },
  methods: {
    click1() {
      console.log("$listeners 事件触发啦");
    },
    say() {
      console.log("say");
    },
    say2() {
      console.log("say2");
    },
  },
};
</script>
