import React from 'react'
import Home from './components/Home'
import Page2 from './components/Page2'
import Navbar from './components/Navbar'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import Page5 from './components/Page5'
import Page6 from './components/Page6'
import LocomotiveScroll from 'locomotive-scroll';
import Page7 from './components/Page7'
import Page8 from './components/Page8'
import Page9 from './components/Page9'
import Page10 from './components/Page10'
import gsap from 'gsap'
import Shop from './components/Shop'
import Page11 from './components/Page11'
import Footer from './components/Footer'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const cursorAnimation = (dets) => {
    gsap.to('.cursor', {
      x: dets.clientX,
      y: dets.clientY,
    })
  }
  const none = (dets) => {
    gsap.to('.cursor', {
      opacity: 0,
      scale: 0
    })
  }
  const reapt = (dets) => {
    gsap.to('.cursor', {
      opacity: 1,
      scale: 1
    })
  }

  return (
    <>
      <div
        onMouseMove={(dets) => cursorAnimation(dets)}
        className='bg-black'>
        <div className='cursor w-[3vw] h-[3vw] mix-blend-difference bg-white fixed z-[999]'></div>
        <div onMouseEnter={none} onMouseLeave={reapt}>
          <Navbar />
        </div>
        <Home />
        <Page2 />
        <Shop />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11/>
        <Footer/>
      </div>
    </>
  )
}

export default App