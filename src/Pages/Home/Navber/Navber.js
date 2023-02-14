import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image_Icon/logo.png'

const Navber = () => {
    return (
        <div>
            <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/project'>Projects</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                </ul>
                </div>
                    <div>
                        <img className='w-16' src={logo} alt="" />
                    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><Link className='font-poppins hover:text-gray-600' to='/'>Home</Link></li>
                <li><Link className='font-poppins hover:text-gray-600' to='/aboutus'>About Us</Link></li>
                <li><Link className='font-poppins hover:text-gray-600' to='/project'>Projects</Link></li>
                <li><Link className='font-poppins hover:text-gray-600' to='/contact'>Contact</Link></li>
                <li><Link className='font-poppins hover:text-gray-600' to='/admin'>Admin</Link></li>
                
               
             
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className='bg-indigo-500 px-4 py-2 rounded-sm hover:bg-indigo-600 text-white text-md font-poppins'>Login</Link>
            </div>
            </div>
        </div>
    );
};

export default Navber;