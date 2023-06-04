import React from 'react'
import { socialNetwork } from '../Constants'

const Footer = (props) => {
    return (
        <div className={`mt-10 p-20 items-center flex flex-col  px-10 md:px-80 ${props.mode ? ' bg-purple-700' : 'bg-gray-200'}`}>
            <div className='flex gap-4'>
                {socialNetwork.map((item, index) => (
                    <div key={index} className=' transition-all ease-in-out hover:scale-110'>
                        <a href={item.url}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-[30px] w-[40px] fill-purple-600 ${props.mode ? ' fill-white' : 'fill-purple-600'}`} fill="currentColor" viewBox="0 0 24 24">
                                <path d={item.pathD} />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
            <h1 className={`text-[15px] mt-4 ${props.mode ? ' text-white' : 'text-gray-500'}`}>Copyright by Wajid Shaikh @2023</h1>
        </div>
    )
}

export default Footer
