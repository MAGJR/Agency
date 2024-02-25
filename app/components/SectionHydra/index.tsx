import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {motion} from 'framer-motion'
import hydrImg from '../../../public/hydra.png'


export function SectionHydra () {
    const containerRef = useRef<HTMLDivElement>(null)  
    
    const descriptionRef = useRef<HTMLDivElement>(null)
    const isDescriptionRefInView = useInView(descriptionRef, {margin:"-100px"})   
    
    return (
        <div 
        className="
        
        bg-gradient-to-b text-black from-blue-100 to-emerald-100
        flex flex-row 
        items-center justify-center 
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 "
        ref={containerRef}
        >
          {/* Container da imagem */}
          <motion.div 
          className="flex-1 h-1/2 lg:h-full lg:w-1/2 relative"
          ref={descriptionRef}
          >
            <Image
              src={hydrImg}
              alt="Descrição da Imagem"
              className=""
              objectFit="cover" // Ajusta a imagem ao container
            />
          </motion.div>
    
          {/* Container do texto */}
          <div className="flex-1">
            <motion.h1
            initial={{opacity:0}}
            animate={isDescriptionRefInView ? {x:0, opacity:1} : {}}
            transition={{delay:0.5}} 
            className="text-2xl font-bold ">Seu Título Aqui
            </motion.h1>
            <motion.p 
            initial={{opacity:0}}
            animate={isDescriptionRefInView ? {x:0, opacity:1} : {}}
            transition={{delay:0.6}}
            className="">
              Seu texto aqui. Este é um exemplo de como você pode posicionar texto e
              imagem lado a lado usando Flexbox e Tailwind CSS.
            </motion.p>
          </div>
        </div>
      );
    }
