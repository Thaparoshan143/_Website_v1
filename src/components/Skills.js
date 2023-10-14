import React from 'react';
import "./Skills.css";
import { useState } from 'react';
import cBasic from "../image/Prog Cert/C Basic.jpg";
import cMaster from "../image/Prog Cert/C Master.jpg";
import cppBasic from "../image/Prog Cert/C++ Basics.jpg";
import cppMaster from "../image/Prog Cert/C++ Master.jpg";
import cppOPP from "../image/Prog Cert/C++ OOP.jpg";
import pythonBasic from "../image/Prog Cert/Python Basics.jpg";
import pythonMaster from "../image/Prog Cert/Python Master.jpg";
import pythonBeyBasic from "../image/Prog Cert/Python Beyond Basics.jpg";
import { MajorSkills } from '../Info';

// This is just for progress bar temporary
const skillProgress=[[80,80,50,50],[90,80,50,70],[60,20],[50],[10]];

// aligning the array of images containing certificates of programming
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
            {MajorSkills.map(({field, subItem}, oind)=>(
                // console.log(field + "\n" + subItem + "\n" + ind)
                <CardsWrapper key={field} field={field} subItem={subItem} oind={oind}/>
            ))}
			<a className="theme-button top-button" href="#top">^</a>
        </div>
    )
}

function CardsWrapper({field, subItem, oind})
{
    const [currHovIndex,setCurrHovIndex]=useState(0);
    function showCert(index)
    {
        setCurrHovIndex(index);
    }

    return (
        <div className="Cards-Wrapper flex-column-evenly">
            <span className="Cards-Title titles pseudo-underline">{field}</span>
            <Cards subItem={subItem} oind={oind} showCert={showCert}/>
            {oind===0?(<CertImages oind={currHovIndex} />):""}
        </div>
    )
}

function Cards({subItem, oind, showCert})
{
    return (
        <div className="Cards-Cont flex-row-evenly">
            {subItem.map(({item, level}, ind)=>(
                <Card key={item} title={item} oind={oind} iind={ind} showCert={showCert} level={level} />
            ))}
        </div>
    )
}

function Card({title, oind, iind, showCert, level})
{
    const progressStyle={width:`${skillProgress[oind][iind]}%`};
    return (
        <div className="Card flex-column-evenly" onMouseOver={()=>showCert(iind)}>
            <span className="Card-Title">{title}</span>
            <div className="Skill-Pro-Cont">
                {/* <span className="info-text">EXPERIENCE</span><br /><hr style={{margin:"1rem"}}/> */}
                <span className="info-text">{level}</span>
                <div className="Progress-Cont"><div className="Progress" style={progressStyle}></div></div>
            </div>
        </div>
    )
}

function CertImages({oind})
{
    return (
        <>
        <div className="Cert-Cont flex-row-evenly">
            {Cert[oind].map((val,ind)=>{
                return <img key={val} className="Cert-Img" src={Cert[oind][ind]?Cert[oind][ind]:"./notfound"} alt="cert-not-found" />
            })}
        </div>
        <span className="titles" style={{fontSize:'1.8rem',margin:'3rem 0'}}>{Cert[oind][0]?("Certification count : "+Cert[oind].length):"Cert-Not-Found || Count: 0"}</span>
        </>
    )
}

export default Skills;