import Image from 'next/image'
import Link from 'next/link'



const Compulsory = () => {
  return (
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-10 mb-10'>
      <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Core Courses Sequence</h1>
      <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-10 gap-5 mt-10'>
        <Link href={'/compulsory/1'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
          <div>
            <Image src="/assest/programming_fundamentals.jpg" alt='programming_fundamentals' className='object-cover w-full ' height={'300'} width={'500'} />
          </div>
          <div className='px-4 flex justify-center items-center h-[70px]'>

            <h3>Programming Fundamentals</h3>
          </div>
        </div>
        </Link>
        <Link href={'/compulsory/2'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
          <div>
          <Image src="/assest/nextjs.jpg" alt='Web2 Using NextJS' className='object-cover w-full ' height={'300'} width={'500'} />
          </div>
          <div className='px-4 flex justify-center items-center h-[70px]'>

            <h3>Web2 Using NextJS</h3>
          </div>
        </div>
        </Link>

        <Link href={'/compulsory/3'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
          <div>
          <Image src="/assest/earn_as_you_learn.jpg" alt='Earn as You Learn' className='object-cover w-full ' height={'300'} width={'500'} />
          </div>
          <div className='px-4 flex justify-center items-center h-[70px]'>

            <h3>Earn as You Learn</h3>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Compulsory