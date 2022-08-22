export default function PostPage(props) {
  console.log(props)
  return (
    <div>
      <h1 >Post Page</h1>
      <div>props.match.params.post: {props.match.params.post}</div>
    </div>
  );
}
