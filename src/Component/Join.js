import React from 'react'

export default function Join() {
  return (
    <div>
      <div className='bg-white-50 py-10'>
   
    <div className="flex justify-between pt-10">
    
   <div className='mt-40 ml-10 text-left' >
    {/* <p>Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p> */}
<p className='text-3xl font-bold'>Join our vibrant community of space enthusiasts where you can</p>
   </div>
   
   <div className="grid grid-cols-2 gap-4 my-20 mr-20 ml-40 pb-16 ">
   <div className='mt-4 ' >
    <div className='bg-slate-500 h-10 w-10 rounded-lg'>
   <img src="physics.png" alt="" className=" h-8 w-8 pt-2 pl-2 rounded-2xl" /></div>
   
   <p className='font-bold mt-4 justify-start flex'>Astronomy 101</p>
   <div className='flex text-left'>
   <p className='text-slate-950 justify-start'>Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
   </div></div>
   <div className='mt-4'>
   <div className='bg-slate-500 h-10 w-10 rounded-lg'>
   <img src="clipboard.png" alt="" className=" h-8 w-8 pt-2 pl-2 rounded-2xl" /></div>
   <p className='font-bold mt-4 justify-start flex'>Latest Discoveries</p>
   <div className='flex text-left'>
   <p className='justify-start flex'>Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration.</p>
  </div> </div>
   <div className='mt-4'>
   <div className='bg-slate-500 h-10 w-10 rounded-lg'>
   <img src="Combo.png" alt="" className=" h-8 w-8 pt-2 pl-2 rounded-2xl" /></div>
   <p className='font-bold mt-4 justify-start flex'>Space Exploration</p>
   <div className='flex text-left'>
   <p>Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations.</p>
  </div> </div>
   <div className='mt-4'>
   <div className='bg-slate-500 h-10 w-10 rounded-lg'>
   <img src="chart-pie.png" alt="" className=" h-8 w-8 pt-2 pl-2 rounded-2xl" /></div>
   <p className='font-bold mt-4 justify-start flex'>Space Technology</p>
   <div className='flex text-left'>
   <p>Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats.</p>
   </div></div>
   </div>
       
    </div>
    </div>
    </div>
  )
}
