import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchDocInfo = async () => {
    if (doctors && doctors.length > 0) {
      const foundDoctor = doctors.find(doc => doc._id === docId);
      setDocInfo(foundDoctor);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!docInfo) {
    return <div>Doctor not found.</div>;
  }

  return (
    <div className="p-6">
      {/* Flex container with minimized gap */}
      <div className="flex flex-col sm:flex-row gap-2">
        {/* Doctor Image */}
        <div className="w-full sm:w-1/3">
          <img
            className="bg-primary w-full rounded-lg"
            src={docInfo.image}
            alt={`${docInfo.name}'s profile`}
          />
        </div>

        {/* Doctor Details */}
        <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/* Doctor Name */}
          <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
            {docInfo.name}
            <img
              src={assets.verified_icon}
              alt="Verified Doctor"
              className="w-5 h-5"
            />
          </p>

          {/* Speciality and Experience */}
          <p className="text-lg text-gray-700 mb-4">
            {docInfo.degree} - {docInfo.speciality}
            <button className="ml-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
              {docInfo.experience}
            </button>
          </p>

          {/* About Section */}
          <div>
            <p className="flex items-center gap-1 text-large font-semibold text-gray-900">
              About <img src={assets.info_icon} alt="About Info" className="w-3 h-5" />
            </p>
            {/* Responsive text sizes for all screens */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-2 max-w-[700px] leading-relaxed">
              {docInfo.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
