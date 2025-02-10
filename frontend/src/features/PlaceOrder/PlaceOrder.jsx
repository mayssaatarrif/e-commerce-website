import React, { useContext, useState } from 'react'
import Title from '../../components/molecule/Title'
import CartTotal from '../../components/organism/CartTotal'
import { ShopContext } from '../../context/ShopContext'

const PlaceOrder = () => {

    const [method, setMethod] = useState('cod')
    const {navigate} = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-center gap-12 pt-10 sm:pt-16 min-h-[80vh] mt-40'>
        
        {/* Left Side (Form) */}
        <div className='w-full sm:w-[55%] p-8'>
            <div className='text-2xl font-semibold mb-6'>
                <Title text1={'DELIVERY '} text2={'INFORMATION'}/>
            </div>
            
            {/* Name Fields */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                <input type="text" placeholder='First Name' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full'/>
                <input type="text" placeholder='Last Name' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full'/>
            </div>

            {/* Contact Info */}
            <input type="email" placeholder='Email Address' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full mt-4'/>
            <input type="number" placeholder='Phone Number' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full mt-4'/>
            
            {/* Address Fields */}
            <input type="text" placeholder='Street Address' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full mt-4'/>
            
            {/* Location Fields */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
                <input type="text" placeholder='City' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full'/>
                <input type="text" placeholder='State' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full'/>
            </div>
            
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
                <input type="number" placeholder='Zip Code' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full'/>
                <input type="text" placeholder='Country' className='border border-gray-300 rounded-lg py-3 px-4 focus:ring-2 focus:ring-blue-500 w-full'/>
            </div>
        </div>

        {/* Right Side (Cart Total) */}
        <div className='w-full sm:w-[40%] p-8 '>
            <div className='p-6'>
                <CartTotal />
            </div>

            <div className='mt-12'>
                <Title text1={'PAYMENT '} text2={'METHOD'}/>
                {/* Payment Method */}
                <div className='flex flex-col gap-3 lg:flex-row'>
                    <div onClick={()=>setMethod('cod')} className='flex items-center cursor-pointer gap-3 border p-2 px-3'> 
                        <p className={`w-4 h-4 border rounded-full ${method === 'cod' ? 'bg-green-400': ''}`}></p>
                        <p className='text-gray-500 mx-4 font-medium text-sm'>CASH ON DELIVERY</p>
                    </div>
                </div>

                <div className='text-end mt-8 w-full'>
                    <button className='bg-black text-white px-16 py-3 text-sm' onClick={()=>navigate('/orders')}>PLACE ORDER</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlaceOrder
