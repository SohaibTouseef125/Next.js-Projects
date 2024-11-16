import React from 'react'
import Image from 'next/image'
function ImageSider() {
  return (
    <div>
         <div>
            <h3 className='text-sky-800 font-bold text-3xl px-24 '>Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h3>
        <p className='text-xl px-10 my-10'>The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
        <div className='flex items-center justify-center'>
            <Image src="/assest/boy.jpg" height={400} width={400} alt="first" className='px-2 rounded-xl'/>
            <Image src="/assest/mind.jpg" height={400} width={400} alt="mind" className='px-2 h-80 rounded-xl'/>
            <Image src="/assest/laptop.jpg" height={400} width={400} alt="laptop" className='px-2 rounded-xl'/>
        </div>
        <div className='flex items-center justify-center w-screen'>
        <Image src="/assest/hero-img.jpg" height={1000} width={1000} alt="hero" className='mx-3 my-10 rounded-xl h-96 w-1/2  cursor-pointer '/>
        <Image src="/assest/hero-img.jpg" height={1000} width={1000} alt="hero" className='mx-3 my-10 rounded-xl h-96 w-1/2  cursor-pointer '/>
        <Image src="/assest/sechero-img.jpg" height={1000} width={1000} alt="sec" className='mx-3 my-10  rounded-xl  h-96 w-1/2 cursor-pointer '/>
        <Image src="/assest/zia.jpg" height={1000} width={1000} alt="sec" className='mx-3 my-10  rounded-xl  h-96 w-1/2 cursor-pointer '/>
        </div>
          </div>
        </div>
  )
}

export default ImageSider