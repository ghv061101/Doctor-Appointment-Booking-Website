import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      {/* left */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white'>
          <p className='tracking-wide drop-shadow-lg'>Book Appointment</p>
          <p className='mt-4 text-white/90 tracking-wider'>With 100+ Trusted Doctors</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-gradient-to-r from-white to-gray-200 text-sm sm:text-base text-gray-700 py-2 px-6 rounded-full mt-6 hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 shadow-lg'>
          Create account
        </button>
      </div>
      {/* right */}
      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md shadow-xl rounded-lg' src={assets.appointment_img} alt="Appointment illustration" />
      </div>
    </div>
  );
};

export default Banner;
