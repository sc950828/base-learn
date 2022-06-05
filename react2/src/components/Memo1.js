import { memo } from "react";

function Memo1({ count }) {
  console.log("memo1 render");
  return <div>{count}</div>;
}

// export default Memo1;
export default memo(Memo1);
