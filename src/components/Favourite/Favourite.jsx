import React from 'react'
import { IoTrashBinSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromfavourite } from '../../app/feature/cart';
import { PiHeartBreakFill } from "react-icons/pi";


const Favourite = ({favouriteClicked}) => {
  const favourites = useSelector(state => state.cart.favouriteList);
  const dispatch = useDispatch()

  return (
        <section className={`w-[450px] overflow-y-scroll h-[500px] rounded-2xl shadow-xl py-[30px] px-[20px] absolute right-[18%] top-[10%] z-50 bg-white ${favouriteClicked ? 'opacity-100 duration-200' : 'opacity-0 duration-200'}`}>
          <div className="flex flex-col justify-center items-start w-full gap-5">
            {
              favourites.length === 0 ? (
                <div className="flex flex-col justify-center items-center w-full">
                  <div className="w-full h-[70%] flex flex-col gap-5 justify-center items-center relative">
                    <PiHeartBreakFill className="text-gray-400" size={300}/>
                  </div>
                  <p className="text-gray-600 text-base font-semibold">Your Favourite List is Empty!!</p>
                </div>
              ) : (
                <>
                  {
                    favourites.map((favourite) => (
                      <div key={favourite.id} className="flex justify-between items-center w-full px-2 py-4 border-b border-b-gray-300">
                        <div className="flex flex-col flex-wrap justify-center items-start gap-3">
                          <div className="relative overflow-hidden w-[100px] h-[100px]">
                            <img className="object-cover absolute" src={favourite.image} alt={favourite.name} />
                          </div>
                          <div className="flex flex-col justify-center items-start gap-1">
                            <h1 className="text-black text-lg">{favourite.name}</h1>
                            <p className="text-sm text-gray-500">{favourite.desc}</p>
                          </div>
                        </div>
                          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                            <p className='font-mono'><sup className='text-[.8rem]'>$ </sup>{favourite.price}<sup className='text-[.8rem]'>{favourite.sup}</sup></p>
                            <IoTrashBinSharp 
                              onClick={() => dispatch(removeFromfavourite(favourite))} 
                              className="text-red-500 text-xl cursor-pointer"/>
                          </div>
                      </div>
                    ))
                  }
                </>
              )
              }
          </div>
        </section>
  )
}

export default Favourite