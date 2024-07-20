import React, { useEffect } from 'react'
import '../App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../App.css'
gsap.registerPlugin(ScrollTrigger);
import new1 from '../assets/new1.jpg'
import new2 from '../assets/new2.webp'
import new3 from '../assets/new3.webp'
import new4 from '../assets/new4.jpg'
import new5 from '../assets/new5.mp4'
const Page3 = () => {
  
  return (
     <div className='w-full h-screen p-2 bg-black cont flex mb-4 flex-col items-center gap-y-4 text-white'>
      <h1 className='text-center text-3xl capitalize text'>Porsche Social</h1>
      <div className='w-full md:w-[60%] h-[80%] md:h-[92%]  flex flex-col gap-y-3'>
        <div className='w-full h-full flex gap-3 overflow-hidden'>
          <div className='w-full h-full box rounded-xl bg-white overflow-hidden'>
            <img className='w-full h-full object-cover' src={new1} alt="" />
          </div>
          <div className='w-full h-full rounded-xl flex flex-col gap-y-3'>
            <div className='w-full box h-1/2 bg-white rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src={new2} alt="" />
            </div>
            <div className='w-full box h-1/2 bg-white overflow-hidden rounded-xl'>
            <img className='w-full h-full object-cover' src={new3} alt="" />
            </div>
          </div>
        </div>
        <div className='w-full  h-[60%] flex gap-3 overflow-hidden'>
          <div className='w-[50%] box rounded-xl overflow-hidden h-full bg-white'>
            <img className='w-full h-full object-cover' src={new4} alt="" />
          </div>
          <div className='w-full h-full box rounded-xl overflow-hidden bg-white'>
            <video className='w-full h-full object-cover' src={new5} autoPlay muted loop></video>
</div>

        </div>
      </div>
    </div>
  )
}

export default Page3