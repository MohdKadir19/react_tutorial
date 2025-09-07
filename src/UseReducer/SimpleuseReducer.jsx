// The useReducer hook in React is a powerful alternative to useState for managing complex state logic,
// reducer: A function that determines how the state should change based on the action.
// initialState: The starting state value.
// state: The current state.
// dispatch: A function to send actions to the reducer.

import React, { useReducer } from "react";

const SimpleuseReducer = () => {
  const reducer = (count, action) => {
    if (action.type === "increment") {
      return count + 1;
    }
    if (action.type === "decrement") {
      return count > 0 ? count - 1 : 0;
    }
    if (action.type === "reset") {
      return 0;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        disabled={count === 0}
      >
        Reset
      </button>
    </div>
  );
};

export default SimpleuseReducer;
