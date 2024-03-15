"use client"

import { motion } from 'framer-motion'
import Link from 'next/link';




export function SectionServices () {
  const item = [
    {
      id:1,
      title: 'Web Sites',
      description: 'Desenvolvemos sites modernos e funcionais que proporcionam uma experiência de navegação intuitiva e envolvente para seus visitantes'
    },
    {
      id: 2,
      title: 'Facebook ads',
      description: 'Aumente suas vendas e a visibilidade da sua marca com nossas estratégias de marketing no Facebook e Instagram'
    },
    {
      id:3,
      title: 'Google ads',
      description: 'Apareça nas primeiras posições do Google e aumente a visibilidade da sua marca com nossas estratégias de SEO'
    },
    {
      id:4,
      title: 'SEO',
      description: 'Apareça nas primeiras posições do Google e aumente a visibilidade da sua marca com nossas estratégias de SEO'
    },
    {
      id:5,
      title: 'Segurança Digital',
      description: 'Proteja seu site e seus dados com nossas soluções de segurança digital'
    },
    {
      id:6,
      title: 'Criação de Software',
      description: 'Desenvolvemos softwares personalizados para atender as necessidades do seu negócio'
    }
    
  ]
  
    return (
       <div className='
       h-full 
       mt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className="container mx-auto px-4">
        <h1 className='items-center justify-center text-center mb-6 text-6xl'>Serviços</h1>
        <div className="grid md:grid-cols-3 gap-8">
      
      {item.map((items) => (
        <motion.div
        key={items.id} 
        whileHover={{scale: 1.05}}
        transition={{type: "spring", stiffness: 300}}
        className="bg-gradient-to-bl from-blue-100 to-emerald-50 rounded-lg p-6">
          <div className="flex items-center mb-4">
              
            <h3 className="text-xl font-semibold ml-3">{items.title}</h3>
          </div>
          <p>{items.description}</p>
        </motion.div>
      ))}
     
    </div>
    <div className='flex items-center justify-center mt-10'>
      <Link href='/servicos'>
      <motion.button
      whileHover={{scale: 1.05}}
      transition={{ type: "spring", stiffness: 300 }}
      className='bg-emerald-300 rounded-lg ring-1 font-bold ring-emerald-300 text-black p-4 py-3'>Ver nossos trabalhos
      </motion.button>
      </Link>
    </div>
  </div>
       </div>
      );
    
}