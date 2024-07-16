import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)
import '../App.css'
const Page2 = () => {
  useGSAP(
    ()=>{
      gsap.from('.para-img',{
        scrollTrigger:{
          trigger: '.page-2',
          start: '-50% top',
          end: 'top top',
          scrub: 1
        },
        width: 0,
        ease: 'power4'
      })
    }
  )
  return (
    <div className='page-2 w-full h-screen px-3 pb-2 bg-black'>
        <div className='w-full onfull h-full rounded-[10px] overflow-hidden bg-white text-black flex items-center justify-center'>
          <h1 className='text-xl md:text-4xl quantify text-center flex flex-col items-center'><div className='md:flex items-center'>Porsche is a German automobile manufacturerthat specializes <div className='para-img hidden md:block w-[10vw] m-2 rounded-full h-[3.8vw] overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://wallpapers.com/images/hd/black-porsche-911-4k-laptop-car-8cpkovld9xh0ua8z.jpg" alt="" /></div> in high-performance</div>  luxury sports cars, SUVs, and sedans.The brand is known for its timeless designs, performance, safety features, and entertainment technology</h1>
        </div>
    </div>
  )
}

export default Page2