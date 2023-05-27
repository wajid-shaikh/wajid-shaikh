import React from 'react'
import { AppText, CompanyImage } from '../Constants'

const Companies = () => {
    return (
        <div id='companies' className='bg-purple-200 p-5' data-aos="fade-up">
            <div className='flex justify-center items-center flex-col'>
                <div data-aos="fade-up">
                    <h1 className='text-[30px] md:text-[40px] font-bold md:text-center'>{AppText.CompaniesI} <span className=' text-purple-600'>{AppText.WorkedFor}</span></h1>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 m-3' >
                {CompanyImage.map((item, index)=>(
                    <div className='m-3 transition-all ease-in-out hover:scale-110' key={index} data-aos="fade-up">
                        <img src={item.imageUrl} alt="" className='h-[60px]'/>
                    </div>
                ))}
              </div>
            </div>
        </div>
    )
}

export default Companies
