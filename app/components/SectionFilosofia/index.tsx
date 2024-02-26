"use client"

import Image from "next/image"
import funilImg from "../../../public/funil.webp"
import {motion, useInView} from "framer-motion"
import { useRef } from "react"

export function SectionFilosofia() {
  const containerRef = useRef<HTMLDivElement>(null)  
    
    const descriptionRef = useRef<HTMLDivElement>(null)
    const isDescriptionRefInView = useInView(descriptionRef, {margin:"-150px"})   
    return (
        <div 
        ref={containerRef}
        className=" 
        h-screen 
        bg-gradient-to-b from-emerald-100 to-blue-100 
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-center
        flex flex-col items-center justify-center
        "
        
        >   <div ref={descriptionRef}>
            <motion.div 
            initial={{ opacity: 0 }}
            animate={isDescriptionRefInView ? { opacity: 1 } : {}}
            transition={{delay: 0.2}}
            className="flex items-center justify-center mt-12 " >
            <h1 className="font-semibold text-4xl mb-6">Por que seu negócio precisa da Hydra?</h1>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-8">
        {/* Strategy */}
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isDescriptionRefInView ? { opacity: 1 } : {}}
        transition={{delay: 0.3}}
        className="max-w-sm flex flex-col items-center">
          <div className="flex justify-center items-center h-20 w-20 bg-blue-900 rounded-full mb-4 border-2 border-blue-500">
            {/* Placeholder for image */}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Strategy</h3>
          <p className="text-gray-600 text-center">
          Analisamos a história da sua marca e traçamos uma estratégia que esteja em harmonia com a sua marca.
          </p>
        </motion.div> 

        {/* Campaigns */}
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isDescriptionRefInView ? { opacity: 1 } : {}}
        transition={{delay: 0.4}}
        className="max-w-sm flex flex-col items-center">
          <div className="flex justify-center items-center h-20 w-20 bg-blue-900 rounded-full mb-4 border-2 border-blue-500">
            {/* Placeholder for image */}
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Campaigns</h3>
          <p className="text-gray-600 text-center">
          Criamos, executamos, otimizamos e dimensionamos campanhas que vendem seu produto com eficiência.
          </p>
        </motion.div>
        {/* Results */}
        <motion.div 
        initial={{ opacity: 0 }}
        animate={isDescriptionRefInView ? { opacity: 1 } : {}}
        transition={{delay: 0.5}}
        className="max-w-sm flex flex-col items-center">
          <div className="flex justify-center items-center h-20 w-20 rounded-full  mb-4 border-2">
            <Image src={funilImg} alt="" />
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">Resultados</h3>
          <p className="text-gray-600 text-center">
          Sempre nos esforçamos para alcançar um ROI de 4x+ - mas muitas vezes entregamos resultados muito além disso.
          </p>
        </motion.div>

        </div>
        </div>
        </div>
    )
}