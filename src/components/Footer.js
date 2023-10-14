import "../uni.css";
import "./Footer.css";
import { SocialHandles } from "../Info";

function Footer()
{
	return(
		<footer className="Footer flex-row-between">
			<div className="Socials flex-row-evenly">
				{SocialHandles.map(({media, url})=>{return <SocialButton key={media} media={media} url={url}/>})}
			</div>
			<span className="Text">@ All Copyright are reserved - 2023</span>
			<span className="Text">Designed by : <span className="Theme-Text">Roshan Thapa</span></span>
		</footer>
	)
}

function SocialButton({media, url})
{
	return <a className="Social-Btnf" href={url} target="_blank" rel="noreferrer">{media}</a>
}

export default Footer