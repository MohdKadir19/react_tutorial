import React, { useRef } from "react";

export const SimpleUseRef = () => {
  const inputRef = useRef(null);
  const handleRef = () => {
    inputRef.current.style.backgroundColor = "red"; // Access the DOM node directly
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleRef}>Focus Input</button>
    </div>
  );
};
