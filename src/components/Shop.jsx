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
import ShopText from '../assets/introText.png'


const Shop = () => {
    const imgRef = useRef([])
    const screenPara = useRef()
    const screenName = useRef()
    const screenprice = useRef()
    const screenspeed = useRef()
    const screenRef = useRef()
    const priceRef = useRef()
    const speedRef = useRef()

    const items = [{
        img: car718,
        name: '718',
        color: 'brown',
        design: 'Sport Saloon',
        seats: '2',
        para: 'Porsche 718 models. All models, details and equipment variants. Can be configured, compared and experienced instantly.',
        id: 0,
        price: 'INR 14,772,000',
        speed: '275'
    }, {
        img: car911,
        name: '911',
        color: 'red',
        design: 'Sport Saloon',
        seats: '2',
        para: 'THE LEGENDARY 911. THE IDENTITY OF THE PORSCHE BRAND - SINCE 1963. HERE YOU WILL FIND AN OVERVIEW OF ALL PORSCHE 911 MODEL VARIANTS.',
        id: 1,
        price: 'INR 14,772,000',
        speed: '330'


    },
    {
        img: taycan,
        name: 'taycan',
        color: 'white',
        design: 'coupe',
        seats: '2',
        para: 'A vast range of emotions. The all-electric Taycan with Performance Battery, sharpened driving dynamics and a pure proportions. Pure Porsche E-Performance.',
        id: 2,
        price: 'INR 14,772,000',
        speed: '230'


    },
    {
        img: panamara,
        name: 'panamara',
        color: 'brown',
        design: 'SUV',
        seats: '4 - 5',
        para: 'The Porsche Panamera. A Sports Car without compromise for everyday use. Drive a Sports Car for 4 including luggage. An overview of all models and equipment ...',
        id: 3,
        price: 'INR 14,772,000',
        speed: '168'

    },
    {
        img: macan,
        name: 'macan',
        color: 'white',
        design: 'SUV',
        seats: '4 - 5',
        para: 'Five doors, five seats, yet incomparable, unmistakable and unstoppable. In its latest generation, the Macan is and remains the sports car of compact SUVs.',
        id: 4,
        price: 'INR 14,772,000',
        speed: '144'

    },
    {
        img: cayenne,
        name: 'cayenne',
        color: 'black',
        design: 'SUV',
        seats: '4 - 5',
        para: 'The Cayenne models. Drive a Sports Cars for the whole family. Including luggage. An overview of all model variants and equipment details.',
        id: 5,
        price: 'INR 14,772,000',
        speed: '164'

    },
    ]

    const imgChanger = (item) => {
        const screenImg = screenRef.current;
        const newPara = screenPara.current;
        const newName = screenName.current
        const priceName = screenprice.current
        const speedName = screenspeed.current
        gsap.to(screenImg, {
            opacity: 0, y: 20, duration: 0.3, onComplete: () => {
                screenImg.src = item.img;
                gsap.to(screenImg, { opacity: 1, duration: 0.3, y: 0 });
            }
        });
        gsap.to(newPara, {
            opacity: 0, y: 20, duration: 0.3, onComplete: () => {
                newPara.innerHTML = item.para;
                gsap.to(newPara, { opacity: 1, duration: 0.3, y: 0 });
            }
        });
        gsap.to(newName, {
            opacity: 0, y: -20, duration: 0.3, onComplete: () => {
                newName.innerHTML = item.name;
                gsap.to(newName, { opacity: 1, duration: 0.3, y: 0 });
            }
        });
        gsap.to(priceName, {
            opacity: 0, y: -20, duration: 0.3, onComplete: () => {
                priceName.innerHTML = item.price;
                gsap.to(priceName, { opacity: 1, duration: 0.3, y: 0 });
            }
        });
        gsap.to(speedName, {
            opacity: 0, y: 20, duration: 0.3, onComplete: () => {
                speedName.innerHTML = item.speed + ' km/h';
                gsap.to(speedName, { opacity: 1, duration: 0.3, y: 0 });
            }
        });
    }

    return (
        <div className='w-full flex gap-5'>
            <div className='w-full md:w-[60%] flex-wrap md:flex-col p-3 justify-center items-center flex gap-5 text-white'>
                {
                    items.map((item, index) => {
                        return (
                            <div key={index} className='w-full md:w-full'>
                                <div onClick={() => imgChanger(item)} className='w-full relative cursor-pointer transition-all rounded-md overflow-hidden h-[50vw] md:h-[40vw] card'>
                                    <img ref={el => imgRef.current[index] = el} className='w-full h-full object-cover' src={item.img} alt="" />
                                </div>
                                <h1 className='text text-xl capitalize'>{item.name}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full h-screen overflow-hidden items-center justify-center gap-y-3 flex-col sticky top-0 bg-white hidden md:flex'>
                <img className='w-[25%] absolute left-[5%] top-[12%] ' src={ShopText} alt="" />
                <div className='h-[35%] bottom-0 z-[9] w-[95%] rounded-tl-2xl rounded-tr-2xl bg-black text-white items-center justify-around absolute flex'>
                    <div className='flex flex-col items-center'>
                    <h1 className='good-times text-xl text-zinc-600'>Price</h1>
                    <h1 ref={screenprice} className='good-times text-2xl'>{items[0].price}</h1>
                    </div>
                    <div className='flex flex-col items-center'>
                    <h1 className='good-times text-xl text-zinc-600'>speed</h1>
                    <h1 ref={screenspeed} className='good-times text-2xl'>{items[0].speed}</h1>
                    </div>
                </div>
                <div className='flex items-center justify-around gap-5' >
                <div className='w-[25vw] h-[20vw] overflow-hidden z-10 rounded-md '>
                    <img ref={screenRef} className='w-full h-full object-cover' src={items[0].img} alt="" />
                </div>
                <div className='w-[40%] relative z-10 flex flex-col gap-y-3'>
                    <h1 ref={screenName} className='text-4xl uppercase text '>{items[0].name}</h1>
                    <p ref={screenPara} className=' uppercase text-xl text text-left'>{items[0].para}</p>
                </div>
                </div>
                <div className='z-10 w-full flex items-start px-[3vw]'>
                    <button className='bg-white relative w-[15vw] text-xl text py-3 rounded-md'>Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default Shop
