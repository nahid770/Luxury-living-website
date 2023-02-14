import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../Image_Icon/google.png'
import './Register.css'

const Register = () => {
    return (
        <div>
            

        <div className='w-full '>
            <div className='mx-auto  flex flex-col justify-center items-center w-5/6 md:w-1/3 border py-6 mt-8 p-4 md:p-0'>
            <h2 className='text-center md:text-xl font-roboto font-light text-lg md:mt-5  pb-1'>Create an account</h2>
                <input type="text" placeholder="First name " className="input-style w-full max-w-xs outline-none text-lg py-2 my-1" />
                <input type="text" placeholder="Last name " className="input-style w-full max-w-xs outline-none text-lg py-2 my-1" />
                <input type="email" placeholder="Email address " className="input-style w-full max-w-xs outline-none text-lg py-2 my-1" />
                <input type="password" placeholder="Password " className="input-style w-full max-w-xs outline-none text-lg py-2 my-1" />
                <input type="password" placeholder="Confirm Password " className="input-style w-full max-w-xs outline-none text-lg py-2 my-1" />
                <Link to={'/login'} className='py-2 my-6 bg-indigo-500 hover:bg-indigo-600 w-2/3 text-center text-white text-lg font-roboto rounded-sm' >Create an account</Link>
                <p className='text-lg font-roboto pb-3'>Already have an account?  <Link to={'/login'} className='text-indigo-800 underline' >Login</Link></p>
            </div>
        </div>

            {/* divider OR */}
            <div className="flex w-64  md:w-96 mx-auto  flex-row items-center ">
                <div className="grid flex-grow  h-[1px] bg-gray-300 place-items-center"></div> 
                <div className="divider lg:divider-horizontal">OR</div> 
                <div className="grid flex-grow h-[1px]  bg-gray-300 place-items-center"></div>
            </div>

            <div className=''>
            <Link to={'/register'} target='blank' className='text-lg flex items-center justify-center py-2 px-3 rounded-full border mt-1 mb-32 w-2/3 md:w-2/6 text-center mx-auto '><img className='w-4 mr-2' src={google} alt="" /> Continue with google</Link>
            </div>
        </div>
    );
};

export default Register;