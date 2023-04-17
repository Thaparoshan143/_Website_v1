import React from "react";
import "./NavBar.css"
import "./uni.css"

export default function NavBar()
{
    return (
        <nav className="Nav flex-row-evenly">
            <NavElements title="Home" />
            <NavElements title="Skills" />
            <NavElements title="Projects" />
            <NavElements title="About Me" />
            <NavElements title="Contact" />

        </nav>
    );
}

function NavElements(props)
{
    return(
        <div className="Nav-Item">
            <span className="pseudo-underline-2 Nav-Title">{props.title}</span>
        </div>
    )
}