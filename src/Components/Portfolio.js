import React from 'react'
import { AppText, portfolio } from '../Constants'
import { robo } from '../assets'

const Portfolio = () => {
    return (
        <div className=' mt-28 flex justify-center flex-col' id='portfolio'>
            <div className='flex flex-row px-6 md:px-0 items-center justify-center' data-aos="fade-up">
                <div>
                    <h1 className='text-[30px] md:text-[40px] font-bold md:text-center'>{AppText.Creative} <span className=' text-purple-600'>{AppText.Portfolio}</span></h1>
                </div>
                <img src={robo} alt="" className='w-[40px] ml-5 animate-bounce' />
            </div>  
            {/* <div className=' flex flex-row justify-evenly gap-2 px-4 md:px-72'>
                {portfolio.map((item, index)=>(
                <button className='border-purple-600 border-2  text-purple-600 focus:text-white active:bg-purple-500 p-1 px-4 rounded-md focus:ring-violet-300 focus:bg-purple-600 focus:ring ' key={index}>{item.type}</button>
                ))}
            </div>           */}
            <div className='grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3 md:px-24 lg:px-48 p-4 '>
            {portfolio.map((item, index)=>(
                    <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-100 transition-all ease-in-out group hover:scale-110' key={index} data-aos="fade-up">
                        <img src={item.imageUrl} alt="" className='h-[180px] object-cover rounded-lg'/>
                        <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold'>{item.title}</h1>
                        <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.desc}</h1>
                    </div>
            ))}
            </div>
        </div>
    )
}

export default Portfolio
