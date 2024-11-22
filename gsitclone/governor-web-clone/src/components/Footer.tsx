import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='flex items-center justify-around bg-gray-100 h-[500px]'>
        <ol className='space-y-2'>
        <h1 className='font-bold text-lg'>Core Courses</h1> 
        <li><Link href="/Programming Fundamentals">Programming Fundamentals</Link></li>
        <li><Link href="/Web2 Using NextJS">Web2 Using NextJS</Link></li>
        <li><Link href="/Earn as You Learn">Earn as You Learn</Link></li>
    </ol>
    <ol className=' space-y-3'>
        <h1 className='font-bold text-lg'>Advanced Courses</h1> 
        <li><Link href="#">Web 3 and Metaverse</Link></li>
        <li><Link href="#">Cloud-Native Computing</Link></li>
        <li><Link href="#">Artificial Intelligence (AI) and Deep Learning</Link></li>
        <li><Link href="#">Ambient Computing and IoT</Link></li>
        <li><Link href="#">Genomics and Bioinformatics</Link></li>
        <li><Link href="#">Network Programmability and Automation</Link></li>
    </ol>
    
      <div>
      <h1 className='font-bold text-lg'>Social Links</h1>
      <address className=''>education@governorsindh.com</address>
      </div>
    
    </div>
  )
}

export default Footer