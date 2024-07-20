import React from 'react';
import '../App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import introLogo from '../assets/logo.png'
import introText from '../assets/introText.png'
import '../App.css'
const App = () => {
    useGSAP(
        ()=>{
            const introTl = gsap.timeline();
            introTl.from('.introLogo',{
              delay: 1.2,
              opacity: 0,
              duration: .8
            })
            introTl.from('.introText',{
              opacity: 0,
              duration: .8
            })
            introTl.to('.seekbar',{
              width: '100%',
              duration: 2,
              ease: 'power4.inOut'
            })
            introTl.to('.intro',{
             opacity: 0
            })
        }
    )
  return (
    <div className="w-full h-screen fixed top-0 z-[102] intro bg-zinc-200 flex flex-col gap-[3vw] items-center justify-center">
      <div className='flex justify-center gap-[1vw] flex-col items-center'>
        <img className='w-[10%] introLogo' src={introLogo} alt="" />
        <img className='w-[15%] introText' src={introText} alt="" />
      </div>
      <div className='w-[60%] flex flex-col gap-y-3'>
      <div className='w-full h-[6px] rounded-full overflow-hidden bg-zinc-400'>
        <div className='w-0 h-full seekbar bg-zinc-800'></div>
      </div>
      </div>
    </div>
  );
};

export default App;