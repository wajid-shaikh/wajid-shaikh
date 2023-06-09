import React from 'react'
import { AppText, portfolio } from '../Constants'
import { robo } from '../assets'

const Portfolio = (props) => {
    return (
        <div className=' mt-28 flex justify-center flex-col' id='portfolio'>
            <div className='flex flex-row px-6 md:px-0 items-center justify-center' data-aos="fade-up">
                <div>
                    <h1 className={`text-[30px] md:text-[40px] font-bold md:text-center ${props.mode ? 'text-gray-400' : ''}`}>{AppText.Creative} <span className=' text-purple-600'>{AppText.Portfolio}</span></h1>
                </div>
                <img src={robo} alt="" className='w-[40px] ml-5 animate-bounce' />
            </div>
            <div className='grid grid-cols-1 place-items-center gap-4 md:gap-x-16 md:grid-cols-3 lg:grid-cols-3 md:px-24 lg:px-48 p-4 '>
                {portfolio.map((item, index) => (
                    <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-200 relative max-w-xs overflow-hidden bg-cover bg-no-repeat' key={index} data-aos="fade-up">
                        <img src={item.imageUrl} alt="" className='h-[180px] object-cover rounded-lg max-w-xs transition duration-300 ease-in-out hover:scale-110' />
                        <h1 className='text-[14px] group-hover:scale-110 mt-3 text-center  font-bold'>{item.title}</h1>
                        <h1 className='text-[12px] text-gray-500 px-6 pb-3'>{item.desc}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
