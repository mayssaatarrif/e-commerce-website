import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault()
    }

  return (
    <div className='text-center px-6 sm:px-8'>
        <p className='text-xl sm:text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3 sm:text-lg'>Discover the finest selection of premium yarns.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 mx-auto my-6 flex flex-col sm:flex-row items-center gap-3 border p-3 sm:p-5'>
            <input 
                type='email' 
                placeholder='Enter your email' 
                className='w-full sm:flex-1 outline-none p-2 border border-gray-300 rounded-md'
                required 
            />
            <button 
                type='submit' 
                className='bg-black text-white text-sm px-8 py-3 sm:px-10 sm:py-4 rounded-md mt-3 sm:mt-0'
            >
                SUBSCRIBE
            </button>
        </form>
    </div>
  )
}

export default NewsLetterBox
