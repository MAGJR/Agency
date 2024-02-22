"use client"
import {motion, useScroll} from 'framer-motion'
import { Brain } from '../components/Brain'
import { useRef } from 'react'

export default function AboutPage () {
    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} =useScroll({container:containerRef})

    
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
            <h1 className='font-bold text-2xl'>O que fazemos</h1>
            {/* DESCRIÇÃO O QUE FAZEMOS  */}
            <p className='text-lg'>
                Lorem ipsum dolor sit amet consectetur adipisicing 
                elit.lorem eveniet.  accusantium 
                itaque quis amet. Quo, odit.
            </p>
            {/* FILOSOFIA O QUE FAZEMOS  */}
            <span className='italic'>
                Lorem ipsum dolor sit amet consecteconsectetur atque mollitia est porro ali
            </span>
            {/* ASSINATURA O QUE FAZEMOS  */}
            <div className='self-end'></div>
            {/* SCROLL SVG  */}
            
            {/* <svg viewBox='0 0 24 24 '
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            >
            <path
            d="M5 16.8565 5.73754 18.6371 7.05029 "
            stroke='black'
            strokeWidth="2"
            >

            </path>
            </svg>*/}
            </div>
            {/* Habilidades CONTAINER */}
            <div className='flex flex-col gap-12 justify-center'>
            {/* TITULO DE HABILIDADES  */}
            <h1 className='font-bold text-2xl'>Habilidades</h1>
            {/* SKILL LIST  */}
            <div className=' flex gap-4 flex-wrap'>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>bla bla</div>
            </div>
            {/* SKILL SCROLL SVG  */}
            
            {/* <svg viewBox='0 0 24 24 '
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            >
            <path
            d="M5 16.8565 5.73754 18.6371 7.05029 "
            stroke='black'
            strokeWidth="2"
            >

            </path>
            </svg>*/}
            </div>
            {/* Experiência CONTAINER */}
            <div className='flex flex-col gap-12 justify-center pb-48 '>
            <h1 className='font-bold text-2xl'>Experiências</h1>
            {/* Experiência List */}
            <div className=''>
            {/* Experiência List item*/}
            <div className='flex justify-between h-48 lg:h-64'>
            {/* Left */}
            <div className='w-1/3 '>
            {/* Title ... */}
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Teste</div>
            {/* Description ... */}
            <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet, consectetur adipisicpsum itaque sint!</div>
            {/* Date ... */}
            <div className='p-3 text-red-400 text-sm font-semibold'>24/03</div>
            {/* Referência ... */}
            <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
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
            </div>

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
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Teste</div>
            {/* Description ... */}
            <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet, consectetur adipisicpsum itaque sint!</div>
            {/* Date ... */}
            <div className='p-3 text-red-400 text-sm font-semibold'>24/03</div>
            {/* Referência ... */}
            <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
            </div>
            </div>
            <div className='flex justify-between h-48'>
            {/* Left */}
            <div className='w-1/3 '>
            {/* Title ... */}
            <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Teste</div>
            {/* Description ... */}
            <div className='p-3 text-sm italic'>Lorem ipsum dolor sit amet, consectetur adipisicpsum itaque sint!</div>
            {/* Date ... */}
            <div className='p-3 text-red-400 text-sm font-semibold'>24/03</div>
            {/* Referência ... */}
            <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Apple</div>
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
            </div>

            </div>
            </div>

            
            </div>
            {/* SVG CONTAINER */}
            
            <div className='hidden lg:block sticky top-0 z-30 w-1/3 xl:1/2 '>

            <Brain scrollYProgress={scrollYProgress}></Brain>
            </div>

            </div>
        </motion.div>
    )
}