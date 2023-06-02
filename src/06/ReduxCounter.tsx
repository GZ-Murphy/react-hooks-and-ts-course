import React,{useReducer} from "react";

import { Provider } from "react-redux";
import { json } from "stream/consumers";


const initialState = { value: 0 };


function counterReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case "counter/incremented":
      newState = { value: state.value + 1 };
      console.log(`By ${action.type} state from ${JSON.stringify(state)} to ${JSON.stringify(newState) }` )
      return newState
    case "counter/decremented":
      newState = { value: state.value - 1 };
      console.log(`By ${action.type} state from ${JSON.stringify(state)} to ${JSON.stringify(newState) }` )
      return newState
    default:
      return state;
  }
}


//const store = createStore(counterReducer);

const Counter = () => {
  const [count, dispatch] = useReducer(
    counterReducer,
    initialState
  );
  return (
    <div>
      <h1>Redux Counter</h1>
      <button onClick={() => dispatch({ type: "counter/decremented" })}>
        -
      </button>
      <span
        style={{ width: "50px", display: "inline-block", textAlign: "center" }}
      >
        {count?.value}
      </span>
      <button onClick={() => dispatch({ type: "counter/incremented" })}>
        +
      </button>
    </div>
  );
};

export default () => {
  return (
  
      <Counter />
  
  );
};
