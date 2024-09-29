import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Left Section - Logo and Description */}
        <div className="flex flex-col space-y-4">
          <img src={assets.logo} alt="Logo" className="w-32" />
          <p className="text-gray-400 text-sm">
            We offer appointments with the best doctors available. Our goal is to make healthcare easily accessible and trustworthy.
          </p>
        </div>

        {/* Center Section - Company Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-blue-400">Company</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-blue-400">Contact Us</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Email: info@doctorsbooking.com</li>
            <li>Phone: +123-456-7890</li>
            <li>Address: 123 Health Street, New York, NY</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold text-blue-400">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        <p>&copy; 2024 DoctorsBooking. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
