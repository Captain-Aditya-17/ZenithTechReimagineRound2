import React from 'react';
import '../App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import introLogo from '../assets/logo.png'
import '../App.css'
const App = () => {
    useGSAP(
        ()=>{
            const introTl = gsap.timeline();
            introTl.from('.introLogo',{
              delay: 1,
              opacity: 0,
              duration: 1
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
      <div className='flex justify-center'>
        <img className='w-[15%] introLogo' src={introLogo} alt="" />
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