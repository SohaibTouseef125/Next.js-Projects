import { Heebo } from 'next/font/google'
import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const heebo = Heebo(
  {
    subsets: ["latin"]
  }
)
const Footer = () => {
  return (
    <div className='bg-footerBackground flex items-center justify-center flex-col space-y-6 h-[243px]'>
      <div className='flex  space-x-6'>
        <Link href={'#'}><FaFacebookSquare  className='w-[30px] h-[30px]'/></Link>
        <Link href={'#'}><FaInstagram  className='w-[30px] h-[30px]'/></Link>
        <Link href={'#'}> <FaTwitter className='w-[30px] h-[30px]' /></Link>
        <Link href={'#'}><FaLinkedin className='w-[30px] h-[30px]' /></Link>
      </div>
      <p className={`${heebo.className} text-center text-[22px] font-medium `}>Copyright ©2020 All rights reserved </p>
    </div>
  )
}

export default Footer