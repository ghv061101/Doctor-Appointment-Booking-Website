import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div >

      <div className="text-2xl font-bold text-gray-900 text-center mb-6">
        ABOUT <span className="text-black-500">US</span>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
       
        <img 
          src={assets.about_image} 
          alt="About Us" 
          className="w-full md:max-w-[360px]"
        />
        

        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p className="">
          Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. 
          At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p className="">
          Prescripto is committed to excellence in healthcare technology. 
          We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. 
          Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <p className='text-gray-800 font-bold'>
          Our vision
          </p>
          <p className="">
            Our vision is to create a healthier world where everyone has access to the medical care they need, 
            when they need it. Join us in our mission to improve healthcare accessibility for all.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      
    </div>
  );
};

export default About;
