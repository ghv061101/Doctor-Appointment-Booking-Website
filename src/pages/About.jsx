import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <div className="text-3xl font-bold text-gray-900 text-center mb-6">
        ABOUT <span className="text-black-500">US</span>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
       
        <img 
          src={assets.about_image} 
          alt="About Us" 
          className="w-full h-64 md:max-w-[360px] object-cover rounded-lg shadow-md"
        />
        
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-base text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. 
            At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. 
            We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. 
            Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <p className='text-gray-800 font-bold'>
            Our Vision
          </p>
          <p>
            Our vision is to create a healthier world where everyone has access to the medical care they need, 
            when they need it. Join us in our mission to improve healthcare accessibility for all.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <b>Quality Care</b>
          <p>We provide exceptional healthcare services tailored to your needs, ensuring that you receive the best possible treatment.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <b>Accessibility</b>
          <p>Book appointments easily from the comfort of your home. Our platform is designed to be user-friendly and accessible for everyone.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <b>Expert Team</b>
          <p>Our professionals are here to guide you through your healthcare journey. With years of experience, our team is dedicated to your health.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <b>Personalized Experience</b>
          <p>We understand that every patient is unique. Our services are tailored to meet your specific needs and preferences.</p>
        </div>
      </div>

      {/* <div className='my-6'>
        <h2 className='text-2xl font-semibold text-gray-900'>Our Core Values</h2>
        <p className='text-gray-600 mt-2'>
          At Prescripto, we believe in the following core values that guide our operations and interactions with patients:
        </p>
        <ul className='list-disc list-inside mt-4 text-gray-600'>
          <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.</li>
          <li><strong>Compassion:</strong> We treat our patients with care and empathy, recognizing the human side of healthcare.</li>
          <li><strong>Innovation:</strong> We embrace change and strive to improve our services continuously through innovative solutions.</li>
          <li><strong>Collaboration:</strong> We believe in teamwork and working together with patients and healthcare providers to achieve better outcomes.</li>
        </ul>
      </div> */}

      {/* <div className='my-6'>
        <h2 className='text-2xl font-semibold text-gray-900'>Get Involved</h2>
        <p className='text-gray-600 mt-2'>
          We invite you to join our community! Whether you're a healthcare provider looking to partner with us, or a patient wanting to take charge of your health, 
          we welcome you with open arms. Together, we can create a healthier future for everyone.
        </p>
      </div> */}
      
    </div>
  );
};

export default About;
