import React from 'react'
import { AppText, technologiesKnown } from '../Constants'

const LanguagesKnown = (props) => {
    return (
        <div className='mt-[90px]' id='skills'>
            <div className='flex flex-row justify-center items-center' data-aos="fade-up">
                <h1 className={`text-[30px] md:text-[40px] font-bold md:text-center ${props.mode ? 'text-gray-400' : ''}`}>{AppText.Technologies} <span className=' text-purple-600'>{AppText.Known}</span></h1>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly px-8 md:px-0 mt-8'>
                <div className='grid  grid-cols-3 md:grid-cols-4 gap-8 md:gap-x-20 items-center justify-items-center'>
                    {technologiesKnown.map((item, index) => (
                        <div className='bg-purple-200 p-3 rounded-xl w-[80px] md:w-[100px] border-dashed border-2 border-purple-600' key={index} data-aos="fade-up">
                            <img src={item.icon} alt="" className='w-[80px] md:w-[100px] hover:scale-110 transition ease-in-out delay-100 ' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LanguagesKnown
