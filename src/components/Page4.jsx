import React from 'react'
import '../App.css'
const Page4 = () => {
  return (
    <div className='w-full h-screen bg-black relative flex flex-col gap-3 text-white'>
      <div className='h-full w-full md:w-[80%] flex-col gap-3 text-white flex items-center justify-end'>
        <h1 className='text-2xl text capitalize'>Choose Your Porsche now</h1>
        <button className='btn relative bg-white transition-all overflow-hidden text-black capitalize b py-2 p-[8vw] rounded text-xl font-bold mb-5 '><a href="">find now</a></button>
      </div>
      <div className='w-full h-full flex p-3 items-center'>
        <div className='w-full h-full rounded-xl overflow-hidden md:w-[80%] md:h-1/2 bg-red-500'></div>
      </div>
    </div>
  )
}

export default Page4