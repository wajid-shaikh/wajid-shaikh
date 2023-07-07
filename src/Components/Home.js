import React from 'react'
import { AppText, socialNetwork, } from '../Constants'
import { resume, wajid } from '../assets'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const zipFile = "http://localhost:3000/extension.zip";

const Home = (props) => {
    const [text] = useTypewriter({
        words: ['Wajid Shaikh', 'Front-End Dev.', 'Back-End Dev.'],
        loop: {},
        typeSpeed: 120,
    });

    const downloadFIle = (url)=>{
        const fileName = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("dowload", fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 md: pt-1 items-center mt-[73px] z-30' id='home' data-aos="fade-up">
            <div className='p-7 md:p-10 col-span-2'>
                <h1 className={`${props.mode} text-[35px] font-bold md:text-[70px]`}>{AppText.hello}</h1>
                <h1 className={`${props.mode} text-[35px] font-bold md:text-[70px]`}>{AppText.Iam}
                    <span className='text-purple-600 md:text-[70px]'>{text}</span><span className='text-purple-600 md:text-[20px]'><Cursor cursorStyle="" /></span></h1>
                <h1 className='text-gray-400 mt-4' data-aos="fade-up">{AppText.IntroDesc}</h1>
                <div className='flex gap-4 justify-between'>
                    <a href={resume} download="Resume" className='z-30'>
                        <button className='bg-purple-600 mt-4 p-2 px-3 transition-all ease-in-out hover:scale-105 text-white rounded-xl cursor-pointer shadow-2xl '>Download CV</button>
                    </a>
                    <button onClick={()=>{downloadFIle(zipFile)}}>chrome Extention</button>
                    <div className='flex justify-end items-end gap-4' data-aos="fade-up">
                        {socialNetwork.map((item, index) => (
                            <div key={index} className=' transition-all ease-in-out hover:scale-110'>
                                <a href={item.url}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[30px] w-[40px] fill-purple-600" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={item.pathD} />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='grid justify-items-center mt-6 md:mt-0' >
                <div className='rounded-full bg-purple-600 hover:bg-purple-500 w-[310px] '>
                    <img src={wajid} className=' z-20 w-[290px] md:w-[300px] rounded-full bg-purple-500 pt-9 hover:bg-purple-600' alt="" data-aos="fade-up" />
                </div>
            </div>
        </div>

    )
}

export default Home
