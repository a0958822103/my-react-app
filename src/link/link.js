import React from "react";
import { Link, NavLink } from "react-router-dom";
import image1 from "./todo.png"
import image2 from "./login.png"
import "./link.css"
export default function link () {
    return(
    <div>
        <nav>
            <NavLink to='/' className="Link">home</NavLink>
            <NavLink to='/todo' className="Link"><img src={image1} className="image"></img></NavLink>
            <NavLink to='/login' className="Link"><img src={image2} className="image"></img></NavLink>
        </nav>
    </div>
    )
}

            
            

           