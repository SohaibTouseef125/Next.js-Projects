
import React from 'react'
import Image from 'next/image'
function HeroSection() {
  return (
    <div>
      <Image src="/assest/bg_house.jpg" height={1000} width={1000} alt="img" className="w-screen h-screen opacity-15 inline-block"/>
        <div className='mx-7 my-24  ' >
        <h1 className='text-sky-800 font-bold text-5xl '>Governor Sindh</h1>
        <h3 className='text-sky-700 text-4xl my-2 '>Kamran Khan Tessori</h3>
        <h3 className='text-sky-500 font-bold text-5xl mt-4 w-1/2'>Certified Cloud Applied Generative AIEngineer (GenEng)</h3>
        <h3 className='text-sky-800 font-bold text-2xl my-5 '>Earn up to $5,000 / month</h3>
        <h3 className='text-sky-800 font-bold text-2xl '>Now admissions are open in Hyderabad</h3>
        <button className='bg-sky-800 rounded-md text-white px-16 py-4 mt-9'>Apply Now</button>
        <div className=' mx-72 -my-14'>
          <p className='text-sky-800 font-bold text-2xl'>562,143</p>
          <p className='text-sky-500 text-lg'>Accepted Applications</p>
        </div>
       <div className=''>
      <Image  src="/assest/cover.png" height={900} width={900} alt="img" className="ml-[40rem] "  />
       </div>
      </div>
      </div>
   
  )
}

export default HeroSection