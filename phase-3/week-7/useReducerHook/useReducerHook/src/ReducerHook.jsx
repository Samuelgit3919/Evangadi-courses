import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "COLOR":
      return {
        ...state,
        color: !state.color,
      };
    case "USER_INPUT":
      return {
        ...state,
        userInput: action.payload,
      };
    default:
      return state;
  }
};

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    userInput: "",
    color: false,
  });

  return (
    <main className="app" style={{ color: state.color ? "red" : "green" }}>
      <input
        type="text"
        value={state.userInput}
        onChange={(e) =>
          dispatch({ type: "USER_INPUT", payload: e.target.value })
        }
      />
      <br />
      <br />
      <p>{state.count}</p>
      <section>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "COLOR" })}>
          Toggle Color
        </button>
      </section>

      <br />
      <br />
      <p>{state.userInput}</p>
    </main>
  );
};

export default ReducerHook;
