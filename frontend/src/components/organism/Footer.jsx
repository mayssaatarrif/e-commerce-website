import React from 'react';
import logo from '../../images/logo.jpg';

const Footer = () => {
  return (
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 sm:gap-16 my-10 mt-40 text-sm px-6 sm:px-8'>
        <div className="flex flex-col items-center sm:items-start">
            <img src={logo} alt='' className='mb-5 w-32'/>
            <p className='w-full sm:w-2/3 text-gray-600 text-center sm:text-left'>
                Discover the finest selection of premium yarns.
            </p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
            <p className='text-lg sm:text-2xl font-semibold mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="flex flex-col items-center sm:items-start">
            <p className='text-lg sm:text-xl font-semibold mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+961 12345678</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
        <div className="col-span-3 mt-8">
            <hr className='border-gray-300'/>
            <p className='py-5 text-xs sm:text-sm text-center text-gray-500'>
                Copyright 2025@ yarnstore.com - All Right Reserved.
            </p>
        </div>
    </div>
  );
};

export default Footer;
