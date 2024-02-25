"use client"

import { motion } from 'framer-motion'




export function SectionServices () {
    return (
       <div className='
       h-full 
       mt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
      
      {/* CARD 1*/}
      <motion.div
      whileHover={{scale: 1.05}}
      transition={{type: "spring", stiffness: 300}} 
      className=
      "bg-gradient-to-bl from-blue-100 to-emerald-50 rounded-lg p-6"
      >
        <div 
        
        className="flex items-center mb-4">
          <img src="path_to_your_web_icon" alt="Web Sites" className="h-8 w-8" />
          <h3 className="text-xl font-semibold ml-3">Web Sites</h3>
        </div>
        <p>Desenvolvemos sites modernos e funcionais que proporcionam uma experiência de navegação intuitiva e envolvente para seus visitantes...</p>
      </motion.div>

     {/* CARD 2 */}
      <motion.div 
      whileHover={{scale: 1.05}}
      transition={{type: "spring", stiffness: 300}}
      className="bg-gradient-to-bl from-blue-100 to-emerald-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <img src="path_to_your_marketing_icon" alt="Marketing One Off" className="h-8 w-8" />
          <h3 className="text-xl font-semibold ml-3">Marketing One Off</h3>
        </div>
        <p>Oferecemos soluções completas de marketing digital, incluindo estratégias online e offline...</p>
      </motion.div>

      {/* CARD 3 */}
      <motion.div 
      whileHover={{scale: 1.05}}
      transition={{type: "spring", stiffness: 300}}
      className="bg-gradient-to-bl from-blue-100 to-emerald-50 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <img src="path_to_your_social_media_icon" alt="Social Media" className="h-8 w-8" />
          <h3 className="text-xl font-semibold ml-3">Social Media</h3>
        </div>
        <p>As mídias sociais são ferramentas importantes para aumentar a visibilidade da sua marca e se comunicar com seus clientes...</p>
      </motion.div>
    </div>
  </div>
       </div>
      );
    
}