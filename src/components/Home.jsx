import React, { useEffect, useRef, useState } from 'react'
import landscape from '../assets/home-landscape.jpg'
import home2 from '../assets/home-2.jpg'
import logo from '../assets/nasa-logo.webp'
import '../App.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [image, setImage] = useState('https://i3.wp.com/wallpapers.com/images/hd/1920x1080-hd-space-gq0s9dv5gwk75txg.jpg')
  const handleImage = (e) => {
    const src = e.target.src;
    setImage(src);
  };
  const sideBar = useRef()

  return (
    <div className='full'>
      <div className={`full-page w-full h-screen flex p-3 bg-black text-white gap-5`}>
        <div className='w-full hidden h-full rounded-xl relative md:overflow-hidden md:flex'>
          <img className='w-full h-full object-cover opacity-60' src={image} alt="" />
          <h1 className='absolute bottom-0 m-4 text-[6vw] text'>EARTH TO <br /> SPACE</h1>
          <div className='absolute flex p-2 gap-8 bottom-0 right-0'>
            <div className='w-[4vw] cursor-pointer h-[4vw] overflow-hidden rounded-full'>
              <img onClick={handleImage} className='w-full h-full object-cover' src="https://i3.wp.com/wallpapers.com/images/hd/1920x1080-hd-space-gq0s9dv5gwk75txg.jpg" alt="" />
            </div>
            <div className='w-[4vw] cursor-pointer h-[4vw] overflow-hidden rounded-full'>
              <img onClick={handleImage} className='w-full h-full object-cover' src="https://i.pinimg.com/236x/8c/24/7f/8c247fbf0059d5877645138543a0cc71.jpg" alt="" />
            </div>
            <div className='w-[4vw] cursor-pointer h-[4vw] overflow-hidden rounded-full'>
              <img onClick={handleImage} className='w-full h-full object-cover' src="https://i.pinimg.com/736x/e2/ca/58/e2ca58a1284accbe415d1f4ad2f964de.jpg" alt="" />
            </div>
          </div>
        </div>
        <div ref={sideBar} className='text-white side-bar relative  w-full h-full md:w-[40%] '>
          <div className='absolute z-10 h-[25vw] w-[25vw] rounded-full top-[25%] overflow-hidden left-1/2 -translate-x-1/2 md:h-[8vw] md:w-[8vw]'>
            <img className='w-full h-full object-cover' src={logo} alt="" /></div>
          <div className='w-full h-full rounded-xl p-5 flex flex-col gap-5  bg-zinc-900'>
            <div className='w-full h-[50%] rounded-xl overflow-hidden'>
              <img className='w-full  h-full object-cover' src={landscape} alt="" />
            </div>
            <div className='w-full h-full rounded-xl  relative overflow-hidden bg-black '>
              <img className='w-full h-full object-cover opacity-50 ' src={home2} alt="" />
              <p className='text-white absolute top-1/2 left-1/2 -translate-x-[70%] -translate-y-[48%] text-left text-[3.4vw] md:text-[.9vw]'>For more than 50 years, NASA satellites have provided data on Earth's land, water, air, temperature, and climate. NASA's Earth Information Center allows visitors to see how our planet is changing in six key areas: sea level rise and coastal impacts, health and air quality, wildfires, greenhouse gases, sustainable energy, and agriculture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home