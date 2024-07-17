import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
gsap.registerPlugin(useGSAP);
import '../App.css'
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
      <div ref={menuFull} className='w-full h-screen menu-screen transition-all duration-300 bg-white fixed z-[98] -top-[100%] flex justify-center flex-col gap-y-3 p-5'>
        {
          ['models','vehicles','services','experinces'].map((index,item)=>{
            return <h1 className='text-5xl md:text-7xl cursor-pointer capitalize quantify'>{index}</h1>
          })
        }
      </div>
      <div className='fixed bg-white z-[99] top-[2%] left-1/2 -translate-x-1/2 text-white flex items-center rounded-full justify-between p-5 w-[90%] md:w-1/2 h-[8vh] '>
        <img className='w-[10%]' src="https://logos-world.net/wp-content/uploads/2021/06/Porsche-Logo.png" alt="" />
        <div onClick={toggole} className='mr-5 text-xl flex flex-col gap-2 cursor-pointer '>
          <div className={`w-[8vw] mix-blend-difference transition-all bg-white rounded-xl h-[3px] md:h-[4px] md:rounded-xl md:w-[2.5vw]`}></div>
          <div className={`w-[5vw] mix-blend-difference transition-all bg-white rounded-xl h-[3px] md:h-[4px] md:rounded-xl md:w-[1vw]`}></div>
          <div className={`w-[8vw] mix-blend-difference transition-all bg-white rounded-xl h-[3px] md:h-[4px] md:rounded-xl md:w-[2.5vw] `}></div>
        </div>
      </div>
    </>
  )
}

export default Navbar