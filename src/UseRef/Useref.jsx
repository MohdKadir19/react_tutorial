import React, { useRef, useState } from "react";

const Useref = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => setCount((c) => c + 1), 1000);
    }
  };
  const endTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <>
      <div>
        <p>{count}</p>
        <button onClick={startTimer} style={{ marginRight: "10px" }}>
          Start
        </button>
        <button onClick={endTimer}>End</button>
      </div>
    </>
  );
};

export default Useref;
