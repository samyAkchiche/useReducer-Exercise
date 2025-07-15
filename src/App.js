import { useState, useReducer } from "react";

const initialState = [];

const ACTIONS = {
  ADD: "addValue",
  RESET: "resetValue"
}
/**
 *
 * useReducer - Exercise 1
 * 1. Complete the reducer function below to accept
 * two action types
 * - ADD: Adds the value of the input field to the list
 * - RESET: Removes all the entries in the list
 *
 * 2. Add necessary onClick handlers to the buttons
 *
 */


const reducer = (items, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...items, action.payload]
    case ACTIONS.RESET: 
      return initialState
    default:
      return items;
  }
};

export default function App() {
  const [items, dispatch] = useReducer(reducer, initialState);
  const [v, setV] = useState("BigBinary");
  return (
    <>
      <div>
        <input value={v} onChange={(e) => setV(e.target.value)} />{" "}
        <button onClick={() => {dispatch({type: ACTIONS.ADD, payload: v})}}>Add</button>
        <button onClick={() => {dispatch({type: ACTIONS.RESET})}}>Reset</button>
      </div>
      <ul>
        {items.map((item, ix) => (
          <li key={ix}>{item}</li>
        ))}
      </ul>
    </>
  );
}
