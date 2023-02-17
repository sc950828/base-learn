import React, { useState, useMemo } from "react";

function Test4() {
  const [firstName, setFirstName] = useState("randy");
  const [lastName, setLastName] = useState("su");
  const [count, setCount] = useState(0);

  const fullName = useMemo(() => {
    return firstName + lastName;
  }, [firstName, lastName]);

  const handleClick1 = () => {
    setFirstName(firstName + "!");
  };
  const handleClick2 = () => {
    setLastName(lastName + "?");
  };

  const handleClick3 = () => {
    setCount(count + 1);
  };

  const all = () => {
    console.log("all");
    return firstName + lastName;
  };

  return (
    <div>
      <div>{fullName}</div>
      {/* <div>{all()}</div> */}
      <button onClick={handleClick1}>click1</button>
      <button onClick={handleClick2}>click2</button>
      <div>{count}</div>
      <button onClick={handleClick3}>click3</button>
    </div>
  );
}

export default Test4;
