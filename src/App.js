import React, { useState } from "react";
import "./Calculator/Calculator.css";

function App() {
  const [addToInput, setaddToInput] = useState("");
  const [equal, setequal] = useState("");

  const Input = (val) => {
    setaddToInput(addToInput + val);
  };
  const handleEqual = () => {
    setequal(equal.evaluate);
  };

  return (
    <div className="app">
      <div className="calc-wrapper">
        <div className="row">
          <button onClick={() => Input("7")}>7</button>
          <button onClick={() => Input("8")}>8</button>
          <button onClick={() => Input("9")}>9</button>
          <button onClick={() => Input("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => Input("4")}>4</button>
          <button onClick={() => Input("5")}>5</button>
          <button onClick={() => Input("6")}>6</button>
          <button onClick={() => Input("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => Input("1")}>1</button>
          <button onClick={() => Input("2")}>2</button>
          <button onClick={() => Input("3")}>3</button>
          <button onClick={() => Input("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={() => Input(".")}>.</button>
          <button onClick={() => Input("0")}>0</button>
          <button
            onClick={() => {
              handleEqual();
            }}
          >
            =
          </button>
          <button onClick={() => Input("-")}>-</button>
        </div>
        <div className="row">
          <div
            className="clear-btn"
            onClick={() => {
              setaddToInput("");
            }}
          ></div>
          Clear
        </div>
      </div>
    </div>
  );
}
export default App;
