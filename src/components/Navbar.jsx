import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import '../App.css';
import logo from '../assets/logo.png';
import list1 from '../assets/list1.png';
import list2 from '../assets/lis2.jpg';
import list3 from '../assets/list3.jpg';
import list4 from '../assets/list4.jpg';
import list5 from '../assets/list5.jpg';
import list6 from '../assets/list6.png';
import steering from '../assets/steering.png';

const Navbar = () => {
  const menuFull = useRef();
  const h1Ref = useRef();
  const [menu, setmenu] = useState(false);
  const [flag, setflag] = useState(0);

  const toggle = () => {
    setmenu(!menu);
    if (flag === 0) {
      gsap.to(menuFull.current, {
        opacity: 1,
        duration: 0.2,
        onStart: () => {
          menuFull.current.style.visibility = 'visible';
        }
      });
      h1Ref.current.style.color = 'black';
      h1Ref.current.innerHTML = 'Close';
      setflag(1);
    } else {
      gsap.to(menuFull.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          menuFull.current.style.visibility = 'hidden';
        }
      });
      h1Ref.current.style.color = 'white';
      h1Ref.current.innerHTML = 'Menu';
      setflag(0);
    }
  };

  const lists = ['models', 'vehicles', 'services', 'experiences'];

  return (
    <>
      <div ref={menuFull} className='w-full h-screen menu-screen transition-all duration-[.5] bg-white flex fixed items-center z-[98] opacity-0 invisible justify-center gap-y-3 gap-[5vw] p-5'>
        <div className='w-full px-[2vw] flex justify-between'>
          <div className='text-black flex items-start justify-center flex-col gap-y-[2vw]'>
            <div className='text-black flex items-start justify-center flex-col '>
              <h1 className='good-times text-2xl'>Sales</h1>
              <p className='text text-xl'>Visit our Find Us page to locate your <br /> nearest Porsche location.</p>
            </div>
            <div className='text-black flex items-start justify-center flex-col'>
              <h1 className='good-times text-2xl'>Customer</h1>
              <p className='text text-xl'>Support Visit our Support page to find <br /> answers and learn about our products.</p>
            </div>
          </div>
          <div className=' flex flex-col gap-y-[2vw] up-con relative'>
            <div className='up flex-col flex  gap-y-[2vw]'>
              {[list1, list2, list3, list4, list5, list6].map((item, index) => (
                <div key={index} className='w-[10vw] h-[20vw] rounded-full overflow-hidden'>
                  <img className='w-full h-full object-cover' src={item} alt='' />
                </div>
              ))}
            </div>
            <div className='up flex flex-col  gap-y-[2vw]'>
              {[list1, list2, list3, list4, list5, list6].map((item, index) => (
                <div key={index} className='w-[10vw] h-[20vw] rounded-full overflow-hidden'>
                  <img className='w-full h-full object-cover' src={item} alt='' />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='w-full h-full flex relative'>
          <img className='absolute transition-all right-[-50%] opacity-[.3] top-1/2 -translate-y-1/2 w-[100%]' src={steering} alt='' />
          <div className='flex flex-col justify-center'>
            {lists.map((item, index) => (
              <div key={index} className='relative list '>
                <h1 className='text-5xl md:text-7xl cursor-pointer text-black capitalize text transition-all duration-[.3] hover:text-yellow-500'>
                  {item}
                </h1>
              </div>
            ))}
          </div>
          <div className='h-full flex flex-col justify-end'>
            <p className='text-xl text text-right'>
              Factory Delivery <br /> Tequipment – Genuine Accessories Exclusive  – Individual Vehicles
            </p>
          </div>
        </div>
      </div>
      <div className='fixed z-[99] top-0 left-1/2 -translate-x-1/2 text-white  flex items-center justify-between w-[90%] md:w-full h-[12vh] '>
        <img className='w-[15%] md:w-[7%]' src={logo} alt='' />
        <div onClick={toggle} className='mr-5 text-xl flex bg-zinc-900 md:bg-transparent rounded-full px-4 py-2 md:p-2 flex-col items-end gap-2 cursor-pointer '>
          <h1 ref={h1Ref} className='transition-all text-2xl'>Menu</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
