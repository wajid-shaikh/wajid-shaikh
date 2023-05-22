import React from 'react'
import { AppText, aboutSection } from '../Constants'
import { laptop, wave } from '../assets'

const AboutMe = () => {
    return (
        <div className=' mt-10 md:mt-28'>
            <img src={wave} className='w-screen absolute' alt="" />
            <img src={laptop} alt="" className='absolute mt-[-50px] w-[200px] md:mt-[-200px] md:w-[336px]'/>
            <div className="h-[550px] md:h-[300px] bg-purple-600 mb-1">
                <h2 className='text-[50px] font-bold text-white text-center pt-36 md:pt-6'>{AppText.About} <span className='text-black'>{AppText.Me}</span></h2>
                <h2 className='text-white mt-5 text-center px-10
                md:px-64 lg:px-80'>{AppText.aboutMeDescripion}</h2>
            </div>
            <div className='flex flex-col mt-[-50px] md:mt-[-70px] md:flex-row justify-around items-center md:px-32'>
                {aboutSection.map((item,index)=>(
                    <div className=' group hover:bg-purple-600 mb-5 p-7 rounded-lg' key={index}>
                        <img key={item.id} src={item.image} className='w-[240px] h-[200px] object-cover rounded-lg' alt="" />
                        <div className=' w-[230px] pb-[10px] pt-[10px]'>
                            <h2  className='font-bold text-center group-hover:text-white'>{item.title}</h2>
                            <h2  className='text-[15px] text-center text-gray-500 group-hover:text-gray-200'>{item.desc}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutMe
