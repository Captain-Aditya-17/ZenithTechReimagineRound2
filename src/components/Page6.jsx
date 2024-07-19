import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)
import page6 from '../assets/page6.jpg'
const Page6 = () => {
  useGSAP(
    () => {
      gsap.from('.img-con', {
        scrollTrigger: {
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
          Porsche 911
        </h1>
        <p className='text text-center text-xl md:w-[50%]'>The legendary 911. The identity of the Porsche brand - since 1963. Here you will find an overview of all Porsche 911 model variants.</p>
      </div>
      <div className='img-con w-full h-[60%] overflow-hidden rounded-xl md:h-full'>
        <img className='w-full h-full object-cover' src={page6} alt="" />
      </div>
    </div>
  )
}

export default Page6