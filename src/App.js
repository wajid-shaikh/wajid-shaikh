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
	const getTheme = () => {
		return JSON.parse(localStorage.getItem('theme')) || false
	}

	const [darkMode, setDarkMode] = useState(getTheme());

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(darkMode))
	}, [darkMode])

	return (
		<>
			<div className={`${darkMode ? 'bg-black' : ''}`}>

				{/* Nav Bar */}
				<NavBar check={darkMode} change={() => setDarkMode(!darkMode)} />

				{/* Intro */}
				<Home mode={`${darkMode ? 'text-gray-400' : 'text-dark'}`} />

				{/* About Me */}
				<AboutMe mode={darkMode} />

				{/* Skills */}
				<Skills mode={darkMode} />

				{/* Languages Known */}
				<LanguagesKnown mode={darkMode} />

				{/* Portfolio */}
				<Portfolio mode={darkMode} />

				{/* Companies */}
				<Companies mode={darkMode} />

				{/* Contact Us */}
				<ContactUs mode={darkMode} />

				{/* Footer */}
				<Footer mode={darkMode} />
				
			</div>
		</>
	);
}

export default App;
