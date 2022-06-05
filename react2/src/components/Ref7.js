import { useImperativeHandle, useRef, forwardRef } from "react";

const Ref7 = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    // 这个对象在父组件能通过.current获取到
    return {
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      },
      changeValue: () => {
        inputRef.current.value = "randy";
      },
    };
  });
  return (
    <div>
      <input type="text" ref={inputRef} defaultValue="ref7" />
    </div>
  );
});

export default Ref7;
