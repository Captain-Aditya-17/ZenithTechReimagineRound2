import React from 'react'
import left2 from '../assets/left2.jpg'
import right2 from '../assets/right2.avif'
import '../App.css'

const Page2 = () => {
  return (
    <div className='w-full h-screen p-3 bg-black flex'>
        <div className='w-full md:w-[60%] h-full p-3  '>
            <div className='w-[90%] h-full rounded-xl overflow-hidden'>
           <img className='w-full h-full object-cover' src={left2} alt="" />
            </div>
        </div>
        <div className='hidden w-full h-full md:flex flex-col justify-between items-center  p-3'>
            <div className='w-[100%] h-1/2 rounded-xl overflow-hidden'>
           <img className='w-full h-full object-cover' src={right2} alt="" />
            </div>
            <div className='w-full text-white flex justify-between items-end h-[40%]'>
                <button className='text-xl uppercase bg-none text-white transition-all font-bold px-8 py-4 border-2 hover:bg-white hover:text-black'>Explore NOw</button>
                <h1 className='text-white text-[6vw] quantify uppercase text-right'>Enjoy porsche <br /> now</h1>
            </div>
        </div>
    </div>
  )
}

export default Page2