import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(gsap);
import '../App.css'
const Page5 = () => {
    const crsrRef = useRef()
    useGSAP(
        () => {
            gsap.to('.slides', {
                scrollTrigger: {
                    trigger: '.slide-con',
                    start: '5% top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
                xPercent: -300
            })
            gsap.to('.move-img', {
                scrollTrigger: {
                    trigger: '.slides',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
                y: 400
            })
            gsap.to('.slide-2 img', {
                scrollTrigger: {
                    trigger: '.slides',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                },
                scale: 1,
                rotate: 10
            })
            gsap.from('.up-img', {
                scrollTrigger: {
                    trigger: '.slide-con',
                    start: '20% top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
                y: -500
            },'a')
            gsap.from('.img-3', {
                scrollTrigger: {
                    trigger: '.slide-con',
                    start: '20% top',
                    end: 'bottom bottom',
                    scrub: 1,
                },
                y: 200
            },'a')
        }
    )
    const crsrAnimation = (dets) => {
        gsap.to(crsrRef.current, {
            top: dets.clientY,
            left: dets.clientX,
        })
    }
    const crsrleave = (dets) => {
        gsap.to(crsrRef.current, {
            opacity: 0,
            scale: 0
        })
    }
    return (
        <>
        <div className='hidden md:block md:w-full slide-con md:h-[400vh] md:bg-black md:text-white'>
            <div className="slides md:w-full md:h-screen md:flex md:sticky md:top-0">
                <div className='md:w-full slide-1 relative overflow-hidden md:h-full md:flex-shrink-0'>
                    <h1 className='absolute z-10 bold text-[8vw] font-bold uppercase'>HUman in space</h1>
                    <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2]' src="https://i.pinimg.com/564x/c4/b3/1d/c4b31d1f1e2631d4c89a28318d3c1046.jpg" alt="" />
                    <img className='move-img absolute top-0 right-[10%] scale-[1.5]' src="https://i.pinimg.com/236x/b6/f4/15/b6f41561faa693eb1eba3b1da48bc3cd.jpg" alt="" />
                </div>
                <div className='md:w-full slide-2 relative overflow-hidden flex items-center justify-center md:h-full md:flex-shrink-0'>
                    <h1 className='absolute z-9c whitespace-nowrap bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] font-bold uppercase'>HUman in space</h1>
                    <img className='scale-[4]' src="https://i.pinimg.com/474x/4c/10/79/4c1079867725aff399c565a555c4ac3e.jpg" alt="" />
                    <h1 className='absolute z-10 bold bottom-0 left-0 text-[8vw] font-bold uppercase'>HUman in space</h1>
                </div>
                <div className='md:w-full flex relative items-center justify-center slide-3 md:h-full md:flex-shrink-0'>
                    <img className='up-img absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[4]' src="https://i.pinimg.com/236x/25/03/23/250323269c906b90ec3f4404e1cc28e4.jpg" alt="" />
                    <h1 className='absolute z-[9] whitespace-nowrap bold top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9vw] font-bold uppercase'>HUman in space</h1>
                    <img className='img-3 z-[10]  scale-[.8] right-0 top-[20%]  -translate-y-1/2 absolute' src="https://i.pinimg.com/474x/70/29/fb/7029fba862cc2c5dc64fbaf2f321556b.jpg" alt="" />
                </div>
                <div className='md:w-full md:h-full relative md:flex-shrink-0'>
                    <img onMouseMove={(dets)=> crsrAnimation(dets)} className='absolute left-[12%] scale-[1.5]' src="https://i.pinimg.com/736x/ea/01/5a/ea015a2ef411979d94656a9f0d39c3e5.jpg" alt="" />
                    <h1 className='absolute z-[9] whitespace-nowrap bold bottom-0 right-[-10%] -translate-x-1/2 text-[8vw] font-bold uppercase'>explore</h1>
                    <img ref={crsrRef}  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://i.pinimg.com/236x/01/4e/5e/014e5eef385a6d6f13285b28eb64f25f.jpg" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Page5
