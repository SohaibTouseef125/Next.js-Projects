"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from "./../../../public/assest/logo.png"
import { IoIosArrowDown } from 'react-icons/io'
import { CompulsoryData } from '@/data/main/compulsory'
import { tracks } from '@/data/main/tracks'
import { FiMenu } from 'react-icons/fi'
import { RxCross1 } from 'react-icons/rx'
const navLink = [
  {title: "Home", link:"/" , id: "1"},
  {title: "Apply", link:"/Apply" , id: "2"},
  {title: "Jobs", link:"/Jobs" , id: "3"},
  {title: "Result", link:"/Result" , id: "4"},

]
const Headers = () => {
  const [open, setOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  return (
      <>
    <div className='stick top-0 w-full bg-main backdrop-blur-3xl print:hidden'>
      <div className='m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300]'>
       <Link href={"/"}>
       <Image src= {logo}  alt='logo' className='mt-14 w-[70px] sm:mt-20 sm:w-[80px] md:w-[90px]' />
       </Link>
       <h1 className='text-text hidden texxt-[15px] font-extrabold text_shadow lg:block xl-lg:text-xl xl:text-2xl'>Tuition Free Education Program on Latest Technologies</h1>
       <h1 className='text-text text-shadow text-[1.125rem] font-extrabold lg:hidden '>Tuition Free Program{""}</h1>

       <div className='hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10'>
      
     {navLink.map((item) =>(
      <Link href={item.link} key={item.id}>
        <div className='capitalize'>{item.title}</div>
      </Link>
     ))}
     <div className='relative cursor-pointer' onClick={()=> setShowMenu(!showMenu)}>
     <div className='flex items-center caption-bottom'>Courses <IoIosArrowDown className='pl-2 size-5'/>
     </div>
     {
      showMenu && (
        <div className='my absolute right-0 mt-2 w-48 rounded-lg bg-white text-black'>
          <div className='box-shadow bg-zinc-50 p-7 h-[300px] sm:h-auto overflow-y-auto'>
            <h1 className='text-left text-lg font-bold text-black pb-3'>Core Courses</h1>
         {CompulsoryData.map((val) => (
          <Link href={`/compulsory/${val.id}`} key={val.id}>
          <div className='py-1 px-2 text-sm text-black hover:text-main'>{val.text}</div>
          </Link>
         ))}
<h1 className='mt-5 text-left text-lg font-bold text-black border-t border-zinc-300 pt-5 pb-3'>Advanced Courses</h1>
{tracks.map((val) => (
          <Link href={`/tracks/${val.id}/4`} key={val.id}>
          <div className='py-1 px-2 text-sm text-black hover:text-main'>{val.name}</div>
          </Link>
         ))}
          </div>
        </div>
      )
     }
    </div>
    </div>

      <div className='block sm:hidden'>
<FiMenu size={24} className='text-white' onClick={()=>setOpen(true)}/>
      </div>

    </div>
    </div>

    <div className={`fixed left-0 top-0 z-40 h-full w-full bg-main print:hidden ${!open && "hidden"}`}>
     <div className='absolute right-5 top-5'>
     <RxCross1 className='text-white' size={25} onClick={()=> setOpen(false)}/>
     </div>
     <div className='m-auto mt-20 flex w-[90%] flex-col text-base font-normal text-white'>
      {navLink.map((item) =>(
        <Link href={item.link} onClick={()=> setOpen(false)}key={item.id}>
          <div className='border-b border-[#1468a5] py-5 capitalize'>{item.title}</div>
        </Link>
      ))}
      <div className={`py-5${!showMenu && "boder-b"} border-[#146895]`} onClick={() => setShowMenu(!showMenu)}>
        <div className='flex items-center justify-between'>
          Courses <IoIosArrowDown size={16}/>
          </div>
          </div>
          <div className={`overflow-y-auto rounded-xl bg-white ${showMenu ? "h-auto" :"h-0 overflow-hidden"}`}>
          <h1 className='mt-3 px-2 text-left text-lg font-bold text-zinc-800'>Core Courses</h1>
          {CompulsoryData.map((val,index) =>(
           <Link href={`/compulsory/${val.id}`}  onClick={()=>setOpen(false)} key={index}>
            <div className='py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main'>{val.text}</div>
           </Link>
          ))}
          
          <h1 className='mt-3 px-2 text-left text-lg font-bold text-zinc-800 border-t border-z-30 pt-5'>Advanced Courses</h1>
          {tracks.map((val,index) =>(
           <Link href={`/tracks/${val.id}`}  onClick={()=>setOpen(false)} key={index}>
            <div className='py-3 pl-2 text-sm text-zinc-600 sm:text-base hover:text-main'>{val.name}</div>
           </Link>
          ))}

          
      </div>
     </div>
    </div>
    </> 
  )
}

export default Headers