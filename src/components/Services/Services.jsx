import React from 'react'
import {GiDeliveryDrone} from 'react-icons/gi'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BsShieldCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <div className='max-w-[1250px] mx-auto mt-[7%] md:mt-[0%] lg:mt-[7%] p-4'>
      <div className='flex flex-col md:flex-col lg:flex-row lg:items-center justify-between items-center'>

        <div className='flex flex-col mt-4 md:mt-3 items-center text-center'>
            <GiDeliveryDrone className='border border-gray-300 p-2 rounded-full my-1 duration-300 cursor-pointer hover:scale-105' size={55}/>
            <h1 className='font-mono font-bold tracking-widest py-1 md:text-md lg:text-xl'>FREE AND FAST DELIVERY</h1>
            <p className='tracking-wider text-gray-400'>Free delivery for all orders over $140</p>
        </div>

        <div className='flex flex-col mt-4 md:mt-3 items-center text-center'>
            <RiCustomerService2Fill className='border border-gray-300 p-2 rounded-full my-1 duration-300 cursor-pointer hover:scale-105' size={55}/>
            <h1 className='font-mono font-bold tracking-widest py-1 md:text-md lg:text-xl'>24/7 CUSTOMER SERVICE</h1>
            <p className='tracking-wider text-gray-400'>Friendly 24/7 customer support</p>
        </div>

        <div className='flex flex-col mt-4 md:mt-3 items-center text-center'>
            <BsShieldCheck className='border border-gray-300 p-2 rounded-full my-1 duration-300 cursor-pointer hover:scale-105' size={55}/>
            <h1 className='font-mono font-bold tracking-widest py-1 md:text-md lg:text-xl'>MONEY BACK GUARANTEE</h1>
            <p className='tracking-wider text-gray-400'>We return money within 30 days</p>
        </div>

      </div>
    </div>
  )
}

export default Services
