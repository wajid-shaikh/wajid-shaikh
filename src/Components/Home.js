import React from 'react'
import { AppText } from '../Constants'
import { homeImage } from '../assets'

const Home = () => {
    return (
        <div className='mt-7 px-6 md:px-20 items-center flex flex-col md:flex-row'>
            <div>
                <h1 className='text-[40px] font-bold'>{AppText.hello}</h1>
                <h1 className='text-[40px] font-bold'>{AppText.Iam}
                    <span className='text-purple-600'>{AppText.WajidShaikh}</span></h1>
                <h1 className='text-gray-400 mt-4'>{AppText.IntroDesc}</h1>
                <button className='bg-purple-600 mt-4 p-2 px-3
            transition-all ease-in-out hover:scale-110 text-white
            rounded-xl'>Download CV</button>
            </div>
            <img src={homeImage} className='w-[300px] md:w-[400px]' alt="" />
        </div>
    )
}

export default Home
