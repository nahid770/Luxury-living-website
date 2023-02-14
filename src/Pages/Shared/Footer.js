import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        
        <div>
            <div className=' md:h-60 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10'>
            <div className='flex justify-start '>
                <FaMapMarkerAlt className='text-white mr-2'></FaMapMarkerAlt>
                <p className='text-white text-sm'>H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh </p>
            </div>
            <div className='mx-auto'>
                <h2 className='text-xl text-white text-start pb-2 font-roboto'>Company</h2>
               <ul className='text-start'> 
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>About</a></li>
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Project</a></li>
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Our Team</a></li>
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Terms Conditions</a></li>
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Submit Listing</a></li>
               </ul>
            </div>
            <div className='pl-4 md:pl-0'>
                <h2 className='text-xl text-white text-start pb-2 font-roboto mt-6 md:mt-0 '>Quick Links</h2>
                <ul className='text-start'> 
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Quick Links</a></li>
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Rentals</a></li>
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Sales</a></li>
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Contact</a></li>
                <li><a className='text-white md:text-sm text-xs font-roboto font-thin' href=' '>Our blog</a></li>
               </ul>
            </div>
            <div>
                <h2 className='text-xl text-white text-start font-roboto pb-2 mt-6 md:mt-0'>About us</h2>
                <p className='text-white text-xs md:text-sm font-roboto font-thin '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>

                <div className='flex justify-start items-center mt-3'>
                    <FaFacebookF className='text-white w-5 h-5 mr-3 '></FaFacebookF>
                    <FaInstagram className='text-white w-6 h-6 mr-3 '></FaInstagram>
                    <FaLinkedin  className='text-white w-6 h-6 mr-3 '></FaLinkedin>
                    <FaYoutube   className='text-white w-7 h-7  '></FaYoutube>
                </div>
            </div>
        </div>

        <p className='text-center text-xs font-roboto py-6 text-white'>Copyright 2023. Made by Dev_Nahid</p>
        </div>
    );
};

export default Footer;