import Image from 'next/image'
import React from 'react'

const Qoute = () => {
  return (
    <div className='relative h-80 w-full flex flex-col justify-center items-center gap-4 bg-primary/90 text-white'>
      <div className="absolute h-full w-full inset-0 ">
        <Image
          src="/Home.webp" 
          layout="fill" 
          objectFit="cover" 
          quality={100} 
          alt="Hero" 
          loading="lazy" 
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      <div className='text-center flex flex-col items-center z-10'>
        <h2 className='text-white text-2xl md:text-3xl lg:text-4xl font-bold lg:font-extrabold text-gold-gradient-to'>
        Gib Deinem Pferd, was es braucht- und es wird Dir sein Herz schenken!
        </h2>
      </div>
    </div>
  )
}

export default Qoute