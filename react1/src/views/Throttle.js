import React, { useEffect } from "react";

function debounce(func, delay) {
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) clearTimeout(timer);
    const canCall = !timer;
    timer = setTimeout(() => {
      timer = null;
    }, delay);

    // if(canCall) func.apply(context, args)
    if (canCall) func.call(context, ...args);
  };
}

function Throttle() {
  const debounce2 = (func, delay) => {
    let timer = null;
    return function () {
      const context = this;
      const args = arguments;
      if (timer) clearTimeout(timer);
      const canCall = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);

      // if(canCall) func.apply(context, args)
      if (canCall) func.call(context, ...args);
    };
  };
  const handleScroll = () => {
    console.log("scroll");
  };

  useEffect(() => {
    // window.addEventListener("scroll", debounce(handleScroll, 1000));
    window.addEventListener("scroll", debounce2(handleScroll, 1000));
  }, []);

  // const handleClick = debounce(() => {
  //   console.log("click");
  // }, 2000);

  // const handleClick = debounce2(() => {
  //   console.log("click");
  // }, 2000);

  const handleClick = debounce2(function () {
    console.log("click");
  }, 2000);

  return (
    <div style={{ height: "1000px" }}>
      <button onClick={handleClick}>防抖，单位时间内重复触发重复计时</button>
    </div>
  );
}

export default Throttle;
