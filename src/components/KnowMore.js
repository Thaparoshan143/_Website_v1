import React from 'react';
import "./KnowMore.css";
import myImg from "../image/me.jpg";
import { MyDescription } from "../Info"

function KnowMore() {
  return (
    <div className="Know-More-Wrapper flex-column-evenly">
        <span className="titles">More About Me</span>
        
        <div className="Desc-Wrapper flex-row-evenly"><img className="Me-Img" src={myImg} alt="me"/><span className="Description">{MyDescription}</span></div>
    </div>
  )
}

export default KnowMore