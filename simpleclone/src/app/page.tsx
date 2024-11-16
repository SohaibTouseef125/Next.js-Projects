import Image from "next/image";
export default function Home() {
  return (
    
    

    <div className="flex justify-between items-center h-screen">

      {/* left side */}
      <div className="w-1/2 mx-12" >
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-bold">Welcome To Our Website</h1>
          <p className="text-[32px]"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <button className="bg-black text-white w-[237px] h-[66px]" > Contact Us</button>
        </div>
      </div>
      {/* Right side */}
      <div className="w-1/2">
  <Image src="/image.avif" alt="image" width={500} height={500} className="bg-gray-600 w-[500px] h-[500px]" />

       
      </div>
    </div>
  );
}
