import React from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import support from '../../images/support.jpg';
import quality from '../../images/quality.jpg';

const OurPolicy = () => {
  return (
    <div className="py-20 px-6 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-gray-700">
        
        {/* Easy Exchange Policy */}
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <FaExchangeAlt className="w-16 h-16 sm:w-24 sm:h-24 text-gray-600 mx-auto mb-4" />
          <p className="font-semibold text-lg sm:text-xl">Easy Exchange Policy</p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">We offer hassle-free exchange policy.</p>
        </div>

        {/* 3 Days Return Policy */}
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <img src={quality} alt="Quality" className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4" />
          <p className="font-semibold text-lg sm:text-xl">3 Days Return Policy</p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">We provide a 3-day free return policy.</p>
        </div>

        {/* Best Customer Support */}
        <div className="p-6 border rounded-lg shadow-md bg-white">
          <img src={support} alt="Support" className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4" />
          <p className="font-semibold text-lg sm:text-xl">Best Customer Support</p>
          <p className="text-gray-500 text-sm sm:text-base mt-2">We provide 24/7 customer support.</p>
        </div>
      
      </div>
    </div>
  );
}

export default OurPolicy;
