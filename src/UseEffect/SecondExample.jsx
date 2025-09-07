import React, { useEffect, useState } from "react";

const SecondExample = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('Count', count)
  }, [count])
  return (
    <>
      <div>UseEffect example -2</div>
      <p>{count}</p>
      <div className="counter">
        <button style={{color: "black", marginTop:"20px"}} onClick={() => setCount(count + 1)}>Counter</button>
      </div>
    </>
  );
};

export default SecondExample;
