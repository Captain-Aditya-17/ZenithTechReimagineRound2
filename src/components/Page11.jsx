import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import '../App.css'
import page11 from '../assets/page11.jpg'
const Page11 = () => {
    useGSAP(
        () => {
            gsap.to('.img-11', {
                scrollTrigger: {
                    trigger: '.page-11',
                    start: '20% top',
                    end: 'bottom top',
                    scrub: 1
                },
                scale: .4,
                rotate: 5
            })
            gsap.to('.page-11', {
                scrollTrigger: {
                    trigger: '.page-11',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                    pin: true
                },
            })
        }
    )
    return (
        <div className='page-11 relative w-full h-screen overflow-hidden bg-black'>
            <div className='w-full h-full absolute flex items-center justify-center flex-col text-white'>
                <div className='right flex justify-end gap-5 rotate-[-5deg] bold uppercase'>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                </div>
                <div className='left flex justify-start gap-5 rotate-[-5deg] bold uppercase'>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                </div>
                <div className='right flex justify-end gap-5 rotate-[-5deg] bold uppercase'>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                    <h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'> Porsche</span></h1><h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1><h1 className='text-8xl flex flex-shrink-0'>Build Your <span className='stroke'>Porsche</span></h1> <h1 className='text-8xl flex flex-shrink-0'>Build Your Porsche</h1>
                </div>
            </div>
            <div className='w-full h-full absolute flex items-center justify-center'>
            <img className='img-11 scale-[3] md:scale-[1]' src={page11} alt="" />
            </div>
        </div>
    )
}

export default Page11