<template>
  <div class="about">
    <h3>父子组件传值 事件</h3>
    {{ value1 }}
    <Child2 v-model="value1" />

    <h3>props</h3>
    <ul>
      <!-- <Child3 :full-name="fullName"></Child3> -->
      <Child3
        :fullName="fullName"
        v-bind="obj1"
        @click="click1"
        class="child3"
        id="child3"
        style="color: blue"
      ></Child3>
    </ul>

    <h3>动态组件</h3>
    <component :is="Com"> </component>
    <!-- <component is="Child3"> </component> -->
    <!-- is始终渲染组件 -->
    <!-- <section is="Child3"></section> -->

    <h3>v-model用在自定义组件上 sync修饰符</h3>
    {{ value2 }}
    {{ syncValue }}
    <Child4 v-model="value2" :syncTest.sync="syncValue" />
  </div>
</template>
<script>
import Child2 from "@/components/Child2";
import Child3 from "@/components/Child3";
import Child4 from "@/components/Child4";
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
