
"use client"
import Image from "next/image";
import HomeImg from '../public/Home.png'
import {motion} from 'framer-motion'

export default function Home() {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>

    <div className="h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
   {/* IMAGE CONTAINER */}
   <div className="h-1/2 lg:h-full lg:w-1/2 relative">
    <Image src={HomeImg} alt="Home image" fill className="object-contain" />
   {/* TEXT CONTAINER */}
   </div>
 
   <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
    {/* TITLE */}
    <h1 className="text-4xl md:text-6xl font-bold">Marketing Digital</h1>
    {/* DESC */}
    <p className="md:text-xl"> Lorem ipsum dolo officia ab quas. Magnam aspernatur quia debitis ea molestiae ad.</p>
    {/* Button */}
   <div className="lg:w-full flex gap-4" >
    <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white" >Veja nosso Trabalho</button>
    <button className="p-4 rounded-lg ring-1 ring-black bg-white text-black">Contate</button>
   </div>

   </div>
  </div>
    </motion.div>
  );
}
