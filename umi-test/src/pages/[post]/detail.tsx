export default function DetailPage(props) {
  console.log(props)
  // 这里也能拿到动态参数
  return (
    <div>
      <h1 >Detail Page</h1>
      <div>props.match.params.post: {props.match.params.post}</div>
    </div>
  );
}
