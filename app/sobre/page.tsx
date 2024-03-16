"use client"
import {motion, useInView, useScroll} from 'framer-motion'
import { Brain } from '../components/Brain'
import { useRef } from 'react'

export default function AboutPage () {
    const containerRef = useRef<HTMLDivElement>(null)
    const items = [
      {
        id:1,
        title: 'Facebook ads',
        
      },
      {
        id:2,
        title: 'Google ads',
      },
      {
        id:3,
        title: 'Tiktok ads'
      },
      {
        id:4,
        title: 'Criação de site'
      },
      {
        id:5,
        title: 'Criação de sistemas'
      },
      {
        id: 6,
        title: 'Proteção de dados'
      },
      {
        id: 7,
        title: 'Registro de Marca'
      }, 
      {
        id:8,
        title: 'Analytics'
      }
      
    ]
    
    const {scrollYProgress} =useScroll({container:containerRef})

    const skillRef = useRef<HTMLDivElement>(null)
    const isSkillRefInView = useInView(skillRef, {margin:"-100px" })

    const experienceRef = useRef<HTMLDivElement>(null)
    const isExperienceRefInView = useInView(experienceRef, {margin:"-100px" })
    
    return (
        <motion.div
        className='h-full'
        initial={{y: "-200vh"}}
        animate={{y: "0%"}}
        transition={{duration: 1}}
        >
            {/* CONTAINER */}
            <div className="
            h-full overflow-scroll overflow-x-hidden lg:flex" 
            
            ref={containerRef}>
            {/* TEXT CONTAINER */}
            <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>
            {/* O QUE FAZEMOS CONTAINER */}
            <div className='flex flex-col gap-12 justify-center'>
            {/* TITULO O QUE FAZEMOS  */}
            <h1 className='font-bold text-2xl'>Filosofia da Hydra</h1>
            {/* DESCRIÇÃO O QUE FAZEMOS  */}
            <p className='text-lg italic'>
            Na  <span className='text-emerald-500'>Hydra Digital</span>, inovamos com responsabilidade e ousadia. Nosso foco é transformar criatividade em resultados concretos, entregando um ROAS excepcional. Somos parceiros na jornada digital, construindo futuros audaciosos e visionários.
            </p>
            {/* FILOSOFIA O QUE FAZEMOS  */}
            <span className='italic font-serif text-emerald-600'>
            Por meio do trabalho árduo se moldam as pedras fundamentais de um império duradouro
            </span>
            {/* ASSINATURA O QUE FAZEMOS  */}
            <div className='self-end'></div>
            {/* SCROLL SVG  */}
            
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

            
            </div>
            {/* Habilidades CONTAINER */}
            <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
            {/* TITULO DE HABILIDADES  */}
            <motion.h1 
            initial={{x:"-600px"}} 
            animate={isSkillRefInView ? {x:0} : {}}
            transition={{delay:0.2}}
            className='font-bold text-2xl'>Nossa especialidade</motion.h1>
            {/* SKILL LIST  */}
            <motion.div 
            initial={{x:"-900px"}} 
            animate={isSkillRefInView ? {x:0} : {}} 
            transition={{delay:0.4}}
            className=' flex gap-4 flex-wrap'>
              {items.map((item) => (
                <div key={item.id} className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>{item.title}</div>
              ))}
            
            </motion.div>
            {/* SKILL SCROLL SVG  */}
            
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>

            </div>
            {/* Experiência CONTAINER */}
            <motion.div className='flex flex-col gap-12 justify-center pb-48 ' ref={experienceRef}>
            <motion.h1 
            initial={{x:"-900px"}} 
            animate={isExperienceRefInView ? {x:"0"} : {}} 
            transition={{delay:0.2}} 
            className='font-bold text-2xl'>
            Metodologia
            </motion.h1>
            {/* Experiência List */}
            <motion.div  
            initial={{x:"-900px"}} 
            animate={isExperienceRefInView ? {x:"0"} : {}}  className=''>
            {/* Experiência List item*/}
            <motion.div 
            initial={{x:"-900px"}} 
            animate={isExperienceRefInView ? {x:"0"} : {}}
            className='flex justify-between h-48 lg:h-64'>
            {/* Left */}
            <div className='w-1/3 '>
            {/* Title ... */}
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Público</div>
            {/* Description ... */}
            <div className='p-3 text-sm italic'></div>
            {/* Date ... */}
            <div className='p-3 text-red-400 text-sm font-semibold italic'></div>
            {/* Referência ... */}
            <div className='p-1 rounded  text-sm font-semibold w-fit'></div>
            </div>
            {/* Center*/}
            <div className='w-1/6 '>
            {/* Line */}
            <div className='w-1 h-full bg-gray-600 rounded relative'>
            {/* Line Circle */}
            <div className='absolute w-5 h-5 rounded-full ring-4 ring-emerald-500 bg-white -left-2'>
            </div>
            </div>
            </div>
           
            {/* Right */}
            <div className='w-1/3 '>
            
            </div>
            </motion.div>

            <div className='flex justify-between h-48'>
            {/* Left */}
            <div className='w-1/3 '>
            
            </div>
            {/* Center*/}
            <div className='w-1/6 '>
            {/* Line */}
            <div className='w-1 h-full bg-gray-600 rounded relative'>
            {/* Line Circle */}
            <div className='absolute w-5 h-5 rounded-full ring-4 ring-emerald-500 bg-white -left-2'>
            </div>
            </div>
            </div>
           
            {/* Right */}
            <div className='w-1/3 '>
            {/* Title ... */}
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Oferta</div>
            {/* Description ... */}
            <div className='p-3 text-sm italic'></div>
            {/* Date ... */}
            <div className='p-3 text-red-400 text-sm font-semibold'></div>
            {/* Referência ... */}
            <div className='p-1 rounded  text-sm font-semibold w-fit'></div>
            </div>
            </div>
            <div className='flex justify-between h-48'>
            {/* Left */}
            <div className='w-1/3 '>
            {/* Title ... */}
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Escala</div>
            {/* Description ... */}
            <div className='p-3 text-sm italic'></div>
            {/* Date ... */}
            <div className='p-3 text-red-400 text-sm font-semibold'></div>
            {/* Referência ... */}
            <div className='p-1 rounded  text-sm font-semibold w-fit'></div>
            </div>
            {/* Center*/}
            <div className='w-1/6 '>
            {/* Line */}
            <div className='w-1 h-full  rounded relative'>
            {/* Line Circle */}
            <div className='absolute w-5 h-5 rounded-full ring-4 ring-emerald-500 bg-white -left-2'>
            </div>
            </div>
            </div>
           
            {/* Right */}
            <div className='w-1/3 '>
            
            </div>
            </div>

            </motion.div>
            </motion.div>

            
            </div>
            {/* SVG CONTAINER */}
            
            <div className='hidden lg:block sticky top-0 z-30 w-1/3 xl:1/2 lg:ml-60'>

            <Brain scrollYProgress={scrollYProgress}></Brain>
            </div>

            </div>
        </motion.div>
    )
}