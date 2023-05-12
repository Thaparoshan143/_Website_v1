import React from 'react';
import "./Home.css";
import imgSrc from "../image/me.jpg";

const name=["Roshan Thapa"];
const quote=["\" An energetic and eager Computer Engineering Student \""];

function Home() {
  return (
    <div className="Home-Wrapper flex-row-evenly">
        <div className="Img-Cont"><img className="Img-Me" src={imgSrc} alt="me" /></div>
        <div className="Home-Info flex-column-evenly">
            <span className="Name">{name}</span>
            <span className="Info">{quote}</span>
        </div>
    </div>
  )
}

export default Home