import React, { useState } from 'react'
import { logo } from '../assets'

const NavBar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div >
            <div className='flex justify-between '>
                <img src={logo} className='h-5' alt='' />
                <div>
                    toggle
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex flex-row'>
                        <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
                        <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>ABout Me</li>
                        <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Skills</li>
                        <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Portfolio</li>
                        <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Companies</li>
                        <li className='mr-4 transition-all ease-in-out hover:scale-110 cursor-pointer'>Contact Me</li>
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
                        <ul className='flex flex-col mt-8 bg-gray-300 p-2'>
                            <li className='p-3 transition-all ease-in-out hover:scale-110 cursor-pointer'>Home</li>
                            <li className='p-3 transition-all ease-in-out hover:scale-110 cursor-pointer'>ABout Me</li>
                            <li className='p-3 transition-all ease-in-out hover:scale-110 cursor-pointer'>Skills</li>
                            <li className='p-3 transition-all ease-in-out hover:scale-110 cursor-pointer'>Portfolio</li>
                            <li className='p-3 transition-all ease-in-out hover:scale-110 cursor-pointer'>Companies</li>
                            <li className='p-3 transition-all ease-in-out hover:scale-110 cursor-pointer'>Contact Me</li>
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
