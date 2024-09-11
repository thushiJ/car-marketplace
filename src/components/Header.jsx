import React from 'react'
// import {useUser} from '@clerk/clerk-react'

function Header () {
    // const{user, isSignedIn} =useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src='/logo.webp' width= {150} height = {100}/>
        <ul className='hidden md:flex gap-5'>
            <li className='font-medium hover: scale-105 transition-all  cursor-pointer hover:text-primary'>Home</li>
            <li className='font-medium hover: scale-105 transition-all cursor-pointer hover:text-primary'>Search</li>
            <li className='font-medium hover: scale-105 transition-all cursor-pointer hover:text-primary'>New</li>
            <li className='font-medium hover: scale-105 transition-all cursor-pointer hover:text-primary'>Preowned</li>
        </ul>
    </div>
  )
}

export default Header