import React from 'react'
import { FaSearch, FaBell, FaAngleDown, FaLeaf } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-black h-16 w-full flex justify-between'>
      <div className='flex justify-between flex-row mt-5  w-800'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="logo image" className='h-7  ml-20 mb-5'/>
        <p className='text-white ml-16  mr-5 font-bold cursor-pointer'>Home</p>
        <p className='text-white mr-5 font-bold cursor-pointer'>TV shows</p>
        <p className='text-white mr-5 font-bold cursor-pointer'>My List</p>
        <p className='text-white mr-5 font-bold cursor-pointer'>Movies</p>

      </div>
      <div className='flex items-center'>
      <FaSearch className="nav-icon text-white mr-8" />
      <FaBell className="nav-icon text-white mr-8" />
      <img className="w-8 h-8 mr-28  object-cover cursor-pointer"src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"alt="avather" />
      </div>
          
    </div>
  )
}

export default Navbar