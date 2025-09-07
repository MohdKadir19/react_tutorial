import React, { useState } from "react";
import Count from "./Count";

const MemoCount = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <Count />
    </>
  );
};

export default MemoCount;
