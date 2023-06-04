import React, { useState, useRef, useEffect } from 'react'

const NavBar = ({ check, change }) => {
    const [toggle, setToggle] = useState(false)
    let fillColor = "#9333Ea";
    if (check) {
        fillColor = "#FFFFFF";
    }

    const inputRef = useRef(null);
    useEffect(() => {
        const height = inputRef.current.offsetHeight;
        console.log('Input height', height);
        const navigationHeight = document.getElementsByClassName(".navHeight").height;
        document.documentElement.style.setProperty('--scroll-padding-top', navigationHeight - 10 + "px")
    }, [inputRef]);


    return (
        <div className={`p-[20px] z-40 fixed top-0 w-full shadow ${check ? ' bg-purple-700' : 'bg-white'} navHeight`}
            ref={inputRef}>
            <div className='flex justify-between items-center'>
                <div className=''>
                    <a href="#home"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="80pt" viewBox="0 0 274.000000 85.000000" preserveAspectRatio="xMidYMid meet" className=' cursor-pointer'>

                        <g transform="translate(0.000000,85.000000) scale(0.100000,-0.100000)" fill={fillColor} stroke="none">
                            <path d="M2 428 l3 -373 1367 -3 1368 -2 0 375 0 375 -1370 0 -1370 0 2 -372z m2708 2 l0 -350 -1340 0 -1340 0 0 350 0 350 1340 0 1340 0 0 -350z" />
                            <path d="M80 425 l0 -305 640 0 640 0 0 305 0 305 -640 0 -640 0 0 -305z m166 63 l20 -62 23 62 c19 51 27 62 46 62 19 0 26 -9 40 -52 10 -29 21 -57 25 -61 4 -4 15 19 24 52 15 53 20 61 42 61 31 0 30 -6 -7 -118 -29 -87 -33 -93 -56 -90 -21 2 -29 14 -48 63 l-22 60 -20 -60 c-18 -55 -22 -60 -48 -60 -28 0 -30 4 -57 90 -34 109 -34 115 -5 115 20 0 26 -10 43 -62z m440 -27 c50 -125 49 -121 19 -121 -14 0 -28 7 -31 15 -4 10 -20 15 -50 15 -32 0 -44 -4 -44 -15 0 -10 -10 -15 -31 -15 -21 0 -30 4 -26 13 77 195 79 198 104 195 21 -3 30 -16 59 -87z m194 10 c0 -99 -20 -131 -81 -131 -36 0 -40 2 -37 22 2 17 12 24 33 28 30 5 30 5 33 83 3 74 4 77 27 77 24 0 25 -2 25 -79z m120 -26 l0 -105 -25 0 -25 0 0 105 0 105 25 0 25 0 0 -105z m211 82 c63 -42 62 -139 -2 -172 -15 -8 -55 -15 -89 -15 l-60 0 0 98 c0 54 3 102 7 105 3 4 30 7 58 7 38 0 62 -6 86 -23z" />
                            <path d="M616 456 c-3 -14 -7 -29 -9 -33 -1 -3 8 -7 21 -8 18 -1 21 2 16 19 -13 43 -21 50 -28 22z" />
                            <path d="M1120 445 c0 -54 0 -55 29 -55 30 0 61 30 61 57 0 22 -39 53 -65 53 -24 0 -25 -3 -25 -55z" />
                            <path d="M1510 527 c-20 -10 -25 -20 -25 -52 0 -38 2 -40 45 -56 24 -9 46 -21 48 -28 5 -16 -26 -25 -43 -11 -7 6 -26 10 -42 8 l-28 -3 27 -27 c20 -21 37 -28 65 -28 46 0 59 8 71 41 14 35 -1 57 -55 80 -24 10 -43 24 -41 31 7 19 24 20 41 3 19 -19 57 -20 57 -2 0 38 -77 67 -120 44z" />
                            <path d="M1670 430 l0 -100 30 0 c28 0 30 2 30 41 0 39 1 40 33 37 29 -3 32 -6 35 -40 3 -33 7 -38 28 -38 24 0 24 1 24 100 l0 100 -25 0 c-22 0 -25 -4 -25 -35 0 -33 -2 -35 -35 -35 -33 0 -35 2 -35 35 0 32 -2 35 -30 35 l-30 0 0 -100z" />
                            <path d="M1920 438 c-19 -51 -36 -96 -38 -100 -2 -4 10 -8 26 -8 17 0 32 6 36 15 3 9 19 15 41 15 22 0 38 -6 41 -15 4 -9 19 -15 36 -15 25 0 29 3 23 18 -4 9 -21 54 -38 100 -30 78 -33 82 -62 82 -29 0 -32 -4 -65 -92z m85 -15 c5 -20 3 -23 -19 -23 -30 0 -30 0 -14 35 12 27 22 24 33 -12z" />
                            <path d="M2120 430 c0 -99 0 -100 24 -100 24 0 25 2 28 100 l3 100 -27 0 -28 0 0 -100z" />
                            <path d="M2220 430 l0 -100 30 0 c28 0 30 2 30 40 0 52 18 52 48 0 18 -33 28 -40 52 -40 l30 0 -25 49 -25 50 20 46 c11 26 20 49 20 51 0 2 -13 4 -28 4 -22 0 -31 -7 -43 -32 -8 -18 -22 -34 -31 -36 -15 -3 -18 4 -18 32 0 33 -2 36 -30 36 l-30 0 0 -100z" />
                            <path d="M2450 430 l0 -100 25 0 c23 0 25 4 25 40 0 39 1 40 35 40 34 0 35 -1 35 -40 0 -36 3 -40 25 -40 l25 0 0 100 0 100 -25 0 c-22 0 -25 -4 -25 -35 0 -33 -2 -35 -35 -35 -33 0 -35 2 -35 35 0 31 -3 35 -25 35 l-25 0 0 -100z" />
                        </g>
                    </svg></a>
                </div>
                <div className={`${check ? ' text-white' : 'text-black'}`}>
                    Dark-Light Mode <input type="checkbox" name="" id="" onChange={change} checked={check} />
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex flex-row'>
                        <a href="#home"><li className={`${check ? ' text-white hover:text-black' : 'text-black hover:text-purple-600'} mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer `}>Home</li></a>
                        <a href="#about-me"><li className={`${check ? ' text-white hover:text-black' : 'text-black hover:text-purple-600'} mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer `}>ABout Me</li></a>
                        <a href="#skills"><li className={`${check ? ' text-white hover:text-black' : 'text-black hover:text-purple-600'} mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer `}>Skills</li></a>
                        <a href="#portfolio"><li className={`${check ? ' text-white hover:text-black' : 'text-black hover:text-purple-600'} mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer `}>Portfolio</li></a>
                        <a href="#companies"><li className={`${check ? ' text-white hover:text-black' : 'text-black hover:text-purple-600'} mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer `}>Companies</li></a>
                        <a href="#contact-me"><li className={`${check ? ' text-white hover:text-black' : 'text-black hover:text-purple-600'} mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer `}>Contact Me</li></a>
                    </ul>
                </div>
                <div className='md:hidden lg:hidden'>
                    {!toggle ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={() => setToggle(true)} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" onClick={() => setToggle(false)} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer float-right">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    }
                    {toggle ?
                        <ul className={`md:flex flex-col mt-12 md:items-center pb-12 left-0 md:z-auto z-50 w-full p-2 absolute md:static md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${check ? ' bg-purple-500' : 'bg-gray-300'}`}>
                            <a href="#home"><li className={`${check ? 'text-white hover:text-black' : 'text-black hover:text-purple-600'} p-3 transition-all ease-in-out hover:scale-110 cursor-pointer`}>Home</li></a>
                            <a href="#about-me"><li className={`${check ? 'text-white hover:text-black' : 'text-black hover:text-purple-600'} p-3 transition-all ease-in-out hover:scale-110 cursor-pointer`}>ABout Me</li></a>
                            <a href="#skills"><li className={`${check ? 'text-white hover:text-black' : 'text-black hover:text-purple-600'} p-3 transition-all ease-in-out hover:scale-110 cursor-pointer`}>Skills</li></a>
                            <a href="#portfolio"><li className={`${check ? 'text-white hover:text-black' : 'text-black hover:text-purple-600'} p-3 transition-all ease-in-out hover:scale-110 cursor-pointer`}>Portfolio</li></a>
                            <a href="#companies"><li className={`${check ? 'text-white hover:text-black' : 'text-black hover:text-purple-600'} p-3 transition-all ease-in-out hover:scale-110 cursor-pointer`}>Companies</li></a>
                            <a href="#contact-me"><li className={`${check ? 'text-white hover:text-black' : 'text-black hover:text-purple-600'} p-3 transition-all ease-in-out hover:scale-110 cursor-pointer`}>Contact Me</li></a>
                        </ul>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar
