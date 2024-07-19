import React from 'react'
import '../App.css'
import part1 from '../assets/part1.jpg'
import part2 from '../assets/part2.jpg'
const Page10 = () => {
  return (
    <div className='w-full h-screen md:h-[140vh] text-white flex gap-5 p-5 items-center flex-col justify-center md:justify-start'>
      <div className='w-full h-full flex items-center justify-center'> 
        <h1 className='text-4xl bold uppercase text-center md:text-6xl'>Luxury Start where <br /> <span className='text-yellow-500'>porshe</span> start</h1>
        </div>
      <div className='w-full h-[50%] flex items-center justify-center gap-5'> 
        {
          [part1,part2].map((item,index)=>{
            return <div key={index} className='w-full h-full rounded-xl overflow-hidden '>
              <img className='w-full h-full object-cover' src={item} alt="" />
            </div>
          })
        }
        </div>
    </div>
  )
}

export default Page10