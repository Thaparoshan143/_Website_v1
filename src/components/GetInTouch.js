import React from 'react';
import "./GetInTouch.css";
import { SocialHandles } from "../Info"

function GetInTouch() {
    function callContact()
    {
        alert("Not connected yet ! Redirecting to mail");
    }
    
  return (
    <div className="Contact-Wrapper flex-column-evenly">
        <span className="titles">Get In Touch</span>
        <div className="Socials-Cont flex-row-evenly">
            {SocialHandles.map(({media, url},ind)=>
                {
                    return <a className="theme-button Social-Btn" href={url} rel="noreferrer" target="_blank">{media}</a>
                })}
        </div>
        <hr />
        <div className="Form-Cont flex-column-evenly">
            <span className="Form-Title">Your feedback</span>
            <div className="Form-Row flex-row-evenly"><span className="Field-Title">Full Name :</span><input type="text" placeholder="Enter your full name here..." required/></div>
            <div className="Form-Row flex-row-evenly"><span className="Field-Title">Your Email :</span><input type="email" placeholder="Enter your email here..." required/></div>
            <div className="Form-Row flex-row-evenly"><span className="Field-Title">Feedback :</span><textarea type="text" placeholder="Enter your feedback here..." required/></div>
            <a className="theme-button" onClick={callContact} href="mailto:someone@example.com">Send Email</a>
        </div>
		<a className="theme-button top-button" href="#top">^</a>
    </div>
  )
}

export default GetInTouch