import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
import slide1 from '../assets/dark.jpg'
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
                    <h1 className='absolute z-10 bold text-[8vw] font-bold uppercase'>HUman in space</h1>
                    <img className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.8]' src={slide1} alt="" />
                    <img className='move-img absolute top-[-20%] right-0 scale-[.8]' src="https://i.pinimg.com/474x/fc/bc/3b/fcbc3b628f4f1036fd0f1ee903edf67f.jpg" alt="" />
                </div>
                <div className='md:w-full slide-2 relative overflow-hidden flex items-center justify-center md:h-full md:flex-shrink-0'>
                    <h1 className='absolute z-9c whitespace-nowrap bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8vw] font-bold uppercase'>HUman in space</h1>
                    <img className='scale-[4]' src="https://cdn.leonardo.ai/users/0645e633-4052-437b-9080-96567b61cfc9/generations/606b90b9-6580-479a-af7e-9c1386ab5d73/Default_porsche_interior_1.jpg" alt="" />
                    <h1 className='absolute z-10 bold bottom-0 left-0 text-[8vw] font-bold uppercase'>HUman in space</h1>
                </div>
                <div className='md:w-full flex relative items-center justify-center slide-3 md:h-full md:flex-shrink-0'>
                    <img className='up-img absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1]' src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_690x388/dam/pnr/2021/Sports-Society/Sports/Paul-Casey-Dubai/Markenbotschafter-Paul-Casey-mit-dem-Taycan-Turbo.jpg/jcr:content/Markenbotschafter%20Paul%20Casey%20mit%20dem%20Taycan%20Turbo.jpg" alt="" />
                    <h1 className='absolute z-[9] whitespace-nowrap bold top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9vw] font-bold uppercase'>HUman in space</h1>
                    <img className='img-3 z-[10]  scale-[.6] right-0 top-[20%]  -translate-y-1/2 absolute' src="https://cdn.leonardo.ai/users/0645e633-4052-437b-9080-96567b61cfc9/generations/8deff21e-6d9d-4a5a-b58e-b1eb6df20e65/Default_porsche_dark_2.jpg" alt="" />
                </div>
                <div onMouseMove={(dets)=> crsrAnimation(dets)} className='md:w-full md:h-full relative md:flex-shrink-0'>
                    <img className='absolute top-[-25%] left-[-20%] scale-[.6]' src="https://newsroom.porsche.com/.imaging/mte/porsche-templating-theme/image_1290x726/dam/pnr/porsche_newsroom/Unternehmen/Marcel-Nguyen/_MG_3612_NR/jcr:content/_MG_3612_NR.jpg" alt="" />
                    <h1 className='absolute z-[9] whitespace-nowrap bold bottom-0 right-[-10%] -translate-x-1/2 text-[8vw] font-bold uppercase'>explore</h1>
                    <img ref={crsrRef}  className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.2]' src="https://cdn.leonardo.ai/users/0645e633-4052-437b-9080-96567b61cfc9/generations/016d92fb-dcbe-40bd-b3e1-319174b201ff/Default_porsche_car_in_modern_city_2.jpg" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Page5
