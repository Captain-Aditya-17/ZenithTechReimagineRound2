import React from 'react'
import '../App.css'
import page8 from '../assets/page8.jpg'

const Page8 = () => {
  return (
    <div className='w-full relative h-screen flex items-center overflow-hidden flex-col gap-8 bg-black px-4 pt-[5rem] text-white'>
      <div className='flex justify-between'>
        <h1 className='text-4xl bold'>Explore Porsche  <br /> Now</h1>
        <p className='w-[30%] mr-[3rem] hidden text-right md:block'>Stay up-to-date on the latest news from <span>Porsche</span> from Earth to the Moon, the Solar System and beyond.

          We will never share your email address.

          Privacy Policy</p>
      </div>
      <div className='w-full overflow-hidden h-full bg-zinc-900 p-2 rounded-xl mb-5'>
        <img className='w-full h-full object-cover rounded-xl' src={page8} alt="" />
      </div>
    </div>
  )
}

export default Page8