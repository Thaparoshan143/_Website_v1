import React from 'react';
import "./Projects.css";
import "../uni.css";
import JSQSXJ from "../image/Proj Cert/Joint Quiz SXJ.jpg";
import USQSXJ from "../image/Proj Cert/Unity Quiz SXJ.jpg";
import SFSXJ from "../image/Proj Cert/Science Fair SXJ.jpg";
import { ProjectsInfo } from '../Info';

// array containing the image of certification provided for completing the projects..
const projectCert = [JSQSXJ, USQSXJ, SFSXJ];

function Projects() {
    return (
        <ProjectsWrapper />
    )
}

function ProjectsWrapper() {
    return (
        <div className="Projects-Cont flex-column-evenly">
            {ProjectsInfo.map(({type, subItem}) => (
                <ProjectWrapper key={type} type={type} subItem={subItem} />
            ))}
            <div className="Cards-Wrapper">
                <span className="Project-Title">Project Certifications</span>
                <div className="Projects-Cert flex-row-evenly">
                    {projectCert.map(val => (
                        <img className="Cert-Img" key={val} src={val} alt="cert" />
                    ))}
                </div>
                <span className="titles">Count : {projectCert.length}</span>
            </div>
            <a className="theme-button top-button" href="#top">^</a>
        </div>
    )
}

function ProjectWrapper({type, subItem}) {
    return (
        <div className="Cards-Wrapper flex-column-evenly">
            <span className="Project-Title pseudo-underline">{type}</span>
            <Cards subItem={subItem} />
        </div>
    )
}

function Cards({subItem}) {
    return (
        <div className="Cards-Cont flex-row-evenly">
            {subItem.map(({item, description, tools, url}) =>
            (
                <Card key={item} title={item} description={description} tools={tools} url={url} />
            ))}
        </div>
    )
}

function Card({title, description, tools, url}) {
    return (
        <div className="Card Project-Card flex-column-evenly">
            <span className="Card-Title">{title}</span>
            <div className="Tools-Cont flex-row-evenly">
                {tools ? tools.map((val) => {
                    return <span key={val} className="Tool">{val}</span>
                }) : ""}
            </div>
            <span className="Description">{description ? description : "Description Missing"}</span>
            <a className="Project-Button theme-button" rel="noreferrer" target="_blank" href={url}>View Source..</a>
        </div>
    )
}

export default Projects