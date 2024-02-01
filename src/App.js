import React from "react";
import { useDispatch, useSelector } from "react-redux";
const {
  incrementCount,
  decrementCount,
} = require("./redux/counter/counterReducer");

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  const handleDecrement = () => {
    dispatch(decrementCount());
  };
  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  return (
    <>
      <div>
        <h3>Redux Counter</h3>
        <div>
          <p>Increment Count</p>
          <h1>{count}</h1>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </div>
    </>
  );
}

export default App;
