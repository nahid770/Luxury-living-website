import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../../Image_Icon/service1.png'
import service2 from '../../Image_Icon/service2.png'
import service3 from '../../Image_Icon/service3.png'

const Service = () => {
    return (
        <div className='mx-auto '>
            <div>
                <p className='text-indigo-700 text-center  text-md md:text-xl font-bold font-roboto'>Service</p>
                <h2 className=' text-black md:text-5xl text-center  text-3xl  pt-2 pb-16 max-w-xl mx-auto font-roboto font-bold px-2 md:px-0'>We're an agency tailored to all client's needs that always delivers</h2>
            </div>
            <div className=' md:flex justify-center items-center space-y-10 md:space-y-0 md:mb-20 mb-16'>
                    <div className="card  bg-base-100  ">
                        <figure><img className='w-20' src={service1} alt="Shoes" /></figure>
                        <div className="card-body p-4">
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-lg ">Office Interior Design</h2>
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-md ">$299</h2>
                            
                            <p className='text-center text-sm font-roboto'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card  p-2  shadow-2xl">
                        <figure><img className='w-20' src={service2} alt="Shoes" /></figure>
                        <div className="card-body p-4">
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-md ">Showroom Design</h2>
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-md ">$399</h2>
                            <p className='text-center text-sm font-roboto'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100  m">
                        <figure><img className='w-20' src={service3} alt="Shoes" /></figure>
                        <div className="card-body p-4">
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-md ">Residential/ Home</h2>
                            <h2 className="text-center text-indigo-700 font-bold font-roboto md:text-md ">$499</h2>
                           <p className='text-center text-sm font-roboto'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            <div className="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full text-center'>
                    <Link to='/login' className='bg-indigo-500  px-14  py-3 rounded-sm hover:bg-indigo-600 text-white text-md font-poppins '>Booking</Link>
                </div>
        </div>
    );
};

export default Service;