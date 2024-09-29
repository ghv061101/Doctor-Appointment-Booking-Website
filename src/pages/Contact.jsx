import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4">
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28 text-sm'>
        <img 
          src={assets.contact_image} 
          alt="Contact Us" 
          className="w-full md:max-w-[360px] rounded shadow" 
        />

        <div className="md:w-1/2">
          {!showForm ? (
            <div className='flex flex-col justify-center item-start gap-4'>
              <h2 className='text-lg font-semibold'>Our Office</h2>
              <address className='text-gray-600'>
                <p>54709 Willms Station <br /> Suite 350, Washington, USA</p>
                <p>Tel: <a href="tel:+14155550132">(415) 555‑0132</a> <br /> Email: <a href="mailto:greatstackdev@gmail.com">greatstackdev@gmail.com</a></p>
              </address>
              <h3 className='mt-4 text-lg'>Careers at PRESCRIPTO</h3>
              <p>Learn more about our teams and job openings.</p>
              <button 
                className="mt-2 px- py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                onClick={handleButtonClick}
              >
                Explore Jobs
              </button>
            </div>
          ) : (
            <div className="relative mt-4 p-4 border rounded shadow">
              <button 
                className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-red-600 transition"
                onClick={handleCloseForm}
              >
                &times;
              </button>

              <h4 className="text-lg font-semibold">Job Application Form</h4>
              <form>
                <div className="mb-2">
                  <label className="block text-sm">Full Name</label>
                  <input type="text" required className="border w-full px-2 py-1" />
                </div>

                <div className="mb-2">
                  <label className="block text-sm">Email</label>
                  <input type="email" required className="border w-full px-2 py-1" />
                </div>

                <div className="mb-2">
                  <label className="block text-sm">Resume (URL)</label>
                  <input type="url" className="border w-full px-2 py-1" />
                </div>

                <div className="mb-2">
                  <label className="block text-sm">Specialty</label>
                  <select className="border w-full px-2 py-1" required>
                    <option value="">Select Specialty</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Full Stack Developer">Full Stack Developer</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="Project Manager">Project Manager</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label className="block text-sm">Years of Experience</label>
                  <input type="number" min="0" className="border w-full px-2 py-1" placeholder="e.g., 3" required />
                </div>

                <div className="mb-2">
                  <label className="block text-sm">Location</label>
                  <input type="text" className="border w-full px-2 py-1" placeholder="City, Country" required />
                </div>

                <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                  Submit Application
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
