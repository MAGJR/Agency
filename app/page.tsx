
"use client"
import Image from "next/image";
import HomeImg from '../public/Home.png'
import {motion, useInView} from 'framer-motion'
import { SectionHome } from "./components/SectionHome";
import { SectionFilosofia } from "./components/SectionFilosofia";
import { SectionHydra } from "./components/SectionHydra";
import { SectionServices } from "./components/Section Services";
import { useRef } from "react";
import Link from "next/link";
export default function Home() {
 const containerRef = useRef<HTMLDivElement>(null);
 const descriptionRef = useRef<HTMLDivElement>(null);

 const isDescriptionInView = useInView(descriptionRef, {margin:"-150px"})

  return (
    
    <motion.div 
    
    className="h-full" 
    initial={{y:"-200vh"}} 
    animate={{y:"0%"}} 
    transition={{duration:1}}
    >
    <div className="h-full flex lg:flex-row flex-col  overflow-x-hidden px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
   {/* IMAGE CONTAINER */}
   <div className="h-1/2 lg:h-full lg:w-1/2 relative">
    <Image src={HomeImg} alt="Home image" fill className="object-contain" />
   {/* TEXT CONTAINER */}
   </div>
 
   <div className="h-1/2 mt-5  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center ">
    {/* TITLE */}
    <h1 className="text-4xl md:text-4xl font-bold ">Hydra Digital</h1>
    {/* DESC */}
    <p className=""> Pare de desperdiçar tempo e dinheiro em campanhas publicitárias defeituosas e ineficazes.</p>

<p className="">É hora de fazer valer seu orçamento de publicidade, expandir seus negócios e aumentar suas vendas.</p>
    {/* Button */}
   <div className="lg:w-full flex gap-4" >
   <Link href='/servicos'>
    <motion.button 
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="p-4 rounded-lg ring-1 ring-emerald-300 bg-emerald-300 text-back" >
     <span className="font-bold">Veja nosso Trabalho</span> 
     
    
    </motion.button>
    </Link>
    <motion.button 
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="p-4 rounded-lg ring-1 ring-black bg-white text-black">Contate</motion.button>
   </div>
   
   <div className="h-screen w-screen flex items-center justify-center ">
   
   </div>
   </div>
  </div>
  
   <SectionHome />
   <SectionFilosofia />
   <SectionHydra />
   <SectionServices />
    </motion.div>
  );
}
