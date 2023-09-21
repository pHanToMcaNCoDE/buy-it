import React, { useState } from 'react'
// import tech from '../../../public/assets/tech/5.jpg'
import {RiHeart2Line} from 'react-icons/ri'
import {AiOutlineStar} from 'react-icons/ai'
import {LuFilter} from 'react-icons/lu'
import {card} from '../../Data/Data'

const Card = () => {
const [food, setFood] = useState(card)

    const filterCategory = (category) => {
        setFood(
            card.filter((item) => {
                return item.category === category
            })
        )
    }


  return (
    <div className='max-w-[1250px] mx-auto p-4'>
      
      {/* Sorting */}
        <div className='flex flex-col md:flex-row lg:flex-row justify-between items-center'>
                <div className='grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-4 items-center my-5 mb-1 mr-6 lg:mb-0 font-mono text-[1rem]'>
                    <button className='duration-300 bg-gray-100 p-2 rounded-full cursor-pointer outline-none' onClick={() => setFood(card)}>All</button>
                    <button className='duration-300 bg-gray-100 p-2 rounded-full cursor-pointer outline-none' onClick={() => filterCategory('cosmetics')}>Cosmetics</button>
                    <button className='duration-300 bg-gray-100 p-2 rounded-full cursor-pointer outline-none' onClick={() => filterCategory('electronics')} value='Electronics'>Electronics</button>
                    <button className='duration-300 bg-gray-100 p-2 rounded-full cursor-pointer outline-none' onClick={() => filterCategory('games')}>Games</button>
                    <button className='duration-300 bg-gray-100 p-2 rounded-full cursor-pointer outline-none' onClick={() => filterCategory('toys')}>Toys</button>
                    <button className='duration-300 bg-gray-100 p-2 rounded-full cursor-pointer outline-none' onClick={() => filterCategory('shoes')}>Shoes</button>
                    <button className='duration-300 bg-gray-100 p-2 rounded-full cursor-pointer outline-none' onClick={() => filterCategory('cosmetics')} value='Cosmetics'>Cosmetics</button>
                </div>
            <div>
                <button className='font-mono text-[.9rem] hidden md:flex lg:flex items-center bg-gray-100 p-2 border border-gray-100 rounded-full'><LuFilter className='mr-1' size={23}/>Filter</button>
            </div>
        </div>

      

      <div>
        <h1 className='text-[1.1rem] md:text-[1.6rem] lg:text-[2rem] font-mono'>Latest Deals For You!</h1>
        <div className='w-[200px] border border-black rounded-full mx-1 my-4'></div>

        {/* Cards */}

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                { 
                    food.map((item, index) => (
                            <div key={index} className='shadow-md flex flex-col duration-300 hover:scale-105'>

                                <div className='relative'>
                                    <img className='w-[3125%] max-w-[100%]  h-[300px] object-cover' src={item.image} alt=''></img>
                                    <RiHeart2Line className='absolute top-1 right-2 bg-white text-black p-1 cursor-pointer rounded-full' size={30}/>
                                </div>

                                <div className='p-2 flex items-center justify-between'>
                                    <h1 className='pt-2 font-mono'>{item.name}</h1>
                                    <p className='font-mono'><sup className='text-[.8rem]'>$</sup>{item.price}<sup className='text-[.8rem]'>{item.sup}</sup></p>
                                </div>

                                <p className='p-2 pt-2 text-[.9rem] text-gray-500'>{item.desc}</p>

                                <p className='p-2 pt-2 flex items-center'><AiOutlineStar size={23} className='ml-1 text-green-500'/><AiOutlineStar size={23} className='ml-1 text-green-500'/><AiOutlineStar size={23} className='ml-1 text-green-500'/><AiOutlineStar size={23} className='ml-1 text-green-500'/><AiOutlineStar size={23} className='ml-1 text-green-500'/><span className='text-[.7rem] text-gray-400'>({item.count})</span></p>

                                <button className='text-[.9rem] font-mono m-2 mr-20 mb-2 w-[40%] my-2 px-3 py-3 rounded-full border border-purple-600 text-purple-600 md:px-1 md:py-2 hover:bg-purple-600 duration-300 hover:text-white'>Add to Cart</button>

                            </div>
                    ))
                }

            </div>
      </div>

        <div className='w-[100%] h-[1px] border border-gray-300 rounded-full mx-1 mt-[8%]'></div>
    </div>
  )
}

export default Card
