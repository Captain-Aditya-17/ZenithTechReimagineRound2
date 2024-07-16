import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)
const Page6 = () => {
  useGSAP(
    ()=>{
      gsap.from('.img-con',{
        scrollTrigger:{
          trigger: '.page-6',
          start: '-50% top',
          end: 'top top',
          scrub: 1
        },
        opacity: 0,
        y: 400
      })
    }
  )
  return (
    <div className='page-6 w-full h-screen p-3 flex flex-col gap-4 justify-between bg-white'>
      <div className='w-full flex-col gap-5 h-full flex items-center justify-center md:h-[50%]'>
        <h1 className='text-4xl mt-5 text-black text'>
          Lunar Space Station
        </h1>
        <p className='bold text-center md:w-[50%]'>On this episode of "Houston, We Have a Podcast," NASA astronaut Randy Bresnik and Gateway’s integration and utilization manager, Stephanie Dudley, discuss how the future lunar space station br will be used for deep space exploration.</p>
      </div>
      <div className='img-con w-full h-[60%] overflow-hidden rounded-xl md:h-full'>
        <img className='w-full h-full object-cover' src="https://www.nasa.gov/wp-content/uploads/2024/07/halo-tas-for-nasa-03-2.jpg?resize=2000,1334" alt="" />
      </div>
    </div>
  )
}

export default Page6