import React from 'react';
import avatar1 from '../../../Image_Icon/avatar.png'
import avatar2 from '../../../Image_Icon/avatar2.png'
import avatar3 from '../../../Image_Icon/avatar.png'
import { AiFillStar } from "react-icons/ai";

const TestimonialCard = () => {
    return (
        <div className='md:flex justify-center items-center md:my-20 gap-10 mx-6 md:mx-40 lg:mx-46 space-y-10'>
          <div className='max-w-sm bg-white md:mt-10 md:px-3  py-8 px-5 rounded-md shadow-xl'>
            <div className='testi-card flex md:justify-start justify-center items-center '>
                <div className="avatar mr-2">
                    <div className="w-16 rounded-full">
                        <img src={avatar1} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className='text-lg font-bold font-roboto'>Nash Patrik</h2>
                    <h4 className='font-roboto text-sm'>CEO, Manpol</h4>
                </div>
            </div>
            <div>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <div className="flex justify-start items-center">
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                </div>
            </div>
          </div>
          {/* card */}
          <div className='max-w-sm bg-white indigo-600 md:px-3 py-8 px-5 rounded-md shadow-xl'>
            <div className='testi-card flex md:justify-start justify-center items-center'>
                <div className="avatar mr-2">
                    <div className="w-16 rounded-full">
                        <img src={avatar2} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className='text-lg font-bold font-roboto'>Miriam Barron</h2>
                    <h4 className='font-roboto text-sm'>CEO, Manpol</h4>
                </div>
            </div>
            <div>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <div className="flex justify-start items-center">
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                </div>
            </div>
          </div>
          {/* second card */}
          <div className='max-w-sm bg-white indigo-600 md:px-3 py-8 rounded-md shadow-xl px-5'>
            <div className='testi-card flex md:justify-start justify-center  items-center'>
                <div className="avatar mr-2">
                    <div className="w-16 rounded-full">
                        <img src={avatar3} alt="" />
                    </div>
                </div>
                <div>
                    <h2 className='text-lg font-bold font-roboto'>Bria Malone</h2>
                    <h4 className='font-roboto text-sm'>CEO, Manpol</h4>
                </div>
            </div>
            <div>
                <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <div className="flex justify-start items-center">
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                        <AiFillStar className='text-yellow-400'></AiFillStar>
                </div>
            </div>
          </div>
        </div>
    );
};

export default TestimonialCard;