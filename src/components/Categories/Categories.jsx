import React from 'react'
import {CgGames} from 'react-icons/cg'
import {MdOutlineToys} from 'react-icons/md'
import {GiLipstick, GiDirectorChair, GiClothesline} from 'react-icons/gi'
import {FaHeadphonesAlt} from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='max-w-[1250px] mx-auto p-4'>
      
        <h1 className='text-[1.1rem] md:text-[1.6rem] lg:text-[2rem] font-mono'>Popular Categories</h1>
        <div className='w-[200px] border border-black rounded-full mx-1 my-4'></div>
      <div className='grid grid-cols-1 grid-rows-1 gap-6 md:grid-cols-2 md:grid-rows-3 lg:grid-rows-3 lg:grid-cols-2'>

        {/* containers */}

            <div className='cursor-pointer bg-gray-100 p-5 flex items-center rounded-lg duration-300 hover:scale-105'>

                {/* Icon */}
                <div>
                    <CgGames className='text-gray-500' size={60} />
                </div>

                {/* Text */}
                <div className='flex flex-col ml-5'>
                    <h1 className='font-mono text-2xl font-bold'>Games</h1>
                    <p className='mt-2 font-sans text-gray-500'>200 Items Available</p>
                </div>
            </div>



            <div className='cursor-pointer bg-gray-100 p-5 flex items-center rounded-lg duration-300 hover:scale-105'>

                {/* Icon */}
                <div>
                    <MdOutlineToys className='text-gray-500' size={60} />
                </div>

                {/* Text */}
                <div className='flex flex-col ml-5'>
                    <h1 className='font-mono text-2xl font-bold'>Toys</h1>
                    <p className='mt-2 font-sans text-gray-500'>1080 Items Available</p>
                </div>
            </div>



            <div className='cursor-pointer bg-gray-100 p-5 flex items-center rounded-lg duration-300 hover:scale-105'>

                {/* Icon */}
                <div>
                    <GiLipstick className='text-gray-500' size={60} />
                </div>

                {/* Text */}
                <div className='flex flex-col ml-5'>
                    <h1 className='font-mono text-2xl font-bold'>Cosmetics</h1>
                    <p className='mt-2 font-sans text-gray-500'>3900 Items Available</p>
                </div>
            </div>



            <div className='cursor-pointer bg-gray-100 p-5 flex items-center rounded-lg duration-300 hover:scale-105'>

                {/* Icon */}
                <div>
                    <GiDirectorChair className='text-gray-500' size={60} />
                </div>

                {/* Text */}
                <div className='flex flex-col ml-5'>
                    <h1 className='font-mono text-2xl font-bold'>Furnitures</h1>
                    <p className='mt-2 font-sans text-gray-500'>663 Items Available</p>
                </div>
            </div>



            <div className='cursor-pointer bg-gray-100 p-5 flex items-center rounded-lg duration-300 hover:scale-105'>

                {/* Icon */}
                <div>
                    <GiClothesline className='text-gray-500' size={60} />
                </div>

                {/* Text */}
                <div className='flex flex-col ml-5'>
                    <h1 className='font-mono text-2xl font-bold'>Fashion</h1>
                    <p className='mt-2 font-sans text-gray-500'>500 Items Available</p>
                </div>
            </div>



            <div className='cursor-pointer bg-gray-100 p-5 flex items-center rounded-lg duration-300 hover:scale-105'>

                {/* Icon */}
                <div>
                    <FaHeadphonesAlt className='text-gray-500' size={60} />
                </div>

                {/* Text */}
                <div className='flex flex-col ml-5'>
                    <h1 className='font-mono text-2xl font-bold'>Electronics</h1>
                    <p className='mt-2 font-sans text-gray-500'>1230 Items Available</p>
                </div>
            </div>
      </div>

        <div className='w-[100%] h-[1px] border border-gray-300 rounded-full mx-1 mt-[8%]'></div>
    </div>
  )
}

export default Categories
