import React, { useState } from "react";
import "../styles/test1.css";
import classnames from "classnames";

function Test1() {
  const [index, setIndex] = useState(0);

  const handleClick = (i) => {
    if (i !== 5) {
      if (i === 9) {
        setIndex(1);
      } else if (i === 4) {
        setIndex(i + 2);
      } else {
        setIndex(i + 1);
      }
    }
  };

  return (
    <div className="box">
      <div
        className={classnames("item", { active: index === 1 })}
        onClick={() => handleClick(1)}
      >
        1
      </div>
      <div
        className={classnames("item", { active: index === 2 })}
        onClick={() => handleClick(2)}
      >
        2
      </div>
      <div
        className={classnames("item", { active: index === 3 })}
        onClick={() => handleClick(3)}
      >
        3
      </div>
      <div
        className={classnames("item", { active: index === 4 })}
        onClick={() => handleClick(4)}
      >
        4
      </div>
      <div
        className={classnames("item", { active: index === 5 })}
        onClick={() => handleClick(5)}
      >
        5
      </div>
      <div
        className={classnames("item", { active: index === 6 })}
        onClick={() => handleClick(6)}
      >
        6
      </div>
      <div
        className={classnames("item", { active: index === 7 })}
        onClick={() => handleClick(7)}
      >
        7
      </div>
      <div
        className={classnames("item", { active: index === 8 })}
        onClick={() => handleClick(8)}
      >
        8
      </div>
      <div
        className={classnames("item", { active: index === 9 })}
        onClick={() => handleClick(9)}
      >
        9
      </div>
    </div>
  );
}

export default Test1;
