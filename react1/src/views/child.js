// 函数子组件
export default function Children3(props) {
  return (
    <div>
      <div>{props.value}</div>
      <button onClick={props.handleClick}></button>
    </div>
  );
}
