import React, { useRef, useState } from 'react'
import '../App.css'
import gsap from 'gsap'
import car718 from '../assets/718.avif'
import car911 from '../assets/911.jpeg'
import taycan from '../assets/taycan.webp'
import panamara from '../assets/panamara.jpg'
import macan from '../assets/macan.jpg'
import cayenne from '../assets/black.jpg'
import poster from '../assets/poster.webp'

const Shop = () => {
    const imgRef = useRef([])
    const screenPara = useRef()
    const screenRef = useRef()

    const items = [{
        img: car718,
        name: '718',
        color: 'brown',
        design: 'Sport Saloon',
        seats: '2',
        para: 'Porsche 718 models. All models, details and equipment variants. Can be configured, compared and experienced instantly.',
        id: 0
    }, {
        img: car911,
        name: '911',
        color: 'red',
        design: 'Sport Saloon',
        seats: '2',
        para: 'THE LEGENDARY 911. THE IDENTITY OF THE PORSCHE BRAND - SINCE 1963. HERE YOU WILL FIND AN OVERVIEW OF ALL PORSCHE 911 MODEL VARIANTS.',
        id: 1

    },
    {
        img: taycan,
        name: 'taycan',
        color: 'white',
        design: 'coupe',
        seats: '2',
        para: 'A vast range of emotions. The all-electric Taycan with Performance Battery, sharpened driving dynamics and a pure proportions. Pure Porsche E-Performance.',
        id: 2

    },
    {
        img: panamara,
        name: 'panamara',
        color: 'brown',
        design: 'SUV',
        seats: '4 - 5',
        para: 'The Porsche Panamera. A Sports Car without compromise for everyday use. Drive a Sports Car for 4 including luggage. An overview of all models and equipment ...',
        id: 3
    },
    {
        img: macan,
        name: 'macan',
        color: 'white',
        design: 'SUV',
        seats: '4 - 5',
        para: 'Five doors, five seats, yet incomparable, unmistakable and unstoppable. In its latest generation, the Macan is and remains the sports car of compact SUVs.',
        id: 4
    },
    {
        img: cayenne,
        name: 'cayenne',
        color: 'black',
        design: 'SUV',
        seats: '4 - 5',
        para: 'The Cayenne models. Drive a Sports Cars for the whole family. Including luggage. An overview of all model variants and equipment details.',
        id: 5
    },
    ]

    const imgChanger = (item) => {
        const screenImg = screenRef.current;
        const newPara = screenPara.current;
        
        gsap.to(screenImg, {
            opacity: 0, y: 20, duration: 0.3, onComplete: () => {
                screenImg.src = item.img;
                gsap.to(screenImg, { opacity: 1, duration: 0.3, y: 0 });
            }
        });
        gsap.to(newPara, {
            opacity: 0, y: -20, duration: 0.3, onComplete: () => {
                newPara.innerHTML = item.para;
                gsap.to(newPara, { opacity: 1, duration: 0.3, y: 0 });
            }
        });
    }

    return (
        <div className='w-full flex gap-5'>
            <div className='w-full flex-wrap p-4 bg-black justify-center flex gap-5 text-white'>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className='w-[40vw] md:w-[20vw]'>
                                <div onClick={() => imgChanger(item)} className='w-full relative cursor-pointer transition-all rounded-md overflow-hidden h-[50vw] md:h-[20vw] card'>
                                    <img ref={el => imgRef.current[index] = el} className='w-full h-full object-cover' src={item.img} alt="" />
                                </div>
                                <h1 className='text text-xl capitalize'>{item.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full h-screen overflow-hidden items-center justify-center gap-y-3 flex-col sticky top-0 bg-white hidden md:flex'>
                <div className='h-1/3 bottom-0 z-[9] w-[95%] rounded-tl-2xl rounded-tr-2xl bg-black absolute'></div>
                <div className='w-[80%] relative z-10 '>
                    <p ref={screenPara} className=' uppercase text-xl text text-center'>Porsche Beauties</p>
                </div>
                <div className='w-[20vw] h-[20vw] overflow-hidden z-10 rounded-md'>
                    <img ref={screenRef} className='w-full h-full object-cover' src={poster} alt="" />
                </div>
                <div className='z-10 '>
                    <button className='bg-white relative w-[15vw] text-xl text py-3 rounded-md'>Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default Shop
