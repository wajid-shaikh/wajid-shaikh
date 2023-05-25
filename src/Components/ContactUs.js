import React from 'react'
import { AppText } from '../Constants'
import { contactusbg, phone } from '../assets'

const ContactUs = () => {
    return (
        <div className='flex flex-col justify-center mt-5' id='contact-me'>
            <div className='flex flex-row  justify-center '>
                <div>
                    <h1 className='text-[40px] font-bold'>{AppText.Contact} <span className=' text-purple-600'>{AppText.Me}</span></h1>
                </div>
                <img src={phone} alt="" className='w-[80px] ml-4' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44'>
                <img src={contactusbg} alt="" className='w-[300px] mr-10' />
                <div className='w-full'>
                    <div className='flex flex-col '>
                        <label htmlFor="" className='text-gray-400 '>Email</label>
                        <input type="text" className='border-[1.5px] px-2 border-purple-300  hover:border-purple-500 rounded-md' placeholder='Enter Your Email address' />
                    </div>
                    <div className='flex flex-col '>
                        <label htmlFor="" className='text-gray-400 '>Message</label>
                        <textarea type="text" rows="7" className='border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md' placeholder='Enter Your Message' />
                    </div>
                    <div className='flex flex-col'>
                        <button className='transition-all ease-in-out hover:scale-110 bg-purple-500 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 text-white  rounded-md'>Submit<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
