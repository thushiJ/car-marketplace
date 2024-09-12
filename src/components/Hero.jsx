import React from 'react'
import Search from './Search'

function Hero () {
  return (
<div>
    <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px]
    w-ful bg-violet-300'>
        <h2 className='text-lg'>
            Find cars for sale and for rent near you
        </h2>
        <h2 className= 'text-[60px] font-bold'>Find your Dream Car</h2>

        <Search/>
        <img src='/Tesla.jpg' className='mt-10' width={850} height={650}/>

    </div>
</div>
  )
}

export default Hero