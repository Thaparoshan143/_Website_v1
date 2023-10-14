import React from 'react';
import "./KnowMore.css";
import myImg from "../image/me.jpg";

const myDescription="I am Roshan Thapa, Computer Engineering Student at Thapathali Campus 2078 batch. To describe in short, I am into programming using languages such as C, C++, C#, Python, also am into Web Developemt using React JS Library including knowledge of HTML, CSS, JS, Along side with this, I am into 3D Modeling and rendering Images/Animation using Blender. I sometimes do Game Development using Unity Game Engine. My experience/projects (refer to projects for details) includes, making projects for SXJ during my study in high school (+2), for different program organize by SXJ, coding and using different Utility programs (each lanuage having its own strength) to speed up my workflows/fresh projects, program for school Exhibition and so on..";

function KnowMore() {
  return (
    <div className="Know-More-Wrapper flex-column-evenly">
        <span className="titles">More About Me</span>
        
        <div className="Desc-Wrapper flex-row-evenly"><img className="Me-Img" src={myImg} alt="me"/><span className="Description">{myDescription}</span></div>
    </div>
  )
}

export default KnowMore