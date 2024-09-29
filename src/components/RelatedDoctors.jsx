import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const RelatedDoctors = ({ speciality, docId }) => {
    const { doctors } = useContext(AppContext);
    const [relDoc, setRelDocs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId);
            setRelDocs(doctorData);
        }
    }, [doctors, speciality, docId]);

    if (relDoc.length === 0) {
        return <div>No related doctors found.</div>;
    }

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h2 className="text-2xl font-medium">Related Doctors</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {relDoc.map((item, index) => (
                    <div
                        onClick={() => navigate(`/appointment/${item._id}`)} // Fixed the template literal here
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
                        key={index}
                    >
                        <img className='bg-blue-50' src={item.image} alt={`${item.name}'s profile`} />
                        <div className='p-4'>
                            <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                                <p>Available</p>
                            </div>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RelatedDoctors;
