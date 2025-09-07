import React from "react";

const StateCounter = ({count, setCount}) => {
    // const decrement = () =>{
    //     count > 0 ? setCount(count -1) : "";
    // }
     
  return (
    <div>      
      <h3>State Counter</h3>
      <h6>{count}</h6>
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => count > 0 ? setCount(count - 1) : ""} disabled={count === 0}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default StateCounter;
