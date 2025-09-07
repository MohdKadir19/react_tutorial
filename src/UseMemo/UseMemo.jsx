import React, { useMemo, useState } from "react";

const ExpensiveComponent = ({ number }) => {
  //   const computeExpensiveValue = (num) => {
  //     console.log("Expensive calculation...");
  //     return num * 2;
  //   }; // call every render
  //return <h2>Result: {computeExpensiveValue(number)}</h2>;

  //now use usememo
  const memoizedValue = useMemo(() => {
    return number * 2;
  }, [number]);

  return <h2>Result: {memoizedValue}</h2>;
};

const UseMemo = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Counter : {count}
      </button>
      <ExpensiveComponent number={10} />
    </>
  );
};

export default UseMemo;
