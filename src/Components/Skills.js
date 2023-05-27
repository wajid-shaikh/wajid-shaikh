import React from 'react'
import { skill } from '../assets'
// import { AppText, skillsList, workDetail } from '../Constants'
import { AppText, skillsList } from '../Constants'
import '../index.css'

const Skills = () => {
    // let skillWidth = {};
    return (
        <div className='mt-5' id='skills'>
            <div className='flex flex-row justify-center items-center' data-aos="fade-up">
                <img src={skill} alt="" className=' w-[40px] md:w-[40px] animate-bounce' />
                <h1 className=' text-[30px] md:text-[40px] font-bold md:text-center'>{AppText.Skills} <span className=' text-purple-600'>{AppText.Experties}</span></h1>
            </div>
            {/* <div className='flex flex-col md:flex-row justify-evenly px-8 md:px-0 mt-8'>
                <div className='grid grid-cols-4 md:grid-cols-4 gap-8 items-center'>
                    {skillsList.map((item, index)=>(
                        <div className=' w-[60px] transition ease-in-out delay-100 hover:scale-125 bg-purple-200 hover:bg-purple-600 p-3 rounded-full' key={index}>
                            <img src={item.icon} alt="" className='w-[60px]'/>
                        </div>
                    ))}
                </div>
                <div className=' flex mt-5 flex-col justify-end md:mt-0 lg:mt-0'>
                    {workDetail.map((item, index)=>(
                        <div className='flex flex-row mb-6' key={index}>
                            <div className=' mr-10 font-bold' >
                                <h2>{item.year}</h2>
                            </div>
                            <div>
                                <h3 className=' font-bold w-full'>{item.position}</h3>
                                <h3 className=' font-thin text-[15px] text-gray-400'>{item.compnayName}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}

            <div className='px-8 md:px-10 mt-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 items-center'>
                    {skillsList.map((item, index) => (
                        <div className=' flex flex-col md:mr-11 md:ml-11' key={index} data-aos="fade-up">
                            <div className='flex flex-row justify-between' >
                                <div className='w-[40px]'>
                                    <img src={item.icon} alt='' className=' hover:scale-125 transition-all ease-in-out ' />
                                </div>
                                <div>
                                    <h1 className='text-[25px] md:text-[30px]'>{item.skill} </h1>
                                </div>
                                <div>
                                    <h1 className='text-[25px] md:text-[30px]'> {item.profeciency}</h1>
                                </div>
                            </div>
                            <div className='p-1 flex flex-col space-y-3'>
                                <div className="relative w-full bg-gray-200 rounded">
                                    {/* <h1 className=' hidden'>{skillWidth = item.width}</h1> */}
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
