import React from 'react'
import logo from '../../assets/logo2.png'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
import {SlSocialFacebook, SlSocialLinkedin} from 'react-icons/sl'

const Footer = () => {
  return (
    <div className='max-w-[1250px] mx-auto p-4 mt-[7%]'>
      <div className='p-6 bg-black text-white grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5'>

        
        <div className='logo hidden items-center lg:flex flex-col'>
            <div className='flex items-center'>
                <h2 className='font-bold font-mono text-md text-white tracking-wider text-lg'>BuyIt!</h2>
                <img className='' src={logo} alt='BuyIt'></img>
            </div>
            <div className='flex justify-between items-center'>
                <AiOutlineInstagram size={23} className='cursor-pointer hover:text-gray-200 mr-5'/>
                <AiOutlineTwitter size={23} className=' hover:text-gray-200 mr-5 cursor-pointer'/>
                <SlSocialFacebook size={23} className=' hover:text-gray-200 mr-5 cursor-pointer'/>
                <SlSocialLinkedin size={23} className='hover:text-gray-200 mr-5 cursor-pointer'/>
            </div>
        </div>

        <div className='mx-3'>
            <h1 className='font-bold font-mono tracking-wider text-xl p-1'>Exclusive</h1>
            <h2 className='font-sans tracking-widest text-sm p-1 cursor-pointer hover:text-gray-200'>Subscribe</h2>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>Get 10% off your first order</p>
        </div>

        <div className='mx-3'>
            <h1 className='font-bold font-mono tracking-wider text-xl p-1'>Support</h1>
            <h1 className='font-sans tracking-widest text-sm p-1 cursor-pointer hover:text-gray-200'>111 Hospital Road, DH 1515, Bolanga</h1>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>support@buyit.io</p>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>+0000-1111-2222-3333</p>
        </div>

        <div className='mx-3'>
            <h1 className='font-bold font-mono tracking-wider text-xl p-1'>Account</h1>
            <h1 className='font-sans tracking-widest text-sm p-1 cursor-pointer hover:text-gray-200'>My Account</h1>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>Sign up / Sign in</p>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>Cart</p>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>Wishlist</p>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>Shop</p>
        </div>


        <div className='mx-3'>
            <h1 className='font-bold font-mono tracking-wider text-xl p-1'>Quick Link</h1>
            <h1 className='font-sans tracking-widest text-sm p-1 cursor-pointer hover:text-gray-200'>Privacy Policy</h1>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>Terms Of Use</p>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>FAQ</p>
            <p className='font-sans tracking-wider text-sm pt-2 cursor-pointer hover:text-gray-200'>Contact</p>
        </div>


      </div>
    </div>
  )
}

export default Footer
