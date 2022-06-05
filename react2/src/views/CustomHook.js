import { useEffect, useState } from "react";

const usePoint = () => {
  const [point, setPointe] = useState({ x: 0, y: 0 });

  const savePoint = (e) => {
    setPointe({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener("click", savePoint);

    return () => {
      window.removeEventListener("click", savePoint);
    };
  }, []);

  return point;
};

function CustomHook() {
  const point = usePoint();
  return (
    <div>
      <div>
        x: {point.x} y: {point.y}
      </div>
    </div>
  );
}

export default CustomHook;
