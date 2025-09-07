// The useReducer hook in React is a powerful alternative to useState for managing complex state logic,
// reducer: A function that determines how the state should change based on the action.
// initialState: The starting state value.
// state: The current state.
// dispatch: A function to send actions to the reducer.

import React, { useReducer } from "react";

const ImproveReducer = () => {
  const initialValue = {
    count: 0,
    inc: 2,
    dec: 2,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + state.inc };
      case "decrement":
        return {
          ...state,
          count: state.count > 0 ? state.count - state.dec : 0,
        };
      case "reset":
        return { count: 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      <p>{state.count}</p>
      <button
        onClick={() => dispatch({ type: "increment" })}
        disabled={state.count >= 20}
      >
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        disabled={state.count === 0}
      >
        Reset
      </button>
    </div>
  );
};

export default ImproveReducer;
