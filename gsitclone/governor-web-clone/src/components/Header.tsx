
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    
 
 <div>
 <div className="bg-sky-800 h-20 flex items-center justify-around" >
  <Image src="/assest/logo.png" height={96} width={80} className="h-24 w-20 mt-16" alt="logo" />
<p className="text-blue-100 text-xl font-bold">Tuition Free Education Program on Latest Technologies</p>
  <ul className="flex items-center justify-end gap-12  text-white">
    <li><Link href="/">Home</Link></li>
    <li><Link href="/apply">Apply</Link></li>
    <li><Link href="/jobs">Jobs</Link></li>
    <li><Link href="/result">Result</Link></li>
  <select className="bg-sky-800 border-none">
    <option><li><Link href="#">Courses</Link></li></option>
    <option><li><Link href="#">HTML</Link></li></option>
    <option><li><Link href="#">CSS</Link></li></option>
    <option><li><Link href="#">Javascript</Link></li></option>
  </select>
  </ul>
  </div>
  </div>

  )
}

export default Header