import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from '@radix-ui/react-select'
import { CiSearch } from "react-icons/ci";
import { CarMakes, Pricing } from '@/Shared/Data';


 function Search () {
  return (
    <div className='p-2 md:p-5 bg-white rounded-md md:rounded-full
    flex-col md:flex md:flex-row gap-10 px-5 items-center
    w-full md: w-max'> 
        <Select>
    <SelectTrigger className="w-[180px] outline-none md:border-none w-full shadow-none text-lg">
      <SelectValue placeholder="Car Makes" />
    </SelectTrigger>
    <SelectContent>
      {CarMakes.map ((maker, index)=>(
        <SelectItem value = {maker.name}>{maker.name}</SelectItem>
      ))}
    </SelectContent>
    
  </Select>

  <Separator orientation="vertical" className='hidden md:block'/>
  <Select>
  <SelectTrigger className= "w-[180px] outline-none md:border-none w-full shadow-none text-lg">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
    {Pricing.map((price, index)=>(
      <SelectItem value = {price.amount}>{price.amount}</SelectItem>
    )
    )}
  </SelectContent>
  
</Select>

<Separator orientation="vertical" className='hidden md:block'/>
<Select>
  <SelectTrigger className= "w-[180px] outline-none md:border-none w-full shadow-none text-lg">
  <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Old</SelectItem>
    
  </SelectContent>
</Select>
<div> 


<CiSearch className='text-[50px] bg-purple-500
rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer'/>
</div>
  </div>
  )
}

export default Search