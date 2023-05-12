import "../uni.css"
import "./NavBar.css"
import { NavLink } from "react-router-dom";

// Page name or link name will be same as it
const navItemsTitle=["Home","Skills","Projects","Know More","Get In Touch"];

function NavBar(props)
{
	const btnStyle={
		color:(props.isMode?"white":"black"),
		backgroundColor:(props.isMode?"black":"white")
	}

	return(
		<nav className="NavBar">
			<NavItems />
			<button style={btnStyle} className="Mode-Button" onClick={props.changeMode}>{props.isMode?"D":"L"}</button>
		</nav>
	)
}

function NavItems()
{
	return (
		<div className="Nav-Items flex-row-evenly">
			{navItemsTitle.map((val)=>(
				<NavItem val={val} />
			))}
		</div>
	)
}

function NavItem(props)
{
	return (
		<NavLink className="Nav-Item pseudo-underline" to={"/"+props.val}>{props.val}</NavLink>
	)
}

export default NavBar