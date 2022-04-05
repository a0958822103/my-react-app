import React, { useState } from "react";
import "./Calculator/Calculator.css";

function App() {
  const [addToInput, setaddToInput] = useState("");
  const [equal, setequal] = useState("");
  const ops = ['/','*','-','+','.'];

  const Input = val => {
    if(
      ops.includes(val) && addToInput === '' ||
      ops.includes(val) && ops.includes(addToInput.slice(-1))
    ){
      return;
    }
    setaddToInput(addToInput + val);

    if(!ops.includes(val)){
      setequal(eval(addToInput + val).toString());
    }
  };


  const handleEqual = () => {
    setaddToInput(eval(addToInput));
    

  };

  return (
    <div className="app"> 
      <div className="calc-wrapper">
        <div className="input">
          { addToInput || "0"}</div>
        <div className="row">
          <button className="button-wrapper" onClick={() => Input("7")}>7</button>
          <button className="button-wrapper" onClick={() => Input("8")}>8</button>
          <button className="button-wrapper" onClick={() => Input("9")}>9</button>
          <button className="operator" onClick={() => Input("/")}>/</button>
        </div>
        <div className="row">
          <button className="button-wrapper" onClick={() => Input("4")}>4</button>
          <button className="button-wrapper" onClick={() => Input("5")}>5</button>
          <button className="button-wrapper" onClick={() => Input("6")}>6</button>
          <button className="operator" onClick={() => Input("*")}>*</button>
        </div>
        <div className="row">
          <button className="button-wrapper" onClick={() => Input("1")}>1</button>
          <button className="button-wrapper" onClick={() => Input("2")}>2</button>
          <button className="button-wrapper" onClick={() => Input("3")}>3</button>
          <button className="operator" onClick={() => Input("+")}>+</button>
        </div>
        <div className="row">
          <button className="button-wrapper" onClick={() => Input(".")}>.</button>
          <button className="button-wrapper" onClick={() => Input("0")}>0</button>
          <button className="button-wrapper"
            onClick={() => {
              handleEqual();
            }}> =
          </button>
          <button className="operator" onClick={() => Input("-")}>-</button>
        </div>
        <div className="row">
          <div
            className="clear-btn"
            onClick={() => {
              setaddToInput("");
            }}
          > Clear </div>  
         
        </div>
      </div>
    </div>
  );
}

export default App;