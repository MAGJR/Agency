import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

export function SectionHome () {
    const containerRef = useRef<HTMLDivElement>(null)  
    
    const descriptionRef = useRef<HTMLDivElement>(null)
    const isDescriptionRefInView = useInView(descriptionRef, {margin:"1px"})   
    
    return (
<div className="bg-gradient-to-b
        text-black
        from-blue-100
        to-emerald-100  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
        ref={containerRef}
        >
      {/* Text container */}
      <motion.div 
      className="w-full pt-20" 
      ref={descriptionRef}
      >
        <motion.p 
        initial={{ opacity: 0 }}
        animate={isDescriptionRefInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-sm uppercase tracking-wide"
        >#1 Agencia de Marketing
        </motion.p>
        <motion.h1 
        initial={{ opacity: 0 }}
        animate={isDescriptionRefInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold my-4"
        >
          Clientes Qualificados
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0 }}
        animate={isDescriptionRefInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="mb-4 ">
          
          Veiculamos anúncios em várias plataformas, incluindo Facebook, Instagram, TikTok, Google e Youtube.
          Somos altamente especializados no que fazemos. Além de criar Sofwares, sistemas e criação de sites.
          Somos uma Agência de Marketing, focada em conhecer o segmento da sua empresa, bem como a regra do seu negócio, seus concorrentes e suas necessidades 
        </motion.p>
          <div className='flex items-center justify-center'>
        <Link href='/contato'>
        <motion.button 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
        bg-emerald-300 p-3 rounded mt-5 hover:bg-emerald-500 font-bold">
          Contate-nos
          
        </motion.button>
        </Link>
        </div>
        
        <div className="flex items-center mt-4">
          <div className="flex lg:ml-80 mt-20">
            {/* */}
            
          </div>
        </div>
        
      </motion.div>
      
      {/* Image container */}
      
    </div>
    )
}