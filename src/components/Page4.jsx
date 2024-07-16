import React from 'react'
import '../App.css'
const Page4 = () => {
  return (
    <div className='w-full h-screen bg-black relative text-white'>
      <img className='w-full h-full opacity-20 object-cover md:object-top' src="https://www.nasa.gov/wp-content/uploads/2023/07/lrc-2016-h1-p-meatball-092805.jpg" alt="" />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/6'>
        <h1 className='text-2xl whitespace-nowrap text md:text-8xl'>Happy Birthday, Meatball!</h1>
        <p className='mt-5 text-center md:text-xl'>On July 15, 2024, NASA’s logo is turning 65. The iconic symbol, known affectionately as “the meatball,” was developed at NASA’s Lewis Research Center in Cleveland (now Glenn Research Center). Employee James Modarelli, who started his career at the center as an artist and technical illustrator, was its chief designer.
        </p>
      </div>
    </div>
  )
}

export default Page4