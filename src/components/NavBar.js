import "../uni.css";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { MainNavItemsTitle } from "../Info"

function NavBar(props)
{
	const btnStyle={
		color:(props.isMode?"white":"black"),
		backgroundColor:(props.isMode?"black":"white")
	}

	return(
		<nav className="NavBar">
			<a id="#top" />
			<NavItems />
			<button title={props.isMode?"Dark Mode":"Light Mode"} style={btnStyle} className="Mode-Button" onClick={props.changeMode}>{props.isMode?"D":"L"}</button>
		</nav>
	)
}

function NavItems()
{
	return (
		<div className="Nav-Items flex-row-evenly">
			{MainNavItemsTitle.map(({title, url})=>(
				<NavItem title={title} url={url} key={title} />
			))}
		</div>
	)
}

function NavItem({title, url})
{
	return (
		<NavLink className="Nav-Item pseudo-underline" to={url+title}>{title}</NavLink>
	)
}

export default NavBar