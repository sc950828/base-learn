import { onBeforeUnmount, onMounted, reactive } from "vue";

export default function () {
  const poite = reactive({ x: 0, y: 0 });
  const savePoint = (e) => {
    poite.x = e.pageX;
    poite.y = e.pageY;
  };

  onMounted(() => {
    window.addEventListener("click", savePoint);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("click", savePoint);
  });

  return poite;
}
