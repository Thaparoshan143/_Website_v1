import "./MainBody.css";
import "./uni.css";

const SkillsList=["Programming","Web Development","Game Development","3D Animator"];

export default function MainBody()
{
    return (
        <div className="Main-Body">
            <div className="Page flex-row-evenly">
                <div className="Left Half-Container flex-row-evenly">
                    <img alt="person" className="Main-Body-Photo" src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"></img>
                </div>
                <div className="Right Half-Container flex-row-evenly">
                    <div>
                    <span className="Name-Title Name-Title-1">Roshan Thapa</span><br />
                    <span className="Sub-Title spacing-hover">Engineering Student</span>
                    </div>
                </div>
            </div>
            <div className="Page flex-row-evenly">
                <div className="Skills flex-row-evenly">
                    <Skills />
                </div>
            </div>
        </div>
    )
}

function Skills()
{
    return (
        SkillsList.map(skill=>
            (
                <Skill title={skill} />
            ))
    )
}

function Skill(props)
{
    return (
        <div className="Skill">
            <span className="Skill-Title pseudo-underline-1">{props.title}</span>

            <button className="Button">More</button>
        </div>
    )
}