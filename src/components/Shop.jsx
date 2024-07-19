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
    const [filteredItems, setFilteredItems] = useState([]);
    const imgRef = useRef([])
    const screenRef = useRef()

    const items = [{
        img: car718,
        name: '718',
        color: 'brown',
        design: 'Sport Saloon',
        seats: '2'
    }, {
        img: car911,
        name: '911',
        color: 'red',
        design: 'Sport Saloon',
        seats: '2'

    },
    {
        img: taycan,
        name: 'taycan',
        color: 'white',
        design: 'coupe',
        seats: '2'

    },
    {
        img: panamara,
        name: 'panamara',
        color: 'brown',
        design: 'SUV',
        seats: '4 - 5'
    },
    {
        img: macan,
        name: 'macan',
        color: 'white',
        design: 'SUV',
        seats: '4 - 5'
    },
    {
        img: cayenne,
        name: 'cayenne',
        color: 'black',
        design: 'SUV',
        seats: '4 - 5'
    },
    ]

    const imgChanger = (index) => {
        const screenImg = screenRef.current;
        gsap.to(screenImg, {
            opacity: 0,y: 20, duration: 0.3, onComplete: () => {
                screenImg.src = imgRef.current[index].src;
                gsap.to(screenImg, { opacity: 1, duration: 0.3,y: 0 });
            }
        });
    }
    const filter = (color) => {
        const data = items.filter(item => item.color === color);
        setFilteredItems(data);
        
    }
    const design = (design)=>{
        const designData = items.filter(item => item.design === design)
        setFilteredItems(designData)
    }
    const seats = (seats)=>{
        const seatsData = items.filter(item => item.seats === seats)
        setFilteredItems(seatsData)
    }
    return (
        <div className='w-full p-4 flex gap-5'>
            <div className='w-full flex-wrap p-4 bg-black justify-center flex gap-5 text-white'>
                <div className='w-full md:p-3 flex flex-col gap-5 text-white'>
                    <h1 className='text-4xl text'>Find your <span>Porsche</span></h1>
                   <div className='flex gap-5'>
                   <h1 className='md:text-xl bold tracking-[3px] uppercase font-bold'>color:</h1>
                    {
                        ['white', 'black', 'red', 'brown','cancel'].map((list, index) => {
                            return <h1 
                            onClick={() => filter(list)} key={index}
                            className={`md:text-xl capitalize cursor-pointer text pr-4 border-r-2 ${index === 4 && 'border-none text-red-600'}`}
                            >{list}</h1>
                        })
                    }
                   </div>
                   <div className='flex gap-5'>
                   <h1 className='md:text-xl bold tracking-[3px] uppercase font-bold'>Body design:</h1>
                    {
                        ['coupe', 'SUV', 'Sport Saloon','Cancel'].map((list, index) => {
                            return <h1 
                            onClick={() => design(list)} key={index}
                            className={`md:text-xl capitalize cursor-pointer whitespace-nowrap text pr-4 border-r-2 ${index === 3 && 'border-none text-red-600'}`}
                            >{list}</h1>
                        })
                    }
                   </div>
                   <div className='flex gap-5'>
                   <h1 className='md:text-xl bold tracking-[3px] uppercase font-bold'>Seats:</h1>
                    {
                        ['2', '4 - 5','Cancel'].map((list, index) => {
                            return <h1 
                            onClick={() => seats(list)} key={index}
                            className={`md:text-xl capitalize cursor-pointer text px-4 border-r-2 ${index === 2 && 'border-none text-red-600'}`}
                            >{list}</h1>
                        })
                    }
                   </div>

                </div>
                {
                   filteredItems.length === 0 ?
                   items.map((item, index) => {
                    return (
                        <div key={index} className='w-[42vw] md:w-[20vw]'>
                            <div onMouseEnter={() => videoHandler(index)} onClick={() => imgChanger(index)}  className='w-full relative cursor-pointer transition-all rounded-md overflow-hidden h-[50vw] md:h-[20vw] card'>
                                <img ref={el => imgRef.current[index] = el} onClick={() => imgChanger(index)} className='w-full h-full object-cover' src={item.img} alt="" />
                            </div>
                            <h1 className='text text-xl capitalize'>{item.name}</h1>
                        </div>
                    )
                })
                : filteredItems.map((item, index) => {
                    return (
                        <div key={index} className='w-[40vw]  md:w-[20vw]'>
                            <div  onClick={() => imgChanger(index)} className='w-full relative cursor-pointer transition-all rounded-md overflow-hidden h-[50vw] md:h-[20vw] card'>
                                <img ref={el => imgRef.current[index] = el} onClick={() => imgChanger(index)} className='w-full h-full object-cover' src={item.img} alt="" />
                            </div>
                            <h1 className='text text-xl capitalize'>{item.name}</h1>
                        </div>
                    )
                })
                }
            </div>
            <div className='w-full h-[40vw] overflow-hidden sticky top-[10%] rounded-xl hidden md:block'>
                <img ref={screenRef} className='w-full h-full object-cover object-center' src={poster} alt="" />
            </div>
        </div>
    )
}

export default Shop
