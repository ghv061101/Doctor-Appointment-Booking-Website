import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(''); // Store selected time slot

  const fetchDocInfo = async () => {
    if (doctors && doctors.length > 0) {
      const foundDoctor = doctors.find(doc => doc._id === docId);
      setDocInfo(foundDoctor);
    }
    setLoading(false);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots(prev => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!docInfo) {
    return <div>Doctor not found.</div>;
  }

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full sm:w-1/3">
          <img
            className="bg-primary w-full rounded-lg"
            src={docInfo.image}
            alt={`${docInfo.name}'s profile`}
          />
        </div>

        <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 shadow-lg">
          <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
            {docInfo.name}
            <img
              src={assets.verified_icon}
              alt="Verified Doctor"
              className="w-5 h-5"
            />
          </p>

          <p className="text-lg text-gray-700 mb-4">
            {docInfo.degree} - {docInfo.speciality}
            <button className="ml-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
              {docInfo.experience}
            </button>
          </p>

          <div>
            <p className="flex items-center gap-1 text-sm font-semibold text-gray-900">
              About <img src={assets.info_icon} alt="About Info" className="w-5 h-5" />
            </p>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mt-2 max-w-[700px] leading-relaxed">
              {docInfo.about}
            </p>
          </div>

          <p className="text-gray-500 font-medium mt-4">
            Appointment Fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>

      {/* Booking slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {docSlots.length > 0 && docSlots.map((item, index) => (
            <div 
              className={`text-center py-6 min-w-16 rounded-lg cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} 
              key={index} 
              onClick={() => {
                setSlotIndex(index);
                setSlotTime(''); // Reset selected time when changing the day
              }}
            >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>

        {/* Time slots for the selected day */}
        <div className="mt-4">
          {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
            <div 
              key={index} 
              className={`py-2 px-4 border rounded-lg cursor-pointer ${slotTime === item.time ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'}`}
              onClick={() => setSlotTime(item.time)} // Update selected time slot
            >
              {item.time.toLowerCase()}
            </div>
          ))}
        </div>
      </div>

      {/* Related doctors */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">Related Doctors</h3>
        {/* Render related doctors here */}
      </div>
    </div>
  );
};

export default Appointment;
