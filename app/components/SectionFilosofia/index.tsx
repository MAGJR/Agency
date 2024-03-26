"use client"

import Image from "next/image"
import funilImg from "../../../public/funil.webp"
import {motion, useInView} from "framer-motion"
import { useRef } from "react"
import { FlagIcon } from "../icon/flag"
import { ResultsIcon } from "../icon/results"
import { CampaingIcon } from "../icon/campaings"
import Link from "next/link"

export function SectionFilosofia() {
  const containerRef = useRef<HTMLDivElement>(null)  
  const items = [
    {
      id:1,
      title: 'Strategy',
      description: 'Analisamos a história da sua marca e traçamos uma estratégia que esteja em harmonia com a sua marca.',
      component: <FlagIcon />
    },
    {
      id:2,
      title: 'Campaigns',
      description: 'Criamos, executamos, otimizamos e dimensionamos campanhas que vendem seu produto com eficiência.',
      component: <CampaingIcon />
    },
    {
      id:3,
      title: 'Results',
      description: 'Sempre nos esforçamos para alcançar um ROI de 4x+ - mas muitas vezes entregamos resultados muito além disso.',
      component: <ResultsIcon />
    }
  ]  

    const descriptionRef = useRef<HTMLDivElement>(null)
    const isDescriptionRefInView = useInView(descriptionRef, {margin:"-150px"})   
    return (
        <div 
        ref={containerRef}
        className=" 
         
        
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
        
        {items.map((item) => (
            <motion.div key={item.id}
            initial={{ opacity: 0 }}
            animate={isDescriptionRefInView ? { opacity: 1 } : {}}
            transition={{delay: 0.3}}
            className="max-w-sm flex flex-col items-center">
              
              <div className="flex justify-center items-center h-20 w-20   ">
                
                {item.component}
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
              
            </motion.div> 
            ))} 
        </div>
        <Link href='/equipe'>
        <motion.button
        whileHover={{scale: 1.1}}
        className="bg-emerald-300 p-3 rounded mt-5
         hover:bg-emerald-500 font-bold"
         >Conheça sobre nós
         </motion.button>
         </Link>
        </div>
        </div>
    )
}