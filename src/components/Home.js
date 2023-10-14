import React from 'react';
import "./Home.css";
import imgSrc from "../image/me.jpg";
import {Name, Quote} from "../Info";

function Home() {
  return (
    <div className="Home-Wrapper flex-row-evenly">
        <div className="Img-Cont"><img className="Img-Me" src={imgSrc} alt="me" /></div>
        <div className="Home-Info flex-column-evenly">
            <span className="Name">{Name}</span>
            <span className="Info">{Quote}</span>
        </div>
    </div>
  )
}

export default Home