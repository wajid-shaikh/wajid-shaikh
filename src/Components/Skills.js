import React from 'react'
import { skill } from '../assets'
import { AppText, skillsList } from '../Constants'
import '../index.css'

const Skills = (props) => {
    return (
        <div className='mt-5' id='skills'>
            <div className='flex flex-row justify-center items-center' data-aos="fade-up">
                <img src={skill} alt="" className=' w-[40px] md:w-[40px] animate-bounce' />
                <h1 className={`text-[30px] md:text-[40px] font-bold md:text-center ${props.mode ? 'text-gray-400' : ''}`}>{AppText.Skills} <span className=' text-purple-600'>{AppText.Experties}</span></h1>
            </div>
            <div className='px-8 md:px-10 mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center'>
                    {skillsList.map((item, index) => (
                        <div className=' flex flex-col md:mr-11 md:ml-11' key={index} data-aos="fade-up">
                            <div className='flex flex-row justify-between' >
                                <div className='w-[40px]'>
                                    <img src={item.icon} alt='' className=' hover:scale-125 transition-all ease-in-out ' />
                                </div>
                                <div>
                                    <h1 className={`text-[25px] md:text-[30px] ${props.mode ? 'text-gray-400' : ''}`}>{item.skill} </h1>
                                </div>
                                <div>
                                    <h1 className={`text-[25px] md:text-[30px] ${props.mode ? 'text-gray-400' : ''}`}> {item.profeciency}</h1>
                                </div>
                            </div>
                            <div className='p-2 pb-4 flex flex-col space-y-3'>
                                <div className="relative w-full bg-gray-200 rounded">
                                    <div style={{ "width": `${item.width}` }} className="absolute top-0 h-4 rounded shim-green">
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
