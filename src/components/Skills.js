import React from 'react'
import "./Skills.css"
import { useState } from 'react';
import cBasic from "../image/Prog Cert/C Basic.jpg"
import cMaster from "../image/Prog Cert/C Master.jpg"
import cppBasic from "../image/Prog Cert/C++ Basics.jpg"
import cppMaster from "../image/Prog Cert/C++ Master.jpg"
import cppOPP from "../image/Prog Cert/C++ OOP.jpg"
import pythonBasic from "../image/Prog Cert/Python Basics.jpg"
import pythonMaster from "../image/Prog Cert/Python Master.jpg"
import pythonBeyBasic from "../image/Prog Cert/Python Beyond Basics.jpg";


const cardWrapperTitles=["Programming","3D Artist","Web Development","Game Development","Others"];
const cardSubTitles=[["C","C++","Python","C#"],["Blender","Autodesk Maya"],["HTML","CSS","JS","React JS"],["Unity"],["PhotoShop"]];
const skillProgress=[[80,80,50,50],[60,20],[90,80,50,70],[50],[10]];

const Cert=[[cBasic,cMaster],[cppBasic,cppMaster,cppOPP],[pythonBasic,pythonMaster,pythonBeyBasic],[""]];

function Skills() {
  return (
    <div className="Skills-Wrapper">
       <SkillsWrapper />
    </div>
  )
}

function SkillsWrapper()
{
    return (
        <div className="Skills-Cont flex-column-evenly">
            {cardWrapperTitles.map((ctitle,ind)=>(
                <CardsWrapper key={ctitle} title={ctitle} ind={ind} />
            ))}
			<a className="theme-button top-button" href="#top">^</a>
        </div>
    )
}

function CardsWrapper(props)
{
    const [currHovIndex,setCurrHovIndex]=useState(0);
    function showCert(index)
    {
        setCurrHovIndex(index);
    }

    return (
        <div className="Cards-Wrapper flex-column-evenly">
            <span className="Cards-Title titles pseudo-underline">{props.title}</span>
            <Cards ind={props.ind} showCert={showCert}/>
            {props.ind===0?(<CertImages oind={currHovIndex} />):""}
        </div>
    )
}

function CertImages(props)
{
    return (
        <>
        <div className="Cert-Cont flex-row-evenly">
            {Cert[props.oind].map((val,ind)=>{
                return <img key={val} className="Cert-Img" src={Cert[props.oind][ind]?Cert[props.oind][ind]:"./notfound"} alt="cert-not-found" />
            })}
        </div>
        <span className="titles" style={{fontSize:'1.8rem',margin:'3rem 0'}}>{Cert[props.oind][0]?("Certification count : "+Cert[props.oind].length):"Cert-Not-Found || Count: 0"}</span>
        </>
    )
}

function Cards(props)
{
    return (
        <div className="Cards-Cont flex-row-evenly">
            {cardSubTitles[props.ind].map((sTitle,ind)=>(
                <Card key={sTitle} title={sTitle} oind={props.ind} iind={ind} showCert={props.showCert} />
            ))}
        </div>
    )
}

function Card(props)
{
    const progressStyle={width:`${skillProgress[props.oind][props.iind]}%`};
    return (
        <div className="Card flex-column-evenly" onMouseOver={()=>props.showCert(props.iind)}>
            <span className="Card-Title">{props.title}</span>
            <div className="Skill-Pro-Cont">
                <span className="info-text">EXPERIENCE</span>
                <div className="Progress-Cont"><div className="Progress" style={progressStyle}></div></div>
            </div>
        </div>
    )
}

export default Skills