import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TodoApp from "./todo/TodoApp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/todo" element={<TodoApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

/* import React from "react";
import image from "./image/image0.png";
import "./image.css";
import counter from "./counter"

export default function Upload() {
  return (
  <div className="Y7cLH QzYnR io12_">
      <button type="button" className="MfMmR jpBZ0 uOGmM sxhLh">
        <div className="cbstg">
          <img className="image" src={image} />
          <div className="B63C_ Jl9NH"></div>
        </div>
      </button>
    </div>
  );
} */
