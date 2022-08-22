export default function UserPage(props) {
  console.log(props)
  return (
    <div>
      <h1 >User Page</h1>
      <div>props.match.params.id: {props.match.params.id}</div>
    </div>
  );
}
