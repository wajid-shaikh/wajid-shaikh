import React, { useState } from 'react'
import { AppText } from '../Constants'
import { contactusbg, phone } from '../assets'

const ContactUs = (props) => {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    const validate = ()=>{
        const errors = {}
        if(email===''){
            errors.email= "Email is Required";
        }
        if(message===''){
            errors.message= "Message is Required";
        }
        return Object.keys(errors).length===0?null:errors;
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        const errors = validate();
        if(errors){
            setEmailError(errors.email);
            setMessageError(errors.message);
        }
        else{
            setEmailError("");
            setMessageError("");
            setEmail('');
            setMessage('')
        }

    }

    return (
        <div className='flex flex-col justify-center mt-10' id='contact-me'>
            <div className='flex flex-row  justify-center ' data-aos="fade-up">
                <div>
                    <h1 className={`text-[40px] font-bold ${props.mode ? 'text-gray-400' : ''}`}>{AppText.Contact} <span className=' text-purple-600'>{AppText.Me}</span></h1>
                </div>
                <img src={phone} alt="" className='w-[80px] h-14 ml-4' />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly px-10 md:px-44 mt-12'>
                <img src={contactusbg} alt="" className='w-[300px] ml-10 md:mr-10 ' data-aos="fade-up" />
                <div data-aos="fade-up">
                    <div className={`w-full  p-2 md:p-5 rounded ${props.mode ? 'bg-purple-400' : 'bg-purple-600'}`}>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col '>
                                <label htmlFor="email" className={`${props.mode ? 'text-white' : 'text-white'}`}>Email</label>
                                <input type="text" id='email' value={email} className='border-[1.5px] px-2 border-purple-300  hover:border-purple-500 rounded-md' placeholder='Enter Your Email address' onChange={(e)=>{setEmail(e.target.value)}} />
                                <div className=' text-red-600 text-sm'>{emailError}</div>
                            </div>
                            <div className='flex flex-col '>
                                <label htmlFor="message" className={`${props.mode ? 'text-white' : 'text-white'}`}>Message</label>
                                <textarea type="text" id='message' value={message} rows="7" className='border-[1.5px] px-2 hover:border-purple-500 border-purple-300 rounded-md' placeholder='Enter Your Message' onChange={(e)=>{setMessage(e.target.value)}}  />
                                <div className=' text-red-600 text-sm'>{messageError}</div>
                            </div>
                            <div className='flex flex-col overflow-hidden'>
                                <button className={`transition-all ease-in-out hover:scale-110 flex flex-row items-center justify-center text-[14px]  py-1 mt-5 ${!props.mode?'text-white bg-purple-400':'text-white bg-purple-500'}  rounded-md`}>Submit
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="ml-2 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"></path></svg> */}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
