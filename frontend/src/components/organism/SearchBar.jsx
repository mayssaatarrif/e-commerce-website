import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import {FaSearch} from "react-icons/fa"
import { RxCross1 } from "react-icons/rx";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const location = useLocation()
    const [visible,setVisible] = useState(false)

    useEffect(()=>{
      if (location.pathname.includes('collection')) {
        setVisible(true)
      }
      else {
        setVisible(false)
      }
    },[location])

  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-100 text-center mt-40'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input type='text' placeholder='Search' className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={(e) =>setSearch(e.target.value)}/>
         <FaSearch className="w-5 h-5" />
        </div>
        <RxCross1 className='inline cursor-pointer w-6' onClick={()=>setShowSearch(false)}/>
    </div>
  ): null
}

export default SearchBar