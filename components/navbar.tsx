import React from 'react'
import { CiMenuBurger } from "react-icons/ci";
import Image from 'next/image';

const navbar = () => {
  return (
    <>
    {/* mobile nav */}
    <div className='relative w-full h-screen'>
        <Image src={"/images/mobile/image-hero.jpg"} alt={""} fill priority  className='object-cover'/>
     

     <div className='relative z-100 flex justify-between items-center p-6'>
        <Image src={"/images/logo.svg"} alt={""} width={200} height={200} />
        <CiMenuBurger className='text-4xl text-white' />
       
     </div>

      <div className=' relative z-100 pt-30 pl-3 pr-3'>
        <button className='text-white border-3 w-32  border-white text-3xl text-start pr-80 pl-3 pt-6 pb-6'>
            IMMERSIVE EXPIERIENCE THAT DELIVER
        </button>
      </div>
    </div>
   

   {/* destop nav */}
    <div>

    </div>
    </>
  )
}

export default navbar
