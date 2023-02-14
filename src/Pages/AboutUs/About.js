import React from 'react';
import { Link } from 'react-router-dom';
import aboutus from '../../Image_Icon/aboutus.jpg'

const About = () => {
    return (
        <div className=' mx-6 md:mx-40 lg:mx-46'>
            <h2 className='text-lg md:text-2xl text-center mt-6 font-roboto'>About us</h2>

            <div className='md:flex justify-center items-start gap-10 md:gap-24 mt-10 md:mb-32'>
                <img className='max-w-xs md:max-w-sm rounded-md' src={aboutus} alt="" />
                <div className='mb-20'>
                    <h2 className='text-xl md:text-3xl font-roboto pb-3 mt-10'>Who we are?</h2>
                    <p className='text-md font-roboto mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas voluptatum est repudiandae molestiae deleniti excepturi! Cupiditate omnis neque, exercitationem fugiat earum architecto vero laboriosam assumenda nesciunt voluptatum veniam est labore temporibus ad sunt eaque tempora repellendus optio vel ab doloremque.</p>

                    <Link to='/login' className='bg-indigo-500 px-8 py-2  rounded-sm hover:bg-indigo-600 text-white text-md font-poppins'>Booking</Link>
                </div>
            </div>
        </div>
    );
};

export default About;