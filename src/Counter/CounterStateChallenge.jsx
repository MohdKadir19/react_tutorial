import React, { useState } from "react";

const CounterStateChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("");

  const handleIncrement = () => {
    setCount(count + step);
  };
  const handleDecrement = () => {
    setCount(count - step);
  };
  return (
    <div>
      <h1>State Counter Challenge</h1>
      <h6>{count}</h6>
      <input
        className="input"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <div className="counter">
        <button onClick={handleIncrement} disabled={count >= 100}>
          Increment
        </button>
        <button onClick={handleDecrement} disabled={count <= 0}>
          Decrement
        </button>
        <button onClick={() => setCount("0")}>Reset</button>
      </div>
    </div>
  );
};

export default CounterStateChallenge;
