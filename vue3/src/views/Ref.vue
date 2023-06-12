<template>
  <div>
    <span ref="sigleRef">ref span</span>

    <div v-for="(list, index) of lists" :key="index" ref="forRef">
      <div>{{ index }}：{{ list }}</div>
    </div>

    <div v-for="(list, index) of lists" :key="index" :ref="setItemRef">
      <div>{{ index }}：{{ list }}</div>
    </div>

    <RefChild ref="childRef" msg="hello" />
    <RefChild2 ref="childRef2" @clickCount="handleClick" msg="hello" />
  </div>
</template>

<script>
import RefChild from "@/components/RefChild";
import RefChild2 from "@/components/RefChild2";
import {
  defineComponent,
  ref,
  reactive,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";

export default defineComponent({
  components: {
    RefChild,
    RefChild2,
  },
  setup() {
    const sigleRef = ref(null);
    const forRef = ref(null);
    const childRef = ref(null);
    const childRef2 = ref(null);

    const lists = reactive([1, 2, 3]);

    let itemRefs = [];

    const setItemRef = (el) => {
      if (el) {
        itemRefs.push(el);
      }
    };
    onBeforeUpdate(() => {
      itemRefs = [];
    });

    onUpdated(() => {
      console.log(itemRefs);
    });

    onMounted(() => {
      console.log(sigleRef.value); // <span>ref span</span>
      console.log(forRef.value); // <div><div>2：3</div></div>
      console.log(itemRefs); // [div, div, div]
      console.log(childRef.value); // 输出子组件
      // 直接可以使用子组件暴露的方法和属性
      console.log(childRef.value.name); // undefined
      console.log(childRef.value.user); // {name: 'randy', age: 27}
      childRef.value.say(); // RefChild say

      // 类似子组件自己调用
      console.log(childRef.value.$data); // {}
      console.log(childRef.value.$props); // 获取传递的属性 {msg: undefined}
      console.log(childRef.value.$parent); // 获取父组件
      console.log(childRef.value.$root); // 获取根组件

      console.log(childRef2.value);
    });

    const handleClick = () => {
      console.log("点击啦");
    };

    return {
      sigleRef,
      forRef,
      childRef,
      childRef2,
      lists,
      setItemRef,
      handleClick,
    };
  },
});
</script>
