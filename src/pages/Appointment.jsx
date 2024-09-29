import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [docInfo, setDocInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(''); // Store selected time slot

  // Fetch doctor information based on the docId from URL
  const fetchDocInfo = () => {
    const foundDoctor = doctors?.find(doc => doc._id === docId);
    setDocInfo(foundDoctor);
    setLoading(false);
  };

  // Get available appointment slots for the next 7 days
  const getAvailableSlots = () => {
    const today = new Date();
    const slots = Array.from({ length: 7 }, (_, i) => {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      const timeSlots = [];
      const startHour = today.getDate() === currentDate.getDate() ? Math.max(today.getHours() + 1, 10) : 10;

      for (let hour = startHour; hour < 21; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const slotTime = new Date(currentDate);
          slotTime.setHours(hour, minute);
          if (slotTime < endTime) {
            timeSlots.push({
              datetime: slotTime,
              time: slotTime.toLocaleString([], { hour: '2-digit', minute: '2-digit' }),
            });
          }
        }
      }

      return timeSlots;
    });
    
    setDocSlots(slots);
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
          <img className="bg-primary w-full rounded-lg" src={docInfo.image} alt={`${docInfo.name}'s profile`} />
        </div>

        <div className="flex-1 border border-gray-300 rounded-lg p-6 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 shadow-lg">
          <p className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
            {docInfo.name}
            <img src={assets.verified_icon} alt="Verified Doctor" className="w-5 h-5" />
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
              className={`text-center py-6 min-w-16 rounded-lg cursor-pointer ${slotIndex === index ? 'bg-black-200 text-white' : 'border border-gray-200'}`} 
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
        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
            <div 
              key={index} 
              className={`py-2 px-4 border rounded-lg cursor-pointer ${slotTime === item.time ? 'bg-blue-500 text-white' : 'bg-white text-gray-200'}`}
              onClick={() => setSlotTime(item.time)} // Update selected time slot
            >
              {item.time.toLowerCase()}
            </div>
          ))}
        </div>
        <hr className="my-4" />
        <button className='bg-primary text-white text-sm  px-14 py-3 rounded-full'>
          Book an Appointment
        </button>
      </div>

      {/* Related doctors */}
      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
    </div>
  );
};

export default Appointment;
