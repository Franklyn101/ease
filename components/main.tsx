import React from 'react'
import Image from 'next/image'

const main = () => {
  return (
    <div className='p-7'>
      <Image src={"/images/mobile/image-interactive.jpg"} alt={""} width={400} height={400}  className='object-cover' />
      <div className='pt-20'>
        <h1 className='text-3xl text-center'>THE LEADER IN THE INTERACTIVE VR</h1>
        <p className='text-xl text-center leading-7 font-extralight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias doloribus perferendis adipisci est sunt unde animi ex sapiente magni, eligendi maxime ratione, aspernatur mollitia recusandae culpa eum officiis quae?</p>
      </div>
    
    </div>
  )
}

export default main
