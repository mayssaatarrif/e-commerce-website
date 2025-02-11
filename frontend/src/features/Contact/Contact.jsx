import React from 'react';
import Title from '../../components/molecule/Title';
import contact from '../../images/contact.avif';
import NewsLetterBox from '../../components/organism/NewsLetterBox';

const Contact = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24'>
        <div className='text-xl sm:text-2xl text-center pt-6 sm:pt-10 border-t'>
            <Title text1={'CONTACT '} text2={'US'}/>
        </div>

        <div className='my-6 sm:my-10 flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-10 mb-20 sm:mb-32'>
            <div className='w-3/4 sm:w-2/3 md:w-1/2'>
                <img src={contact} alt="" className='w-full h-auto object-cover'/>
            </div>
            <div className='flex flex-col justify-center items-center md:items-start gap-4 sm:gap-6 w-full md:w-auto'>
                <p className='font-semibold text-lg sm:text-xl text-gray-600'>Our Store</p>
                <p className='text-gray-500 text-center md:text-left'>123 Yarn Lane, <br/> 
                Craftsville,  <br />
                Knitsburgh,  <br />
                YN 4567  <br />
                Country</p>
                <p className='text-gray-500 text-center md:text-left'>Tel: (+961) 12345678 <br />Email: contact@gmail.com</p>
                <p className='font-semibold text-lg sm:text-xl text-gray-600 mt-2'>Careers at CozyLoops</p>
                <p className='text-gray-500 text-center md:text-left'>Learn more about our teams and job openings.</p>
                <button className='border-black border px-6 sm:px-8 py-3 sm:py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
            </div>
        </div>
        <NewsLetterBox/>
    </div>
  )
}

export default Contact;