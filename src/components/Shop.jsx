import React, { useRef } from 'react'
import '../App.css'
import gsap from 'gsap'

const Shop = () => {
    const videoRef = useRef([])
    const videoHandler = (index)=>{
        videoRef.current[index].play()
    }
    const stopHandler = (index)=>{
        videoRef.current[index].stop()
    }
    return (
        <div className='w-full flex-wrap p-4 bg-black justify-center flex gap-5 text-white'>
            {
                [{img: 'https://i.pinimg.com/736x/38/95/38/389538687592bd06712f79aa25f54e4c.jpg',
                    name: 'car',
                    video: 'https://media.istockphoto.com/id/1302074275/video/driving-sports-car-on-a-race-track-at-sunset.mp4?s=mp4-640x640-is&k=20&c=JXp2d2AKW4PKj7MrBWWTTI5We5Fi_ej2JazwgLIKtsw='
                },{
                    img:'https://i.pinimg.com/474x/e3/aa/9c/e3aa9ce17ab53f854ec61042b2a3dc1f.jpg',
                    name: 'porsche',
                    video: 'https://media.istockphoto.com/id/1302074275/video/driving-sports-car-on-a-race-track-at-sunset.mp4?s=mp4-640x640-is&k=20&c=JXp2d2AKW4PKj7MrBWWTTI5We5Fi_ej2JazwgLIKtsw='
                },
                {img: 'https://images-porsche.imgix.net/-/media/D9863281BEC14473AE2EAD15A724142B_E84A5DFE8F4347BABEEEF9C28F9D4F40_Berlin---Desktop?iar=0&w=999&ar=3%3A4&q=85&auto=format',
                    name: 'car',
                    video: 'https://media.istockphoto.com/id/1302074275/video/driving-sports-car-on-a-race-track-at-sunset.mp4?s=mp4-640x640-is&k=20&c=JXp2d2AKW4PKj7MrBWWTTI5We5Fi_ej2JazwgLIKtsw='
                },
                {img: 'https://files.porsche.com/filestore/image/multimedia/none/carrange-flyout-718/small/e7041e23-0b8d-11ef-8128-005056bbdc38;sQ;twebp;c890;gc/porsche-small.webp',
                    name: 'car',
                    video: 'https://media.istockphoto.com/id/1302074275/video/driving-sports-car-on-a-race-track-at-sunset.mp4?s=mp4-640x640-is&k=20&c=JXp2d2AKW4PKj7MrBWWTTI5We5Fi_ej2JazwgLIKtsw='
                },].map((item,index)=>{
                    return <div key={index} className='w-[42vw] md:w-[20vw]'>
                    <div onMouseEnter={()=> videoHandler(index)} onMouseLeave={()=> stopHandler(index)} className='w-full relative cursor-pointer  transition-all rounded-md overflow-hidden h-[50vw] md:h-[20vw] card'>
                        <img className='w-full h-full object-cover' src={item.img} alt="" />
                        <video ref={el => videoRef.current[index] = el} className='absolute top-0 left-0 opacity-0 z-10 w-full h-full object-cover' src={item.video} muted></video>
                    </div>
                    <h1 className='text text-xl capitalize'>{item.name}</h1>
                </div>
                })
            }
        </div>
    )
}

export default Shop