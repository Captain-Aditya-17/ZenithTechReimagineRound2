import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

const Page7 = () => {
  useEffect(() => {
    const texts = gsap.utils.toArray('.text7');
    texts.forEach((text, i) => {
      gsap.fromTo(text,
        {
          opacity: 0,
          y: 200
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: text,
            start: 'top center+=100',
            end: 'bottom center-=100',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);
  useEffect(() => {
    const imgs = gsap.utils.toArray('.img');
    imgs.forEach((img, i) => {
      gsap.fromTo(img,
        {
          opacity: 0,
          y: 200
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: img,
            start: 'top center+=100',
            end: 'bottom center-=100',
            scrub: 1,
            toggleActions: 'play none none reverse',
          }
        }
      );
    });
  }, []);
  return (
    <div className='page-7 relative w-full h-screen md:h-[200vh] flex items-center pt-[10vw] flex-col bg-yellow-500'>
      {
        ['hello world', 'hello world', 'hello world', 'hello world', 'hello world', 'hello world', 'hello world','hello world',].map((item, index) => {
          return <h1 className={`text-3xl mt-[2vw] mb-[2vw] md:text-9xl md:m-0 text7 z-[10] bold uppercase`}>{item}</h1>
        })
      }
      <div className='hidden md:block md:absolute md:w-full md:h-full md:px-5'>
        <img className='img absolute' src="https://i.pinimg.com/236x/c6/5c/1a/c65c1afb4f5a7aa2111c300dacb311c2.jpg" alt="" />
        <img className='img absolute right-10 top-[10%]' src="https://i.pinimg.com/236x/c6/5c/1a/c65c1afb4f5a7aa2111c300dacb311c2.jpg" alt="" />
        <img className='img absolute top-[30%] z-[11] left-1/3 ' src="https://i.pinimg.com/236x/c6/5c/1a/c65c1afb4f5a7aa2111c300dacb311c2.jpg" alt="" />
        <img className='img absolute top-[60%] left-1/2 z-[11] -translate-x-1/2 -translate-y-1/2' src="https://i.pinimg.com/236x/c6/5c/1a/c65c1afb4f5a7aa2111c300dacb311c2.jpg" alt="" />
        <img className='img absolute bottom-[30%] left-0' src="https://i.pinimg.com/236x/c6/5c/1a/c65c1afb4f5a7aa2111c300dacb311c2.jpg" alt="" />
        <img className='img absolute top-[40%] right-0' src="https://i.pinimg.com/236x/c6/5c/1a/c65c1afb4f5a7aa2111c300dacb311c2.jpg" alt="" />
        <img className='img absolute' src="https://i.pinimg.com/236x/c6/5c/1a/c65c1afb4f5a7aa2111c300dacb311c2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Page7;