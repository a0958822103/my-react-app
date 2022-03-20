import React, { useState } from "react"
import './image.css';
import img1 from "./image1.jpg"
import img2 from "./image2.jpg"
import img3 from "./image3.jpg"
import arrowleft from "./arrowleft.jpg"
import arrowright from "./arrowright.jpg"
const data = [
    {
        key: 1,
        src: img1
    },

    {
        key: 2,
        src: img2
    },

    {
        key: 3,
        src: img3
    },
]

export default function Slider() {
    const [currentid, setCurrentid] = useState(0)

    const next = () => {
        setCurrentid((currentid) => data.length - 1 > currentid ? currentid + 1 : currentid = 0)
    }

    const prev = () => {
        setCurrentid((currentid) => currentid > 0 ? currentid - 1 : data.length - 1)
    }

    return (
        <div className="slider">

            <img className="Slider-img" src={data[currentid].src} alt="" />
            <button className="btn-prev" onClick={prev}>
                <img src={arrowleft} alt="" width="25px" height="25px"></img>
            </button>

            <button className="btn-next" onClick={next}>
                <img src={arrowright} alt="" width="25px" height="25px" ></img>
            </button>

        </div>
    )
}