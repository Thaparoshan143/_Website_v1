import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import KnowMore from './Components/KnowMore';
import GetInTouch from "./Components/GetInTouch"
import { useState } from 'react';

function App() {

	// I am using boolean rather than other string or num, 0-black, and 1-white
	const [isMode,setIsMode]=useState(false);

	function changeMode()
	{
		setIsMode(isMode=>!isMode);
	}

	return (
		<div className={"App flex-column-between " +(isMode?"light":"dark")}>
			<NavBar isMode={isMode} changeMode={changeMode} />
			<Routes>
				<Route path="/*" element={<Home />}/>
				<Route path="/Home" element={<Home />}/>
				<Route path="/Skills" element={<Skills />} />
				<Route path="/Projects" element={<Projects />} />
				<Route path="/Know More" element={<KnowMore />} />
				<Route path="/Get In Touch" element={<GetInTouch />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;