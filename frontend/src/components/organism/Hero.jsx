import React from 'react';
import hero from '../../images/hero.jpg';

const Hero = () => {
  console.log('Hero component is rendering');
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center px-6 sm:px-12 py-16 sm:py-24 mt-16 sm:mt-20">
      
      {/* Larger Box Wrapping Text & Image */}
      <div className="w-full max-w-4xl bg-gray-50 border border-gray-400 shadow-xl rounded-xl p-8 sm:p-12 flex flex-col sm:flex-row items-center">
        
        {/* Left Side (Text) */}
        <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start text-center sm:text-left px-4 sm:px-8">
          <div className="text-[#414141] w-full">
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <hr className="border-[#414141] border-t-2 w-20 sm:w-28" />
              <p className="font-semibold text-sm sm:text-lg uppercase tracking-widest">
                Our Best Sellers
              </p>
            </div>
            <h1 className="text-4xl sm:py-4 lg:text-6xl leading-tight sm:leading-snug font-bold prata-regular">
              Latest Arrivals
            </h1>
            <div className="flex items-center gap-3 justify-center sm:justify-start mt-6">
              <p className="font-semibold text-sm sm:text-base cursor-pointer hover:text-gray-700 transition duration-200">
                Shop Now
              </p>
              <hr className="border-[#414141] border-t-2 w-20 sm:w-28" />
            </div>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-8 sm:mt-0">
          <img 
            src={hero} 
            alt="Hero" 
            className="w-full max-w-[350px] sm:max-w-[450px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>

    </div>
  );
};

export default Hero;
