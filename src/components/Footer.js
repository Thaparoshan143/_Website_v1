import "../uni.css"
import "./Footer.css"

const socialsHandle=["F","I","YT","Lin"];

function Footer()
{
	return(
		<footer className="Footer flex-row-between">
			<div className="Socials flex-row-evenly">
				{socialsHandle.map((val)=><button className="tempbtn">{val}</button>)}
			</div>
			<span className="Text">@ All Copyright are reserved - 2023</span>
			<span className="Text">Designed by : <span className="Theme-Text">Roshan Thapa</span></span>
		</footer>
	)
}

export default Footer