import React from 'react'
import '../App.css'
const Page10 = () => {
  return (
    <div className='w-full h-screen md:h-[140vh] text-white flex gap-5 p-5 items-center flex-col justify-center md:justify-start'>
      <div className='w-full h-full flex items-center justify-center'> 
        <h1 className='text-4xl bold uppercase text-center md:text-6xl'>Luxury Start where <br /> <span className='text-yellow-500'>porshe</span> start</h1>
        </div>
      <div className='w-full h-[50%] flex items-center justify-center gap-5'> 
        {
          ['https://i.pinimg.com/564x/f0/2d/29/f02d2999fe0c4d1a82179f9cb40c94d1.jpg','https://i.pinimg.com/564x/44/ec/d1/44ecd14cb871f56b514a9559e727c28d.jpg'].map((item,index)=>{
            return <div key={index} className='w-full h-full rounded-xl overflow-hidden bg-red-500'>
              <img className='w-full h-full object-cover' src={item} alt="" />
            </div>
          })
        }
        </div>
    </div>
  )
}

export default Page10