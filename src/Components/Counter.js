import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increament,
  increamentByAmount,
} from "../../features/counterSlice";
// features\counterSlice.js
// E:\AkbarSha Personal\Developer\BUILDS\attendance\features\counterSlice.js
function Counter() {
  const count = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <main>
      <div>Counter</div>
      <button onClick={() => dispatch(increament())}>Increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* <input
        onChange={(e) => setIncrementAmount(e.target.value)}
        value={incrementAmount}
      ></input>
      Increment By Amount
      <button
        onClick={() => dispatch(increamentByAmount(incrementAmount))}
      ></button> */}
    </main>
  );
}

export default Counter;
