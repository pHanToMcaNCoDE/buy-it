import React from 'react'
import ad from '../../../public/assets/ads.jpg'

const Hero = () => {
  return (
    <div className='max-w-[1250px] mx-auto p-4'>
      <div className='max-h-[400px] relative'>

        {/* Overlay */}

        <div className='absolute bg-black/1 w-full h-full max-h-[400px] text-white flex flex-col justify-center'>
            {/* text */}

            <h1 className='mx-7 py-3 font-mono text-xl md:text-3xl lg:text-[3rem]'>Grab Upto <span className='text-gray-200'>50% Off</span> On</h1>

            <p className='mx-7 py-3 font-mono text-xl md:text-3xl lg:text-[3rem]'>Selected Headphones</p>
            <div>
                <button className='mt-2 text-[1.12rem] font-mono mx-7 bg-purple-500 border border-purple-500 text-white px-5 py-3 rounded-full'>Shop Now</button>
            </div>
            
        </div>


         {/* Advert */}
        <img className='object-cover w-full max-h-[400px]' src={ad} alt=''></img>

      </div>

    </div>
  )
}

export default Hero

