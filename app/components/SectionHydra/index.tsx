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
          initial={{ opacity: 0 }}
        animate={isDescriptionRefInView ? { opacity: 1 } : {}}
        transition={{delay: 0.2}}
        >
          <Image
            src={hydrImg}
            alt="Descrição da Imagem"
            layout="responsive" 
            width={700} 
            height={475} 
            objectFit="cover"
          />
        </motion.div>
  
        {/* Container do texto */}
        <div className="w-full mb-36 md:mt-8 md:w-1/2 md:ml-8">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={isDescriptionRefInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold mb-2"
          >
            Diferencial da Hydra
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isDescriptionRefInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Proporcionamos soluções avançadas em Segurança Digital, garantindo a proteção integral de suas ofertas contra pirataria.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isDescriptionRefInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-3"
          >
            Desenvolvemos sistemas SaaS empregando Inteligência Artificial, proporcionando uma solução exclusiva que eleva o desempenho de suas campanhas.
          </motion.p>
          <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-emerald-300 p-3 rounded mt-5 hover:bg-emerald-500 font-bold"
          >
            <Link href="/sobre">
              Saiba mais 
            </Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-3 rounded mt-5 font-bold"
          >
            <Link href="/contate">
              contate 
            </Link>
          </motion.button>
          </div>
        </div>
      </div>
    );
    }
