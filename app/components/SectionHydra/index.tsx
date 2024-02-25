import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {motion} from 'framer-motion'
import hydrImg from '../../../public/hydra.png'
import Link from "next/link";


export function SectionHydra () {
    const containerRef = useRef<HTMLDivElement>(null)  
    
    const descriptionRef = useRef<HTMLDivElement>(null)
    const isDescriptionRefInView = useInView(descriptionRef, {margin:"-100px"})   
    
    return (
      <div
        className="
          bg-gradient-to-b text-black from-blue-100 to-emerald-100
          flex flex-col lg:flex-row
          items-center justify-center
          px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48
        "
        ref={containerRef}
      >
        {/* Container da imagem */}
        <motion.div
          className="w-full lg:flex-1"
          ref={descriptionRef}
        >
          <Image
            src={hydrImg}
            alt="Descrição da Imagem"
            layout="responsive" // Ajusta a imagem para ser responsiva
            width={700} // Largura da imagem
            height={475} // Altura da imagem
            objectFit="cover"
          />
        </motion.div>
  
        {/* Container do texto */}
        <div className="w-full mb-36 md:mt-8 md:w-1/2 md:ml-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={isDescriptionRefInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold"
          >
            Diferencial
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isDescriptionRefInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Seu texto aqui. Este é um exemplo de como você pode posicionar texto e
            imagem lado a lado usando Flexbox e Tailwind CSS.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-emerald-300 p-3 rounded mt-5 hover:bg-emerald-500"
          >
            <Link href="/about">
              Saiba mais 
            </Link>
          </motion.button>
        </div>
      </div>
    );
    }
