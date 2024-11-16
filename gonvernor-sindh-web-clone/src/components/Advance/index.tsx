import Image from 'next/image'
import Link from 'next/link'


const Advance = () => {
  return (
    <div className='xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mt-20 mb-10'>
        <h1 className='lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10'>Advanced Courses</h1>
        <div className='grid xl-lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl-lg:gap-20 gap-5 mt-10'>
        <Link href={'/tracks/ai/4'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
            <div>
            <Image src="/assest/AI.jpg" alt='artificial_intelligence' className='object-cover w-full ' height={'300'} width={'500'} />
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <h3>Artificial Intelligence</h3>
            </div>
        </div> 
        </Link>
        <Link href={'/tracks/wmd/4'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
            <div>
            <Image src="/assest/metaverse.jpg" alt='Web 3 and Metaverse' className='object-cover w-full ' height={'300'} width={'500'} />
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <h3>Web 3 and Metaverse</h3>
            </div>
        </div> 
        </Link>
        <Link href={'/tracks/cnc/4'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
            <div>
            <Image src="/assest/cloudComputing.jpg" alt='Cloud-Native Computing' className='object-cover w-full ' height={'300'} width={'500'} />
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <h3>Cloud-Native Computing</h3>
            </div>
        </div> 
        </Link>
        <Link href={'/tracks/iot/4'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
            <div>
            <Image src="/assest/iot.jpg" alt='Ambient Computing and IoT' className='object-cover w-full ' height={'300'} width={'500'} />
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <h3>Ambient Computing and IoT</h3>
            </div>
        </div> 
        </Link>
        <Link href={'/tracks/gbs/4'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
            <div>
            <Image src="/assest/genomics.jpg" alt='Genomics and Bioinformatics' className='object-cover w-full ' height={'300'} width={'500'} />
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <h3>Genomics and Bioinformatics</h3>
            </div>
        </div> 
        </Link>
        <Link href={'/tracks/npa/4'} className='hover:scale-105 duration-200 transition-all'>
        <div className='overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold'>
            <div>
            <Image src="/assest/automation.jpg" alt='Network Programmability and Automation' className='object-cover w-full ' height={'300'} width={'500'} />
            </div>
            <div className='px-4 flex justify-center items-center h-[70px]'>
                <h3>Network Programmability and Automation</h3>
            </div>
        </div> 
        </Link>


        </div>
    </div>
  )
}

export default Advance