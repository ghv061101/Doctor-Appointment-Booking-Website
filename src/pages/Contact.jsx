import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img 
          src={assets.contact_image} 
          alt="Contact Us" 
          className="w-full md:w-[360px] rounded shadow" 
        />

        <div>
          <h2 className='text-lg font-semibold'>Our Office</h2>
          <address className='text-gray-600'>
            <p>54709 Willms Station <br /> Suite 350, Washington, USA</p>
            <p>Tel: <a href="tel:+14155550132">(415) 555‑0132</a> <br /> Email: <a href="mailto:greatstackdev@gmail.com">greatstackdev@gmail.com</a></p>
          </address>
          <h3 className='mt-4 text-lg'>Careers at PRESCRIPTO</h3>
          <p>Learn more about our teams and job openings.</p>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
