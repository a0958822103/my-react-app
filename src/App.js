




import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Todo from "./todo/todoApp"
//import Image from "./image/image"  <Route path="/image" element={<Image/>}/> 
import Counter from "./counter";
import Mylink from "./link/link"
import Login from "./Login";


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Mylink/>}/>
      <Route path="/todo" element={<Todo/>}/>
      
      <Route path="/counter" element={<Counter/>}/> 
      <Route path="/login" element={<Login/>}/>  
    </Routes>
    </BrowserRouter>
  )
}
/*
import React from "react";
import image from "./image/image0.png";

export default function Upload() {
  return (
    <container>
      <label htmlFor="upload-btn"></label>
    </container>
  )
}*/