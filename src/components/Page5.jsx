import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
import slide1 from '../assets/dark.jpg'
import slide1_2 from '../assets/slide1.2.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide3_2 from '../assets/slide3_2.jpg'
import slide4 from '../assets/slide4.jpg'
import slide4_2 from '../assets/slide4_2.jpg'
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
                scale: .8,
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
        <div className='hidden md:block relative md:w-full slide-con md:h-[400vh] md:bg-black md:text-white'>
            <div className="slides md:w-full md:h-screen md:flex md:sticky md:top-0">
                <div className='md:w-full slide-1 relative overflow-hidden md:h-full md:flex-shrink-0'>
                    <h1 className='absolute z-10 bold text-[8vw] font-bold uppercase'>EXculise Design</h1>
                    <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.8]' src={slide1} alt="" />
                    <img className='move-img absolute top-[-20%] right-0 scale-[.8]' src={slide1_2} alt="" />
                </div>
                <div className='md:w-full slide-2 relative overflow-hidden flex items-center justify-center md:h-full md:flex-shrink-0'>
                    <h1 className='absolute z-9c whitespace-nowrap bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] font-bold uppercase'>best in fisnishing</h1>
                    <img className='scale-[4]' src={slide2} alt="" />
                    <h1 className='absolute z-10 bold bottom-0 left-0 text-[8vw] font-bold uppercase'>Premium interior</h1>
                </div>
                <div className='md:w-full flex relative items-center justify-center slide-3 md:h-full md:flex-shrink-0'>
                    <img className='up-img absolute left-0 top-0  scale-[1]' src={slide3} alt="" />
                    <h1 className='absolute z-[9] whitespace-nowrap bold top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9vw] font-bold uppercase'>Feels proffesional</h1>
                    <img className='img-3 z-[10]  scale-[.6] right-0 top-[10%]  -translate-y-1/2 absolute' src={slide3_2} alt="" />
                </div>
                <div onMouseMove={(dets)=> crsrAnimation(dets)} onMouseLeave={(dets)=> crsrleave(dets)} className='md:w-full md:h-full relative md:flex-shrink-0'>
                    <img className='absolute top-[-25%] left-[-20%] scale-[.6]' src={slide4} alt="" />
                    <h1 className='absolute z-[9] whitespace-nowrap bold bottom-0 right-[-10%] -translate-x-1/2 text-[8vw] font-bold uppercase'>explore</h1>
                    <img ref={crsrRef}  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.3]' src={slide4_2} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Page5
