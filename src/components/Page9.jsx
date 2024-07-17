import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
gsap.registerPlugin(ScrollTrigger)
import '../App.css'

const Page9 = () => {
    useGSAP(
        () => {
            const tl9 = gsap.timeline({
                scrollTrigger:{
                    trigger: '.cont9',
                    start: '30% top',
                    end: 'bottom top',
                    scrub: 1
                },
            })
           tl9.to('.login',{
            top: 0,
           })
           tl9.to('.login',{
            width: '100%',
           })
           gsap.from('.elem',{
            scrollTrigger:{
                trigger: '.cont9',
                start: '-50% top',
                end: 'top top',
                scrub: 1,
            },
            opacity: 0,
            stagger: .5,
            y: 100
           })
           gsap.to('.cont9',{
            scrollTrigger:{
                trigger: '.cont9',
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true
            },
           })
        }
    )
    return (
        <div className='cont9 w-full md:h-screen overflow-hidden bg-black p-4 relative'>
            <div className='w-full h-[90%] flex flex-col md:flex-row gap-4 p-2'>
                {
                    ['https://i.pinimg.com/474x/c4/b0/4d/c4b04d09f40de2622b7552037e06667e.jpg','https://i.pinimg.com/236x/41/7d/c9/417dc96c38a9d19e381d7b7c336b2119.jpg','https://i.pinimg.com/236x/6a/e8/3e/6ae83e04f10d228f4f90d19b80a3d6d9.jpg','https://i.pinimg.com/474x/25/8a/99/258a99434f9e8e17d54b0927b9d98878.jpg'].map((item,index)=>{
                        return <div key={index} className='elem w-full rounded-xl cursor-pointer h-full bg-white overflow-hidden'>
                            <img className='w-full h-full object-cover' src={item} alt="" />
                        </div>
                    })
                }
            </div>
            <div className='hidden md:flex w-[40%] login h-screen absolute top-[90%] left-1/2 -translate-x-1/2  items-center justify-center  bg-white text-black'>
           <div className='flex items-center gap-5 justify-center flex-col'> 
            <h1 className='quantify text-3xl md:text-4xl'>Subscribe to NASA's Newsletter</h1>
           <button className='md:text-xl text px-[10vw] border-2 border-black py-[2vw] bg-black md:px-[3vw] rounded-full transition-all duration-[.5] md:py-2 text-white hover:bg-white   hover:text-black'>Sign Up</button>
           </div>
           </div>
        </div>
    )
}

export default Page9