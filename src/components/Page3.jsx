import React, { useEffect } from 'react'
import '../App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
const Page3 = () => {
  useGSAP(
    ()=>{
      gsap.from('.box',{
        scrollTrigger:{
          trigger: '.cont',
          start: '-50% top',
          end: 'top top',
          scrub: 1
        },
        y:500,
        stagger: .3,
        ease: "circ.out",
      })
    }
  )
  return (
     <div className='w-full h-screen p-2 bg-black cont flex mb-4 flex-col items-center gap-y-4 text-white'>
      <h1 className='text-center text-3xl capitalize text'>featured News</h1>
      <div className='w-full md:w-[60%] h-[80%] md:h-full  flex flex-col gap-y-3'>
        <div className='w-full h-full flex gap-3 overflow-hidden'>
          <div className='w-full h-full box rounded-xl bg-white'></div>
          <div className='w-full h-full rounded-xl flex flex-col gap-y-3'>
            <div className='w-full box h-1/2 bg-white rounded-xl'></div>
            <div className='w-full box h-1/2 bg-white rounded-xl'></div>
          </div>
        </div>
        <div className='w-full  h-[60%] flex gap-3 overflow-hidden'>
          <div className='w-[50%] box rounded-xl h-full bg-white'></div>
          <div className='w-full box rounded-xl h-full bg-white'></div>
        </div>
      </div>
    </div>
  )
}

export default Page3