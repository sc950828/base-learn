import { useContext } from "react";
import { AgeContext, UserContext } from "../utils/contexts";

function Context5() {
  const age = useContext(AgeContext);
  const name = useContext(UserContext);

  return (
    <div>
      <h3>useContext</h3>
      <div>{age.age}</div>
      <div>{name}</div>
    </div>
  );
}

export default Context5;
