import React, { useCallback, useState } from "react";

const Button = ({ onClick, children }) => {
  //console.log(`Rendring button", ${children}`);
  return <button onClick={onClick}>{children}</button>;
};

const Callback = () => {
  const [count, setCount] = useState(0);

  // const increment = () => {
  //   console.log("increment");
  //   setCount(count + 1);
  // };
  // const decrement = () => {
  //   console.log("decrement");
  //   setCount(count - 1);
  // };

  const increment = useCallback(() => {
    console.log("increment");
    setCount(count + 1);
  }, [count]);

  const decrement = useCallback(() => {
    console.log("increment");
    setCount(count - 1);
  }, [count]);

  return (
    <>
      <p>{count}</p>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </>
  );
};

export default Callback;
