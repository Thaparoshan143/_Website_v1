import React from 'react'
import "./Projects.css"
import "../uni.css"

const projectsTitle=["Web Programs","Software/App","Programs","Utility Programs"];
const projectsSubTitle=[["Web Utility","SXJ Intra Quiz Program","SXJ Quiz Program"],["Review System","SXJ Inter Quiz Program"],["Student DBMS"],["Stock MP Utility","React Utility","RLibrary"]];
const projectsSubTitleDescription=[["Web Based Program created from React JS desgined to serve the speed working with desgines and code generation","Web Based Program desgined to serve the need of Quiz Contest inside SXJ Premises","Web Based Program desgined to for organzining High school Quiz Contest inside SXJ"],
                                    ["Application made inside Unity to serve the need of review system program in COAS (Exhibition)","Application made with Unity designed to serve the need of the Inter-School Quiz Contest oraganized by SXJ"],
                                    ["Program written in C, with objective to make the organize the students data inside dbms (special showcase for Exhibition)"],
                                    ["Program wriiten in Python, focused to get current Stock Market Price of given script and tolerance given for any task","Program wriiten in Python, desgined to serve the new setup and easy component adding feature for React JS with simple oneclick run","Library written in C++, which comes with bunch of useful functions and classes to speed up the fresh projects"]];

const toolsUsed=[[["React JS","CSS","JS"],["HTML","CSS","JS"],["HTML","CSS","JS"]],[["Unity","C#"],["Unity","C#"]],[["C"]],[["Python"],["Python"],["C++"]]];
const viewSourceLinks=[["www.google.com"],[],[],[]];

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
                    return <span className="Tool">{val}</span>
                }):""}
            </div>
            <span className="Description">{description?description:"Description Missing"}</span>
            <a className="Project-Button theme-button" target="_blank" href={srcLink}>View Source..</a>
        </div>
    )
}

export default Projects