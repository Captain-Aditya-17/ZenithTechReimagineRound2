import React, { useRef } from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const iconRef = useRef([])
  const colorChanger = (index) => {
    iconRef.current[index].style.backgroundColor = 'red'
  }
  return (
    <div className='w-full h-screen relative flex items-center gap-y-3 flex-col justify-center bg-white text-black'>
      <div className='text-4xl text capitalize'>Porsche company</div>
      {
        ['Latest News', 'At a Glance', 'Jobs & Careers', 'Contact & Information', 'Christophorus - The Porsche Magazine'].map((item, index) => {
          return <h1 key={index} className='text transition-all cursor-pointer hover:opacity-50'>{item}</h1>
        })
      }
      <div className='flex gap-3'>
        {
          [<FaFacebook />, <FaYoutube />, <FaPinterest />, <FaInstagram />, <FaLinkedin />].map((item, index) => {
            return <i onMouseEnter={() => colorChanger(index)} ref={el => iconRef.current[index] = el} key={index} className='text-4xl transition-all md:p-3 rounded-full duration-[.3s] cursor-pointer'>{item}</i>
          })
        }

      </div>
      <div className='absolute flex items-center justify-center w-full h-[20vw] md:h-[5vw] bg-black bottom-0 text-white'>
        <h1 className='text text-[1vw] text-center'>© 2024 Porsche India - SKODA AUTO Volkswagen India Private Limited - India. Legal notice. Privacy Policy. </h1>
      </div>
    </div>
  )
}

export default Footer