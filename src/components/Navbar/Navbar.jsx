import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {RxHamburgerMenu} from 'react-icons/rx'
import {MdOutlineCancelPresentation, MdOutlineDeliveryDining} from 'react-icons/md'
import {AiOutlineSearch, AiOutlineQuestion, AiOutlinePhone} from 'react-icons/ai'
import {BiCartDownload, BiUserCheck, BiCategoryAlt} from 'react-icons/bi'
import {BsGlobeAmericas} from 'react-icons/bs'
import {FaRegHandshake} from 'react-icons/fa'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {IoIosArrowDown} from 'react-icons/io'
import {RiHeart2Line} from 'react-icons/ri'

const Navbar = () => {
const [nav, setNav] = useState(false)



  return (
    <div className='max-w-[1250px] mx-auto flex justify-between items-center p-4'>

        {/* Overlay Logic */}

        {nav ? <div className='overlay fixed z-10 top-0 left-0 w-full duration-300 h-screen bg-black/80'></div> : ''}

        {/* Logo */}

        <div className='logo hidden items-center mr-3 lg:flex'>
            <h2 className='font-mono text-lg tracking-wider text-purple-500'>BuyIt!</h2>
            <img src={logo} alt='BuyIt'></img>
        </div>

        {/* Handburger Menu */}

        <div>
            <RxHamburgerMenu className='cursor-pointer mr-2 lg:my-2 lg:mx-2' onClick={() => setNav(!nav)} size={23} />
        </div>

        {/* Some links */}
        <ul className='font-mono hidden justify-between items-center lg:flex'>

            <li className='flex items-center mr-6 text-[.8rem] text-gray-700 cursor-pointer hover:text-purple-600'><AiOutlinePhone size={23} className='mr-2'/>+012345678910</li>

            <li className='flex items-center mr-6 text-[.8rem] text-gray-700 cursor-pointer hover:text-purple-600'><HiOutlineLocationMarker size={23} className='mr-2'/>Location<IoIosArrowDown size={15} className='mr-2 ml-1'/></li>

            <li className='flex items-center mr-6 text-[.8rem] text-gray-700 cursor-pointer hover:text-purple-600'><BsGlobeAmericas size={23} className='mr-2'/>ENG<IoIosArrowDown size={15} className='mr-2 ml-1'/></li>

        </ul>

        {/* Cancel */}

        <div>
            { nav ? <MdOutlineCancelPresentation size={26} className={nav ? 'duration-300 hover:text-purple-500 cursor-pointer text-white z-10 fixed top-8 left-[66%] lg:left-[22%]' : 'cursor-pointer text-purple-500 z-10 fixed top-8 left-[-100%]' } onClick={() => setNav(!nav)}  /> : ''}
        </div>
        
        {/* Links */}

         <div className={nav ? 'links bg-white fixed top-0 left-[0] z-10 duration-300 w-[300px] h-screen border border-black' : 'links bg-white fixed top-0 left-[-100%] w-[300px] h-screen z-10 duration-300 border border-black'}>

            <div className='logo flex px-20 py-3 items-center'>
                <h2 className='font-mono tracking-wider text-lg text-purple-500'>BuyIt!</h2>
                <img src={logo} alt='BuyIt'></img>
            </div>

            <ul className='font-mono flex flex-col justify-center'>
                <li className='px-20 py-12 text-[1.1rem] text-gray-600 duration-300 hover:text-purple-500'><a className='flex items-center' onClick={() => setNav(!nav)} href='#'><BiCategoryAlt size={24} className='mr-2'/>Categories</a></li>

                <li className='px-20 py-12 text-[1.1rem] text-gray-600 duration-300 hover:text-purple-500'><a className='flex items-center' onClick={() => setNav(!nav)} href='#'><FaRegHandshake size={24} className='mr-2'/>Deals</a></li>

                <li className='px-20 py-12 text-[1.1rem] text-gray-600 duration-300 hover:text-purple-500'><a className='flex items-center' onClick={() => setNav(!nav)} href='#'><AiOutlineQuestion size={24} className='mr-2'/>What's New</a></li>

                <li className='px-20 py-12 text-[1.1rem] text-gray-600 duration-300 hover:text-purple-500'><a className='flex items-center' onClick={() => setNav(!nav)} href='#'><MdOutlineDeliveryDining size={24} className='mr-2'/>Delivery</a></li>

                <li className='px-20 py-12 text-[1.1rem] text-gray-600 duration-300 hover:text-purple-500'><a className='flex items-center' onClick={() => setNav(!nav)} href='#'><RiHeart2Line size={24} className='mr-2'/>Favourite</a></li>
            </ul>
        </div>

        
        {/* Search Bar */}

        <div className='mr-2 flex justify-between items-center search w-[250px] rounded-full border border-black md:w-[350px] lg:w-[450px]'>
            <input className='font-mono bg-transparent text-gray-600 p-2 w-[50%] ml-2 outline-none' placeholder='Search Product'></input>
            <AiOutlineSearch size={23} className='mx-2' />
        </div>

        {/* Other Links */}

        <ul className='font-mono flex items-center'>
            <li className='text-[1rem] md:text-[1.1rem] text-gray-700 mr-2 md:mr-4 flex items-center cursor-pointer hover:text-purple-600'><BiUserCheck size={21} className='mr-2'/>Account</li>

            <li className='text-[1.1rem] text-gray-700 mr-4 flex items-center cursor-pointer hover:text-purple-600'><BiCartDownload size={21} className='mr-2'/>Cart</li>
        </ul>

    </div>
  )
}

export default Navbar
