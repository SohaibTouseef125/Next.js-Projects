import { Heebo } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

const heebo = Heebo(
    {
        subsets: ["latin"]
    }
)
const Hero = () => {
  return (
    <div className='flex items-center justify-between my-[66px] mx-auto  md:w-[1030px] md:h-[308px] flex-col-reverse md:flex-row '>
        <div className=' md:w-[521px] md:h-[305px]  flex flex-col md:justify-between items-start justify-evenly'>
            <h1 className={`${heebo.className}text-[27px] md:text-[48px] font-black text-myColor` }>Hi, I am John,<br />
            Creative Technologist</h1>
            <p className={`${heebo.className}md:text-[16px] text-myColor font-normal`}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <button className={`${heebo.className} w-[205px] h-[50px] bg-button font-medium text-[18px] text-white rounded-sm shadow-2xl shadow-black/50`}>Download Resume</button>
        </div>
        <div className='w-[292px] h=[299px] relative '>
        <Image src={"/assest/profile.png"} width={292}  height={299}  alt="heroImg" className='rounded-full z-50'/>
        <div className='bg-heroElipse w-[292px] h-[299px] rounded-full absolute top-2 right-2 -z-10'  />
        </div>
    </div>
  )
}

export default Hero