import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
gsap.registerPlugin(useGSAP);
import '../App.css'
import logo from '../assets/logo.png'
import list1 from '../assets/list1.png'
import list2 from '../assets/lis2.jpg'
import list3 from '../assets/list3.jpg'
import list4 from '../assets/list4.jpg'
const Navbar = () => {
  const menuFull = useRef()
  const [menu, setmenu] = useState(false)
  const [flag, setflag] = useState(0)
  const [animate, setanimate] = useState(false)
  const toggole = () => {
    setmenu(!menu)
    if (flag === 0) {
      menuFull.current.style.left = 0
      setflag(1)
    }
    else {
      menuFull.current.style.left = '-100%'
      setflag(0)
    }
    gsap.from('.circle', {
      delay: .8,
      opacity: 0,
      y: 200,
      duration: 0.5,
    });
  }
  const lists = [
    {
      text: 'models',
      image: list1,
    },
    {
      text: 'vehicles',
      image: list2,
    },
    {
      text: 'services',
      image: list3,
    },
    {
      text: 'experinces',
      image: list4,
    },
  ]
  

  return (
    <>
      <div ref={menuFull} className='w-full md:w-1/2 h-screen menu-screen transition-all duration-500 bg-white fixed z-[98] left-[-100%] flex justify-center flex-col gap-y-3 p-5'>
        {
          lists.map((item,index)=>{
            return <div className='relative list'>
              <h1 key={index} className='text-5xl md:text-7xl cursor-pointer text-black capitalize quantify transition-all hover:text-yellow-500'>{item.text}</h1>
              <img className={`absolute right-10 top-[-20vw] opacity-0 scale-[.5]`} src={item.image} alt="" />
            </div>
          })
        }
      </div>
      <div className='fixed z-[99] top-0 left-1/2 -translate-x-1/2 text-white  flex items-center justify-between w-[90%] md:w-full h-[12vh] '>
        <img className='w-[15%] md:w-[7%]' src={logo} alt="" />
        <div onClick={toggole} className='mr-5 text-xl flex bg-zinc-900 md:bg-transparent rounded-full px-4 py-2 md:p-2 flex-col items-end gap-2 cursor-pointer '>
          <div className={`w-[8vw]  mix-blend-difference transition-all bg-white rounded-xl h-[3px] md:h-[4px] md:rounded-xl md:w-[2.5vw]`}></div>
          <div className={`w-[8vw]  mix-blend-difference transition-all bg-white rounded-xl h-[3px] md:h-[4px] md:rounded-xl md:w-[2vw] `}></div>
        </div>
      </div>
    </>
  )
}

export default Navbar