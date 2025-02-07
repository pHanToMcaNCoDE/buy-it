// import React from 'react'

import { useDispatch, useSelector } from "react-redux"
import { removeFromCart } from "../../app/feature/cart"
import { IoTrashBinSharp } from "react-icons/io5";
import { RiCactusFill } from "react-icons/ri";
import { GiTumbleweed } from "react-icons/gi";


const Cart = ({ isClicked }) => {
  const carts = useSelector(state => state.cart.cartList)
  const dispatch = useDispatch()

  return (
    <section className={`w-[450px] overflow-y-scroll h-[500px] rounded-2xl shadow-xl py-[30px] px-[20px] absolute right-[10%] top-[12%] z-50 bg-white ${isClicked ? 'opacity-100 duration-200' : 'opacity-0 duration-200'}`}>
      <div className="flex flex-col justify-center items-start w-full gap-5">
        {
          carts.length === 0 ? (
            <div className="flex flex-col justify-center items-center w-full">
              <div className="w-full h-[70%] flex flex-col gap-5 justify-center items-center relative">
                <RiCactusFill className="text-gray-400" size={300}/>
              </div>
              <p className="text-gray-600 text-base font-semibold">Your Cart Is Empty!!</p>
            </div>
          ) : (
            <>
              {
                carts.map((cart) => (
                  <div key={cart.id} className="flex justify-between items-center w-full px-2 py-4 border-b border-b-gray-300">
                    <div className="flex flex-col flex-wrap justify-center items-start gap-3">
                      <div className="relative overflow-hidden w-[100px] h-[100px]">
                        <img className="object-cover absolute" src={cart.image} alt={cart.name} />
                      </div>
                      <div className="flex flex-col justify-center items-start gap-1">
                        <h1 className="text-black text-lg">{cart.name}</h1>
                        <p className="text-sm text-gray-500">{cart.desc}</p>
                      </div>
                    </div>
                      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <p className='font-mono'><sup className='text-[.8rem]'>$ </sup>{cart.price}<sup className='text-[.8rem]'>{cart.sup}</sup></p>
                        <IoTrashBinSharp onClick={() => dispatch(removeFromCart(cart))} className="text-red-500 text-xl cursor-pointer"/>
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

export default Cart