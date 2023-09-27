import React from 'react'

export default function Navbar() {
  return (
    <div className=" fixed top-0 w-full flex justify-between  bg-white">
    <div className="my-6 mx-7">
<img src="Odyssey.png" className="h-8 w-52 text-slate-50"></img>

    </div>
    <div>
      <nav className="bg-white ">
        <ul className="flex justify-end px-10">
          <li className="my-8 mx-4  cursor-pointer  text-base hover:text-blue-800 font-serif text-slate-950 hover:underline">
          <a href="#home">StayConnected</a></li>
          <li className=" my-8 mx-4 cursor-pointer text-base hover:text-blue-800 font-serif text-slate-950 hover:underline">
          <a href="#skills">Education</a></li>
          <li className=" my-8 mx-4 cursor-pointer text-base hover:text-blue-800 font-serif text-slate-950 hover:underline">
         <a href="#resume">Community</a></li>
          <li className=" my-8 mx-4 cursor-pointer text-base hover:text-blue-800 font-serif text-slate-950 hover:underline">
          <a href="#works">About Us</a></li>
          {/* <li className=" my-8 mx-4 cursor-pointer text-base hover:text-blue-800 font-serif text-slate-50 hover:underline bg-slate-950">
          <a href="#contact">Signin</a></li> */}
          <button class="bg-slate-950 hover:bg-blue-700 text-white font-bold py-1 pr-1 px-4 rounded-full w-20 h-8 my-8 justify-center">
  Button
</button>
        </ul>
      </nav>
  
      </div>
      
   </div>
  )
}
