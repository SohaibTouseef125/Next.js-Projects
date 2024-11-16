import React from 'react'
import Image from 'next/image'
function Courese() {
  return (
    <div>
         <span><hr /></span>

            <h1 className='text-blue-800 font-bold text-3xl mx-10 mt-10'>Core Courses Sequence</h1>
        <div className='flex items-center justify-start'>
            <div className='mx-10 bg-white mt-5 '>
            <Image src="/assest/first.jpg" height={300} width={300} alt="firsts" className='rounded-lg cursor-pointer  '/>
            <p className='px-5 py-5 text-gray-800 text-lg'>Programming Fundamentals</p>
            </div>
            <div className='mx-10 bg-white mt-5 '>
            <Image src="/assest/second.jpg" height={300} width={300} alt="firsts" className='rounded-lg cursor-pointer  '/>
            <p className='px-5 py-5 text-gray-800 text-lg'>Web2 Using NextJS</p>
            </div>
            <div className='mx-10 bg-white mt-5 '>
            <Image src="/assest/third.jpg" height={300} width={300} alt="firsts" className='rounded-lg cursor-pointer  '/>
            <p className='px-5 py-5 text-gray-800 text-lg'>Earn as You Learn</p>
            </div>
        </div>

        <h1 className='text-blue-800 font-bold text-3xl mx-10 mt-10'>Advanced Courses</h1>
        <div className='flex items-center justify-start'>
            <div className='mx-10 bg-white mt-5 '>
            <Image src="/assest/first.jpg" height={300} width={300} alt="firsts" className='rounded-lg cursor-pointer  '/>
            <p className='px-5 py-5 text-gray-800 text-lg'>Programming Fundamentals</p>
            </div>
            <div className='mx-10 bg-white mt-5 '>
            <Image src="/assest/second.jpg" height={300} width={300} alt="firsts" className='rounded-lg cursor-pointer  '/>
            <p className='px-5 py-5 text-gray-800 text-lg'>Web2 Using NextJS</p>
            </div>
            <div className='mx-10 bg-white mt-5 '>
            <Image src="/assest/third.jpg" height={300} width={300} alt="firsts" className='rounded-lg cursor-pointer  '/>
            <p className='px-5 py-5 text-gray-800 text-lg'>Earn as You Learn</p>
            </div>
           
        </div>
    </div>
  )
}

export default Courese