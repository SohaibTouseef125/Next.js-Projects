"use client"
import { useState } from "react";

export default function Home() {
  // define sates
  const [todos,setTodo] = useState([{movie:"Django Unchanined",id:1},{movie:"Catch me if you can",id:2}]);
  return (
    <div className="max-w-4xl mx-auto p-5">

    <h1 className="text-center text-[40px] underline">Todo App</h1>
    {/* start  input div */}
    <div className="flex justify-between gap-4 mt-5">
      <input className="w-[60%] p-2 ml-3 text-lg border-b focus:outline-none" type="text"  placeholder="write movie name"/>
      <input className="w-[20%] p-2 ml-3 text-lg border-b focus:outline-none" type="text"  placeholder="write id"/>
      <button className="bg-blue-500 hover: bg-blue-300 w-[20%] text-white p-2 rounded-md  ">Add Movie</button>
    </div>
    {/* end input div */}
    <h1 className="text-center text-[40px] underline mt-5">Movie List</h1>
    {/* movie list */}
    <div className="grid grid-cols-2 gap-5 mt-5">

      {/* grid items */}
      {
        todos.map((item:any,i:any)=>{
          return(
            <div  className="shadow  p-4">
            <div className="flex justify-between text-lg">
              <span  className="shadow rounded-full h-8 w-8 text-center my-auto">
{i+1}
              </span>
              <span className="shadow rounded-full h-8 w-8 text-center my-auto cursor-pointer text-red-800">X</span>
            </div>
        {/* data div */}
            <div className="mt-5 text-[30px] text-gray-600">{item.movie}</div>
            <div>
              <h2 className="text-right cursor-pointer">Edit</h2>
            </div>
          </div>

          )
        })
      }
 

 
</div>
    
  </div>
  );
}
