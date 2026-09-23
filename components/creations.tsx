import React from 'react'
import Image from 'next/image'
const images = [
    {
        image: "/images/mobile/image-deep-earth.jpg",
        title: "DEEP EARTH",
    },
    {
        image: "/images/mobile/image-night-arcade.jpg",
        title: "NIGHT ARCADE",
    },
    {
        image: "/images/mobile/image-pocket-borealis.jpg",
        title: "SOCCER MANAGER",
    },
    {
        image: "/images/mobile/image-grid.jpg",
        title: "GRID",
    },
    {
        image: "/images/mobile/image-from-above.jpg",
        title: "FROM ABOVE",
    },
    {
        image: "/images/mobile/image-pocket-borealis.jpg",
        title: "POCKET BOREALIS",
    },
]

const creations = () => {
  return (
    <div className='pt-30'>
        <h1 className='text-center text-3xl'>OUR CREATIONS</h1>
     <div className='flex flex-col gap-6 p-4'>
        {images.map((item, index) => (
            <div key={index}>
              <Image 
              src={item.image} 
              alt={item.title} 
              width={400} 
              height={400} 
              className='object-cover' />
              <p className='absolute text-white text-xl mt-[-48px] ml-32'>{item.title}</p>

            </div>

        ))}

     </div>
    </div>
  )
}

export default creations
