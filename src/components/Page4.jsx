import React from 'react'
import '../App.css'
import page4img from '../assets/page4.jpg'
const Page4 = () => {
  return (
    <div className='w-full h-screen bg-black relative flex flex-col md:flex-row gap-3 text-white bg-img'>
      <div className='h-full w-full md:w-1/2 flex-col gap-3 text-white flex items-center md:justify-center justify-end'>
        <h1 className='text-2xl text capitalize'>Choose Your Porsche now</h1>
        <button className='btn relative bg-white transition-all overflow-hidden text-black capitalize b py-2 p-[8vw] rounded text-xl font-bold mb-5 '><a href="">find now</a></button>
      </div>
      <div className='w-full h-full flex p-3 items-center md:justify-center'>
        <div className='w-full h-full overflow-hidden md:w-[80%] md:h-[60%] '>
          <img className='w-full h-full object-cover' src={page4img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page4