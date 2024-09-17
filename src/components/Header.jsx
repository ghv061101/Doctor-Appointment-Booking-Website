import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg px-6 md:px-10 lg:px-20 shadow-lg'>
      {/* {........Left Side.........} */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto md:py-[8vw] md:mb-[30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight drop-shadow-lg'>
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-28' src={assets.group_profiles} alt="Group Profiles" />
          <p className='leading-relaxed'>
            Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' />
            schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-gradient-to-r from-white to-gray-200 px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 hover:from-blue-300 hover:to-blue-500 transition-all duration-300 shadow-md'>
          Book appointment <img className='w-3' src={assets.arrow_icon} alt="Arrow Icon" />
        </a>
      </div>

      {/* ............Right Side............... */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg shadow-xl' src={assets.header_img} alt="Header Image" />
      </div>
    </div>
  );
};

export default Header;
