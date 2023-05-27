import React from 'react'
import { AppText, socialNetwork } from '../Constants'
import { wajid } from '../assets'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const [text] = useTypewriter({
        words:['Wajid Shaikh', 'Front-End Dev.', 'Back-End Dev.'],
        loop: {},
        typeSpeed:120,
    });
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md: pt-2 items-center mt-20 z-30' id='home' data-aos="fade-up">
            {/* <div className='mt-7 px-6 md:px-20 items-center flex flex-col md:flex-row'> */}
            <div className='p-7 md:p-10 col-span-2'>
                <h1 className='text-[35px] font-bold md:text-[70px]' data-aos="fade-up">{AppText.hello}</h1>
                <h1 className='text-[35px] font-bold md:text-[70px]'data-aos="fade-up">{AppText.Iam}
                    {/* <span className='text-purple-600 md:text-[70px]'>{AppText.WajidShaikh}</span></h1> */}
                    <span className='text-purple-600 md:text-[70px]'>{text}</span><span className='text-purple-600 md:text-[20px]'><Cursor cursorStyle=""/></span></h1>
                <h1 className='text-gray-400 mt-4' data-aos="fade-up">{AppText.IntroDesc}</h1>
                <div className='flex gap-4 justify-between'>
                    <button className='bg-purple-600 mt-4 p-2 px-3 transition-all ease-in-out hover:scale-105 text-white
                rounded-xl cursor-pointer shadow-2xl z-30' data-aos="fade-up">Download CV</button>
                    <div className='flex justify-end items-end gap-4' data-aos="fade-up">
                        {socialNetwork.map((item, index) => (
                            <div key={index} className=' transition-all ease-in-out hover:scale-110'>
                                <a href={item.url}>
                                    {/* <div className=' md:p-2 md:px-3'> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[40px] fill-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d={item.pathD} />
                                        </svg>
                                    {/* </div> */}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='grid justify-items-center mt-6 md:mt-0' >
                {/* <img src={Vector1} alt="" className=' absolute m-auto left-0 right-0 z-0 w-[310px] h-[420px] md:w-[400px] md:h-[400px]' />
                <img src={Vector2} alt="" className=' absolute m-auto left-0 right-0 z-10 w-[310px] h-[420px] md:w-[400px] md:h-[430px]' /> */}
                <div className='rounded-full bg-purple-600 hover:bg-purple-500 w-[310px] '>
                    <img src={wajid} className=' z-20 w-[290px] md:w-[300px] rounded-full bg-purple-500 pt-9 hover:bg-purple-600' alt="" data-aos="fade-up" />
                </div>
            </div>
        </div>

    )
}

export default Home
