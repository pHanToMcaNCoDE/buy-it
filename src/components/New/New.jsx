import React from 'react'
import ads from '../../../public/assets/ads3.jpg'
import adsTwo from '../../../public/assets/ads11.jpg'
import adsThree from '../../../public/assets/ads7.jpg'

const New = () => {
  return (
    <div className='max-w-[1250px] mx-auto p-4 mt-6'>
      
        <h1 className='text-[1.1rem] md:text-[1.6rem] lg:text-[2rem] font-mono'>New Arrival</h1>
        <div className='w-[200px] border border-black rounded-full mx-1 my-4'></div>

        {/* Ads */}
        <div className='h-[100vh] grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2'>

                <div className='relative lg:flex'>
                    <div className='absolute top-[40%] left-8'>
                        <h1 className='text-white text-3xl font-mono tracking-widest md:text-5xl lg:text-5xl'>Perfume</h1>
                        <p className='text-slate-300 font-mono text-lg tracking-wider py-2'>Acqua Di Parma</p>
                        <button className='m-1 text-white underline tracking-wider outline-none'>Shop Now</button>
                    </div>
                    <img className='md:w-[100%] md:h-[75%] lg:w-[100%] lg:h-[76%] object-cover' src={ads}></img>
                </div>

                <div className='flex flex-col gap-2 md:hidden lg:flex'>
                    <div className='relative'>
                        <div className='absolute top-[35%] left-8'>
                            <h1 className='text-white text-3xl md:text-5xl font-mono tracking-widest lg:text-5xl'>PlayStation 5</h1>
                            <p className='text-slate-300 font-mono text-lg tracking-widest py-2'>Colored PlaySation 5 Game Pads</p>
                            <p className='hidden md:flex text-slate-300 font-mono text-lg tracking-widest'>with Console is out for sale now</p>
                        <button className='m-1 text-white underline tracking-widest outline-none'>Shop Now</button>
                        </div>
                        <img className='md:w-[100%] object-cover' src={adsTwo}></img>
                    </div>

                    <div className='hidden relative lg:flex'>
                        <div className='absolute top-[45%] left-8'>
                            <h1 className='text-white text-3xl md:text-5xl font-mono tracking-widest lg:text-5xl'>Speakers</h1>
                            <p className='text-slate-300 font-mono text-lg tracking-widest py-2'>Smart Wireless Speakers</p>
                        <button className='m-1 text-white underline tracking-widest outline-none'>Shop Now</button>
                        </div>
                        <img className='md:w-[100%] object-cover' src={adsThree}></img>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default New
