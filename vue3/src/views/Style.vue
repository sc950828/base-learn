<template>
  <div class="style-wrapper">
    <div style="color: red; font-size: 18px">内联静态style</div>
    <div :style="styleObj">内联动态style</div>

    <div class="class1">静态class</div>
    <StyleChild class="class2"></StyleChild>

    <div :class="classStr">动态class</div>
    <div :class="hasClass1 ? 'class1' : ''">动态class</div>
    <div :class="{ class1: hasClass1, class2: hasClass2 }">动态class</div>
    <div :class="[classStr, { class3: hasClass3 }, hasClass4 ? 'class4' : '']">
      动态class
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, onMounted } from "vue";
import StyleChild from "@/components/StyleChild";

export default defineComponent({
  components: {
    StyleChild,
  },
  setup() {
    let styleObj = reactive({ "font-size": "18px", fontWeight: "bold" });
    let classStr = ref("str1 str2");

    let hasClass1 = ref(true);
    let hasClass2 = ref(false);
    let hasClass3 = ref(true);
    let hasClass4 = ref(true);

    return { styleObj, classStr, hasClass1, hasClass2, hasClass3, hasClass4 };
  },
});
</script>
<style>
.class1 {
  color: blue;
}

.class2 {
  color: darkblue;
}

.class3 {
  font-size: 18px;
}

.class4 {
  font-weight: bold;
}
</style>
