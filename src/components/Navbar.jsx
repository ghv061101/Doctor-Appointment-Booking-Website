import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate=useNavigate();

    const [showMenu,setShowMenu]=useState(false);
    const [token,setToken]=useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li>
          <NavLink to='/' className='relative group'>
            <span className='py-1'>Home</span>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/doctors' className='relative group'>
            <span className='py-1'>All Doctors</span>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='relative group'>
            <span className='py-1'>About</span>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='relative group'>
            <span className='py-1'>Contact</span>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center gap-4'>

        {
            token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
                    <div className='min-w-48 bg-stone-100 rounded flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer '>My profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer '>MY Appointment</p>
                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer '>Logout</p>
                    </div>
                </div>
            </div>
            :<button onClick={()=>navigate('/login')} className='bg-blue-500 text-white px-4 py-2 rounded'>Create account</button>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
