import "./Footer.css";
import "./uni.css";

const Footer_List=[["Facebook","Youtube","GitHub","Linkedin"],
                    ["Quiz","Review","Library","DBMS"],
                    ["More 1","More 2","..."]
                    ];

export default function Footer()
{
    return (
        <footer className="Footer flex-row-evenly">
            <FooterList title="Socials" index={0}/>
            <FooterList title="Project Link" index={1} />
            <FooterList title="More " index={2}/>
        </footer>
    )
}

function FooterList(props)
{
    return(
        <div className="Compartment">
        <span className="Footer-Title pseudo-underline-1">{props.title}</span>
            <br />
            <ul className="F-List">
            {
                Footer_List[props.index].map(val=>
                (
                    <Item val={val} />
                ))
            }
            </ul>
        </div>
    )

}

function Item(props)
{
    return (
        <>
            <li className="F-List-Item spacing-hover">{props.val}</li>
        </>
    )
}