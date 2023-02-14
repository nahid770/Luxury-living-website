import React from 'react';
import card1 from '../../Image_Icon/card1.png'
import card2 from '../../Image_Icon/card2.png'
import card3 from '../../Image_Icon/card3.png'
import { FaMapMarkerAlt } from "react-icons/fa";

const Projects = () => {
    return (
        <div className='my-10'>
            <div className=' mx-auto' >
                <p className='text-indigo-700 text-center  text-md md:text-xl font-bold font-roboto'>Projects</p>
                <h2 className=' text-black md:text-5xl text-center  text-3xl  pt-2 pb-16 max-w-xl mx-auto font-roboto font-bold px-2 md:px-0'>Discover the latest Interior Design available today</h2>
                {/* card */}
                <div className=' md:flex justify-center items-center md:gap-5 gap-y-15'>
                    <div className="card bg-base-100  max-h-96">
                        <figure><img className='max-w-xs' src={card1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-md ">Villa on Washington Avenue</h2>
                            <p className='flex justify-center items-center'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <span className='ml-2'>Dhaka, Bangladesh</span>
                            </p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100  max-h-96">
                        <figure><img className='max-w-xs' src={card2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-md ">Luxury villa in Rego Park</h2>
                            <p className='flex justify-center items-center'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <span className='ml-2'>Faridpur, Bangladesh</span>
                            </p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 max-h-96">
                        <figure><img className='max-w-xs' src={card3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-md ">Gorgeous house</h2>
                            <p className='flex justify-center items-center'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <span className='ml-2'>Sylet, Bangladesh</span>
                            </p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* Card end */}
                </div>
                
        </div>
    );
};

export default Projects;