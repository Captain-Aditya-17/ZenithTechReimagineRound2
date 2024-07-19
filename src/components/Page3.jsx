import React, { useEffect } from 'react'
import '../App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../App.css'
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
      gsap.set('.box',{cursor: 'pointer'})
    }
  )
  return (
     <div className='w-full h-screen p-2 bg-black cont flex mb-4 flex-col items-center gap-y-4 text-white'>
      <h1 className='text-center text-3xl capitalize text'>Porsche Social</h1>
      <div className='w-full md:w-[60%] h-[80%] md:h-[92%]  flex flex-col gap-y-3'>
        <div className='w-full h-full flex gap-3 overflow-hidden'>
          <div className='w-full h-full box rounded-xl bg-white overflow-hidden'>
            <img className='w-full h-full object-cover' src="https://d2vykwbochoala.cloudfront.net/t_detail/https://d1sdeqoxcfgxl0.cloudfront.net/images/original/890f8205920a830742ef8c291abce32fc71fa75f4e74111d90c5fa38.jpg" alt="" />
          </div>
          <div className='w-full h-full rounded-xl flex flex-col gap-y-3'>
            <div className='w-full box h-1/2 bg-white rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover object-top' src="https://files.porsche.com/filestore/image/multimedia/none/homepage-teaser-shoppingtools-dealersearch/normal/c365840c-687b-11e7-9717-0019999cd470;sQ;twebp/porsche-normal.webp" alt="" />
            </div>
            <div className='w-full box h-1/2 bg-white overflow-hidden rounded-xl'>
            <img className='w-full h-full object-cover' src="https://files.porsche.com/filestore/image/middle-east/none/homepage-teaser-shoppingtools-pds/normal/94ab936b-9704-11e7-b591-0019999cd470;sQ;twebp/porsche-normal.webp" alt="" />
            </div>
          </div>
        </div>
        <div className='w-full  h-[60%] flex gap-3 overflow-hidden'>
          <div className='w-[50%] box rounded-xl overflow-hidden h-full bg-white'>
            <img className='w-full h-full object-cover' src="https://shop.porsche.com/_next/image?url=https%3A%2F%2Fassets-prod.porsche.com%2Fassets%2F427c65d6-6e9f-487f-ae41-9318d7256869.webp&w=2560&q=75" alt="" />
          </div>
          <div className='w-full h-full box rounded-xl overflow-hidden bg-white'>
            <video className='w-full h-full object-cover' src="https://d7c4jjeuqag9w.cloudfront.net/videos/3334efe9685a9c31888dbcdcf0d304e7bae99aaaef44a431b4cfaf508c1f323b/0/540p" autoPlay muted loop></video>
</div>

        </div>
      </div>
    </div>
  )
}

export default Page3