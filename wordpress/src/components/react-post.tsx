import { Heebo } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import RecentPostCard from './recentPostCard'

const heebo = Heebo({subsets: ["latin"]})
const ReactPostCard = () => {

  return (
    <div className='bg-recentBackground my-[66px] md:h-[502px] flex flex-col justify-evenly' >
        <div className='w-[92%] md:w[1030px]  p-6  flex flex-col justify-between mx-auto '>
           <div className='flex flex-row justify-between'>
           <h2 className={`${heebo.className} text-[22px] font-medium`}>Recent Post</h2>
           <Link href={""} className={`${heebo.className} text-[22px] font-medium text-button`}>View all</Link>
           </div>
          <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row justify-between mt-[16px] '>
          <RecentPostCard/>
          <RecentPostCard/>
          </div>

</div>
    </div>
  )
}

export default ReactPostCard