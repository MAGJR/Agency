import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


export function SectionHome () {
    const containerRef = useRef<HTMLDivElement>(null)  
    const descriptionRef = useRef<HTMLDivElement>(null)
    const isDescriptionRefInView = useInView(descriptionRef, {margin:"-20px"})   
    
    return (
<div className="bg-gradient-to-b
        text-black
        from-blue-100
        to-emerald-100  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48"
        ref={containerRef}
        >
      {/* Text container */}
      <motion.div 
      className="w-full p-12" 
      ref={descriptionRef}
      >
        <motion.p 
        initial={{x:"-500px"}}
        animate={isDescriptionRefInView ? {x:0} : {}}
        transition={{delay:0.2}}
        className="text-sm uppercase tracking-wide"
        >#1 Ecommerce Social Media Agency
        </motion.p>
        <motion.h1 
        initial={{x:"-1000px"}}
        animate={isDescriptionRefInView ? {x:0} : {}}
        transition={{delay:0.3, duration:0.5}}
        className="text-4xl font-bold my-4"
        >
         Explicação da Empresa
        </motion.h1>
        <motion.p 
        initial={{x:"-1000px"}}
        animate={isDescriptionRefInView ? {x:0} : {}}
        transition={{delay:0.4, duration:0.5}}
        className="mb-4 ">
          We run ads on multiple SoMe platforms including Facebook, Instagram, TikTok & YouTube.
          as re highly specialized in what we do, and have spent more than $25M on ads on behalf of
          our clients throughout the last 5 years Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsa delectus omnis animi ad repudiandae, porro beatae temporibus reiciendis, optio, suscipit facere inventore? Sunt repudiandae perferendis iure quos molestiae velit?.
        </motion.p>
        <button className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Book a free call
        </button>
        <div className="flex items-center mt-4">
          <p className="text-sm mr-2">Excellent</p>
          <div className="flex lg:ml-80 mt-10">
            {/* Stars go here, repeating 5 times for 5 stars */}
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
        </div>
        
      </motion.div>
      
      {/* Image container */}
      <div className="  ">
      
        <div className="relative h-full">
          
        </div>
      </div>
    </div>
    )
}