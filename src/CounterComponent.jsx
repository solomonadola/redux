import React from "react";
import { connect } from "react-redux";
import { incrementCounter } from "./store/action";

function CounterComponent({ counter, increment }) {
  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}

const mapStoreProp = (state) => ({
  counter: state.counter,
});
const mapDispatchProp = {
  increment: incrementCounter,
};

export default connect(mapStoreProp, mapDispatchProp)(CounterComponent);
