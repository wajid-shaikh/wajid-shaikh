import './App.css';
import AboutMe from './Components/AboutMe';
import Companies from './Components/Companies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Home from './Components/Home';
import LanguagesKnown from './Components/LanguagesKnown';
import NavBar from './Components/NavBar';
import Portfolio from './Components/Portfolio';
import Skills from './Components/Skills';
import { useState, useEffect } from 'react';


function App() {
	const getTheme = ()=>{
		return JSON.parse(localStorage.getItem('theme')) || false
	}
	
	const [darkMode, setDarkMode] = useState(getTheme());
	
	useEffect(()=>{
		localStorage.setItem('theme', JSON.stringify(darkMode))
	},[darkMode])

	return (
		<>
		<div className={`${darkMode? 'bg-black' : ''}`}>
		{/* <div className='fixed top-0 w-full'> */}

			{/* Nav Bar */}

			<NavBar check={darkMode} change={()=>setDarkMode(!darkMode)}/>
		
		{/* </div> */}
			{/* Intro */}
			<Home mode = {`${darkMode ? 'text-gray-400' : 'text-dark'}`}/>
			
			{/* About Me */}
			<AboutMe/>

			{/* Skills */}
			<Skills/>

			{/* Languages Known */}
			<LanguagesKnown/>

			{/* Portfolio */}
			<Portfolio/>

			{/* Companies */}
			<Companies/>

			{/* Contact Us */}
			<ContactUs/>

			{/* Footer */}
			<Footer/>
		{/* </div> */}
		</div>
		</>
	);
}

export default App;
