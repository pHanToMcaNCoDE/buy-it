import React from 'react'
import img from '../../../public/assets/furnitures/3.jpg'
import {AiOutlineStar} from 'react-icons/ai'
import {RiHeart2Line} from 'react-icons/ri'
import {AiOutlineEye} from 'react-icons/ai'
import {cardTwo} from '../../Data/Data'

const Ads = () => {
  return (
    <div className='relative max-w-[1250px] mx-auto p-4'>
                <h1 className='text-[1.1rem] md:text-[1.6rem] lg:text-[2rem] font-mono'>Explore Our Products</h1>

                <div className='w-[100px] lg:w-[200px] border border-black rounded-full mx-1 my-4'></div>

            
      

        
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>

            {/* Cards */}

            {
                cardTwo.map((item, index) => (
                    <div key={index} className='shadow-md flex flex-col duration-300 hover:scale-105'>

                        <div className='relative'>
                            <img className='w-[3125%] max-w-[100%]  h-[300px] object-cover' src={item.image} alt=''></img>
                            <RiHeart2Line className='absolute top-1 right-2 bg-white text-black p-1 cursor-pointer rounded-full' size={30}/>
                            <AiOutlineEye className='absolute top-12 right-2 bg-white text-black p-1 cursor-pointer rounded-full' size={30}/>
                        </div>

                        <div className='p-2 flex items-center justify-between'>
                            <h1 className='pt-2 font-mono'>{item.name}</h1>
                            <p className='font-mono'><sup className='text-[.8rem]'>$</sup>{item.price}<sup className='text-[.8rem]'>{item.sup}</sup></p>
                        </div>

                        <p className='p-2 pt-2 text-[.9rem] text-gray-500'>{item.desc}</p>

                        <p className='p-2 pt-2 flex items-center'><AiOutlineStar size={23} className='ml-1 text-green-500'/><AiOutlineStar size={23} className='ml-1 text-green-500'/><AiOutlineStar size={23} className='ml-1 text-green-500'/><AiOutlineStar size={23} className='ml-1 text-green-500'/><AiOutlineStar size={23} className='ml-1 text-green-500'/><span className='text-[.7rem] text-gray-400'>({item.count})</span></p>
                    </div>
                ))
            }
            <button className='font-mono border border-purple-500 bg-purple-500 text-white px-2 py-3 lg:px-7 lg:py-3 my-8 rounded-lg'>View All</button>
            
        

        </div>

        {/* Adverts */}

    </div>
  )
}

export default Ads
