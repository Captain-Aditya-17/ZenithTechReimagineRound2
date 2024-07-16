import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const menuFull = useRef()
  const [menu, setmenu] = useState(false)
  const [flag, setflag] = useState(0)
  const [animate, setanimate] = useState(false)
  const toggole = () => {
    setmenu(!menu)
    if (flag === 0) {
      menuFull.current.style.top = 0
      setflag(1)
    }
    else {
      menuFull.current.style.top = '-100%'
      setflag(0)
    }
    gsap.from('.circle', {
      delay: .8,
      opacity: 0,
      y: 200,
      duration: 0.5, 
    });
  }

  return (
    <>
      <div ref={menuFull} className='w-full h-screen menu-screen transition-all duration-300 bg-white fixed z-[98] -top-[100%]'>
        <div className='circle w-[10vw] h-[10vw] bg-red-500 rounded-full'></div>
      </div>
      <div className='fixed z-[99] text-white flex items-center justify-between p-5 w-full h-[10vh] '>
        <input type="text" placeholder='Search' className='w-[70%] rounded-full py-2 px-4 outline-none bg-black opacity-50 md:p-2 md:w-[30%] md:rounded-full md:outline-none md:bg-black md:opacity-80' />
        <div onClick={toggole} className='mr-5 text-xl flex flex-col gap-2 cursor-pointer '>
          <div className={`w-[8vw] mix-blend-difference text-black transition-all rounded-xl h-[3px] md:h-[4px] md:rounded-xl md:w-[2.5vw] ${menu ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-[5vw] mix-blend-difference transition-all rounded-xl h-[3px] md:h-[4px] md:rounded-xl md:w-[1vw] ${menu ? 'bg-black' : 'bg-white'}`}></div>
          <div className={`w-[8vw] mix-blend-difference transition-all rounded-xl h-[3px] md:h-[4px] md:rounded-xl md:w-[2.5vw] ${menu ? 'bg-black' : 'bg-white'}`}></div>
        </div>
      </div>
    </>
  )
}

export default Navbar