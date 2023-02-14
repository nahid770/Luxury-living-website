import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className='my-24 md:mb-40'>
                <p className='text-indigo-700 text-center  text-lg md:text-xl font-bold font-roboto'>Contact</p>
                <h2 className=' text-black md:text-5xl text-center  text-3xl  pt-2 pb-16 max-w-xl mx-auto font-roboto font-bold px-2 md:px-0'>Let us handle your 
                project, professionally.</h2>

          <div className='text-center md:text-start'>
            <div className='md:flex justify-center items-center gap-10 mb-6'>
                <input type="text" placeholder="Full Name" className="input w-full max-w-xs border-none bg-[#F1F3F6] mb-5 md:mb-0" />
                <input type="text" placeholder="Last Name" className="input w-full max-w-xs border-none bg-[#F1F3F6] " />
            </div>
            <div className='md:flex justify-center items-center gap-10 mb-6'>
                <input type="email" placeholder="Email Address" className="input w-full max-w-xs border-none bg-[#F1F3F6] mb-5 md:mb-0" />
                <input type="number" placeholder="Phone Number" className="input w-full max-w-xs border-none bg-[#F1F3F6]" />
            </div>
          </div>
                <div className=' text-center'>
                    <textarea type='textarea' placeholder='your message' className='bg-[#F1F3F6] md:w-2/3 w-full h-28 p-3 border-none outline-none rounded-md' ></textarea>
                </div>

                <div className='w-full text-center mt-6'>
                    <Link to='/login' className='bg-indigo-500  px-6  py-3 hover:bg-indigo-600 text-white text-md font-poppins rounded-md'>Send Message</Link>
                </div>
        </div>
    );
};

export default ContactUs;