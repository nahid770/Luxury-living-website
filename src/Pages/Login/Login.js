import React from 'react';
import logo from '../../Image_Icon/logo.png'
import google from '../../Image_Icon/google.png'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='pb-16 md:pb-32'>
           <div className='w-full'>
             <img className='w-28 mx-auto md:mt-16 mt-8' src={logo} alt="" />
           </div>
            <h2 className='md:text-2xl font-roboto text-xl font-bold text-center mt-20'>Login With</h2>
          
            <div className='w-full mt-8'>
            <Link to={'/register'} target='blank' className='text-lg flex items-center justify-center py-2 px-3 rounded-full border mt-10 w-2/3 md:w-2/6 text-center mx-auto '><img className='w-4 mr-2' src={google} alt="" /> Continue with google</Link>
            </div>
            <p className='text-lg text-center mt-2'>Don't have an account? <Link to={'/register'} className='text-indigo-700 underline cursor-pointer'>Create an account</Link></p>



          
            
        
        </div>
    );
};

export default Login;