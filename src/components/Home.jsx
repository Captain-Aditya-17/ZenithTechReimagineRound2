import React, { useEffect, useRef, useState } from 'react'
import landscape from '../assets/home-landscape.jpg'
import home2 from '../assets/home-2.jpg'
import logo from '../assets/nasa-logo.webp'
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
import '../App.css'
import video from '../assets/homeVideo.mp4'
const Home = () => {
  const videoRef = useRef()
  useGSAP(
    ()=>{
      gsap.to(videoRef.current,{
        scrollTrigger:{
          trigger: '.full',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
        onStart:()=>{
          videoRef.current.play()
        }
      })
      gsap.to('.full',{
        scrollTrigger:{
          trigger: '.full',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: true
        },
      })
    } 
  )
  return (
    <div className='w-full h-screen full'>
    <div className='w-full relative h-full flex gap-3 flex-shrink-0 p-3 overflow-hidden'>
          <div className='w-full md:w-1/3 rounded-xl  h-full flex gap-y-3 flex-col'>
            <div className='hidden md:flex w-full h-1/3 overflow-hidden bg-zinc-900 rounded-xl'>
            <img className='w-full h-full object-cover' src="https://i.pinimg.com/736x/78/4e/24/784e249de6ee1f7c0ed7eb951a77070b.jpg" alt="" />
            </div>
            <div className='w-full h-full text-white flex gap-y-3 flex-col justify-between p-3 bg-zinc-900 rounded-xl'>
              <div className='w-full h-1/3 flex items-center flex-col justify-end md:justify-center rounded-xl pb-4'>
              <h1 className='bold text-4xl md:text-3xl'>Porsche</h1>
              <p className='text-xl text-zinc-400'>Keep your essence.</p>
              </div>
              <div className='w-full h-full md:h-[20vw] bg-red-500 rounded-xl overflow-hidden'>
                <img className='w-full h-full object-cover' src="https://i.pinimg.com/564x/89/e3/9f/89e39f7142f79ffd51212336c212d632.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className='h-full home hidden md:block relative w-full rounded-xl overflow-hidden bg-black'>
          <video ref={videoRef} className='absolute z-[9] w-full h-full object-cover opacity-50 scale-[1.2]' src={video}  muted loop></video>
          <div className='absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text text-white flex flex-col items-center'
          ><h1>Porsche</h1>
            <p className='text-xl text-center'>Keep your essence. · Models · The mid-engine sports car for two made for pure driving pleasure. · The iconic, rear-engine sports car with exceptional ...</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home