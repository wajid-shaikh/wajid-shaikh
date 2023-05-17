import React from 'react'
import { socialNetwork } from '../Constants'
// import { Link } from "react-router-dom";
  

const Footer = () => {
    return (
        <div className='bg-gray-200 mt-10 p-20 items-center flex flex-col  px-10 md:px-80'>
            <div className='flex gap-4'>
                {socialNetwork.map((item, index)=>(
                    <div key={index}>
                        <a href=
                        {item.url}><img src={item.logo} alt="" className='w-[40px]'/></a>
                    </div>
                ))}
            </div>
            <h1 className='text-gray-500 text-[15px] mt-4'>Copyright by Wajid Shaikh @2023</h1>
        </div>
    )
}

export default Footer
