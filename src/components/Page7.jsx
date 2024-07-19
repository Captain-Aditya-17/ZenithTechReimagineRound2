import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
gsap.registerPlugin(ScrollTrigger);
import img1 from '../assets/img1.jpg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpeg'
import '../App.css'

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
        ['e-performance', 'compare model', 'locate a dealer', 'porsche Lifestyle', 'Porsche Social', 'Discover', 'Latest News','contact us',].map((item, index) => {
          return <h1 key={index} className={`text-[2vw] mt-[2vw] mb-[3vw] md:text-9xl text cursor-pointer md:m-0 text7 z-[10]  uppercase`}>{item}</h1>
        })
      }
      <div className='hidden md:block md:absolute md:w-full md:h-full md:px-5'>
        <img className='img absolute scale-[0.4] top-0 left-0' src={img1} alt="" />
        <img className='img absolute top-[20%] z-[11] left-1/3 scale-[.6]' src={img3} alt="" />
        <img className='img absolute top-[60%] left-[50%] z-[11] -translate-x-1/2 -translate-y-1/2 scale-[.6]' src={img7} alt="" />
        <img className='img absolute bottom-[30%] left-0 scale-[.6]' src={img4} alt="" />
        <img className='img absolute top-[40%] right-0 scale-[.6]' src={img5} alt="" />
        <img className='img absolute bottom-0 scale-[.6]' src={img6} alt="" />
      </div>
    </div>
  );
};

export default Page7;