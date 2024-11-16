import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-3xl w-1/2 px-10">
        <Image src="/fb-img.svg" height={100} width={300} alt="fblogo" />
        <p className="ml-8 -mt-3">FacebookFacebook helps you connect and share with the people in your life.</p>
      </div>
      {/* Right side  */}
      <div className="bg-white flex flex-col p-5 rounded-xl w-1/3">
        <input className="my-2 border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600" type="text" placeholder="Email address or phone number" id="email" />
        <input className="my-2 border-1 border-gray-100 p-3 rounded-md focus:outline-1 outline-blue-600" type="password" placeholder="Password" id="password" />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">Log in</button>
        <a className="text-blue-600 text-sm my-2 text-center hover:underline cursor-pointer" href="#">Forgotten password?</a>
        <span className="my-2"><hr /></span>
        <button className="bg-green-600 my-2 py-2 font-bold text-white rounded-lg text-lg hover:bg-green-700 px-2 w-fit mx-auto">Create new account</button>
      </div>
    </div>
  );
}

