import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../../Image_Icon/banner.png'

const Banner = () => {
    return (
       <div className='bg-[#F6F6F6]'>
             <div className='flex-col intertems-ce justify-center md:flex md:flex-row-reverse min-h-screen md:pt-20 pt-10 md:gap-28 bg-[#F6F6F6] mx-6 md:mx-40 lg:mx-46'>
            <div className='w-full'>
                <img className='md:max-w-sm max-w-xs shadow-xl rounded-sm mb-3 md:mb-0 mx-auto' src={banner} alt="" />
            </div>
            <div className='mx-auto md:mx-0 text-center md:text-start'>
                <h2 className='md:text-6xl text-4xl font-roboto font-bold md:w-80 py-8 md:py-6'>We Build Your Dream</h2>
                <p className='text-md font-poppins pb-8'>Online Easte Agency, the mordern way to sell your own home, You can use Griffin Residential to market your property</p>
                <Link to='/login' className='bg-indigo-500 px-10 py-3 rounded-md hover:bg-indigo-600 text-white text-md font-poppins '>Booking</Link>
            </div>
            
        </div>
       </div>
    );
};

export default Banner;