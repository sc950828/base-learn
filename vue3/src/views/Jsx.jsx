import { ref, defineComponent, reactive } from "vue";

const App = defineComponent({
  setup() {
    const count = ref(1);
    const user = reactive({ name: "randy" });

    const inc = () => {
      count.value++;
    };

    // 感觉跟react的jsx差不多
    return () => (
      <div>
        <div>user.name: {user.name}</div>
        <div>{count.value}</div>
        <button onClick={inc}>click inc</button>
      </div>
    );
  },
});

export default App;
