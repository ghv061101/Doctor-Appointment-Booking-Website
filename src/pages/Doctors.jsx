import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleSpecialityClick = (speciality) => {
    navigate(`/doctors/${speciality}`);
  };

  return (
    <div className="flex flex-col sm:flex-row mt-5">
      {/* Left Side: Specialties */}
      <div className="w-full sm:w-1/4 mb-5 sm:mb-0 sm:mr-8">
        <p className="font-semibold mb-4 text-left text-gray-700">Specialties</p>
        <div className="flex flex-col space-y-3">
          {/* Clickable Specialties */}
          <p onClick={() => handleSpecialityClick('General Physician')} className="cursor-pointer hover:underline">General Physician</p>
          <p onClick={() => handleSpecialityClick('Gynecologist')} className="cursor-pointer hover:underline">Gynecologist</p>
          <p onClick={() => handleSpecialityClick('Dermatologist')} className="cursor-pointer hover:underline">Dermatologist</p>
          <p onClick={() => handleSpecialityClick('Pediatricians')} className="cursor-pointer hover:underline">Pediatrician</p>
          <p onClick={() => handleSpecialityClick('Neurologist')} className="cursor-pointer hover:underline">Neurologist</p>
          <p onClick={() => handleSpecialityClick('Gastroenterologist')} className="cursor-pointer hover:underline">Gastroenterologist</p>
        </div>
      </div>

      {/* Right Side: Doctors Grid */}
      <div className="w-full sm:w-3/4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4"> {/* 5 columns on large screens */}
          {filterDoc.map((item) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500"
              key={item._id}
            >
              <img className="bg-blue-50 w-full h-32 object-cover" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
