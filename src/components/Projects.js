import React from 'react'
import "./Projects.css"
import "../uni.css"
import JSQSXJ from "../image/Proj Cert/Joint Quiz SXJ.jpg"
import USQSXJ from "../image/Proj Cert/Unity Quiz SXJ.jpg"
import SFSXJ from "../image/Proj Cert/Science Fair SXJ.jpg"


const projectsTitle=["Web Programs","Software/App","Programs","Utility Programs","3D Modeling/Game Development"];
const projectsSubTitle=[["Web Utility","Intra School Quiz SXJ","SXJ MCQS Quiz"],["Review and Voting System","Joint School Quiz SXJ"],["Mini Projects with C"],["Stock MP Utility","React Utility","RLibrary"],["3D Models and Games"]];
const projectsSubTitleDescription=[["Web Based Program created from React JS desgined to serve the speed working with desgines and code generation","Web Based Program desgined to serve the need of Quiz Contest inside SXJ Premises","Web Based Program desgined to for organzining High school MCQS Contest within classes"],
                                    ["Application made inside Unity to serve the need of review system and voting system program in COAS (Science Exhibition)","Application made with Unity designed to serve the need of the Inter-School Quiz Contest oraganized by SXJ"],
                                    ["Written in C, containing different varities of programs to serve specific need and also can be added to any project as per required"],
                                    ["Program wriiten in Python, with beautiful soup plugin focused to get current Stock Market Price of given script and tolerance given for any task","Program wriiten in Python, desgined to serve the new setup and easy component adding feature for React JS with simple oneclick run","Library written in C++, which comes with bunch of useful functions and classes to speed up the fresh projects"],
                                    ["Projects done on Blender and Unity for learning and getting hands on with different way of making Models, render images, animation and along with Games made in Unity Game Engine"]];

const toolsUsed=[[["React JS","HTML","CSS","JS"],["HTML","CSS","JS"],["HTML","CSS","JS"]],[["Unity","C#"],["Unity","C#"]],[["C"]],[["Python","Beautiful Soup"],["Python"],["C++"]],[["Unity","Blender"]]];
const viewSourceLinks=[["https://github.com/Thaparoshan143/WebUtility_react","https://drive.google.com/drive/folders/1kt8hL7HuYp5Zvi1MkAiAaoJJewIbu-Ph","https://drive.google.com/drive/folders/1QknB85wG_DAC38vcQnPdnFNu2K-Blg-T"],["https://drive.google.com/drive/folders/1CogkgVoLMab7Rn8X7FAmRhpQrcPxnMry","https://drive.google.com/drive/folders/1i78RFwqSctB2Jqs3WTGGWpF8SJ87eW2z"],["https://intriguing-steam-75f.notion.site/Mini-Projects-with-C-57801b3a17204c6c877660808901c275"],["https://github.com/Thaparoshan143/Stock_WebScr_python/tree/main","https://github.com/Thaparoshan143/webBoiGen_Python","https://github.com/Thaparoshan143/Rlibrary"],["https://www.youtube.com/@roshanthapa1297/videos"]];

const projectCert=[JSQSXJ,USQSXJ,SFSXJ];

function Projects() {
  return (
        <ProjectsWrapper />
  )
}

function ProjectsWrapper()
{
    return (
        <div className="Projects-Cont flex-column-evenly">
            {projectsTitle.map((val,ind)=>(
                <ProjectWrapper key={val} title={val} ind={ind} />
            ))}
            <div className="Cards-Wrapper">
                <span className="Project-Title">Project Certifications</span>
                <div className="Projects-Cert flex-row-evenly">
                    {projectCert.map(val=>(
                        <img className="Cert-Img" key={val} src={val} alt="cert" />
                    ))}
                </div>
                <span className="titles">Count : {projectCert.length}</span>
            </div>
			<a className="theme-button top-button" href="#top">^</a>
        </div>
    )
}

function ProjectWrapper(props)
{
    return (
        <div className="Cards-Wrapper flex-column-evenly">
            <span className="Project-Title pseudo-underline">{props.title}</span>
            <Cards ind={props.ind} />
        </div>
    )
}

function Cards(props)
{
    return (
        <div className="Cards-Cont flex-row-evenly">
            {projectsSubTitle[props.ind].map((val,ind)=>
            (
                <Card key={val} title={val} oind={props.ind} iind={ind} />
            ))}
        </div>
    )
}

function Card(props)
{
    const description=projectsSubTitleDescription[props.oind][props.iind]?projectsSubTitleDescription[props.oind][props.iind]:"Description Missing";
    const srcLink=viewSourceLinks[props.oind][props.iind]?viewSourceLinks[props.oind][props.iind]:"#";
    const tools=toolsUsed[props.oind][props.iind];
    // console.log(srcLink);
    // console.log(description);
    return (
        <div className="Card Project-Card flex-column-evenly">
            <span className="Card-Title">{props.title}</span>
            <div className="Tools-Cont flex-row-evenly">
                {tools?tools.map((val)=>{
                    return <span key={val} className="Tool">{val}</span>
                }):""}
            </div>
            <span className="Description">{description?description:"Description Missing"}</span>
            <a className="Project-Button theme-button" target="_blank" href={srcLink}>View Source..</a>
        </div>
    )
}

export default Projects