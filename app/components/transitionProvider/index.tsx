"use client"
import { AnimatePresence} from "framer-motion"
import {motion} from 'framer-motion'

import { NavBar } from "../Navbar"
import { usePathname } from "next/navigation"

import React from "react"

type TransitionProviderProps = {
  children: React.ReactNode
}

export function TransitionProvider ({children}:TransitionProviderProps) {
    const pathName = usePathname()
    return (
        <AnimatePresence mode="wait">
            <div key={pathName} 
            className="
            w-screen 
            h-screen 
            scrollbar-
            bg-gradient-to-b
             text-black
             from-emerald-100
             to-blue-100">
            <motion.div 
            className="
            scrollbar-thumb-emerald-400
            h-screen
            w-screen 
            fixed
          bg-black 
            rounded-b-[100px] z-40" 
            animate={{height:"0vh"}} 
            exit={{height:"140vh"}}
            transition={{duration:0.5, ease:"easeOut"}} 
            />
            
            <motion.div 
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl 
              cursor-default w-fit h-fit bg-black z-50" 
            initial={{opacity:1}} 
            animate={{opacity:0}}
            exit={{opacity:0}}
            transition={{duration:0.8, ease:"easeOut"}} 
            >
            {pathName.substring(1)}
            </motion.div>
            <motion.div 
            className="h-screen w-screen fixed
             bg-black 
             rounded-t-[100px] 
             bottom-0 z-30" 
            initial={{height:"140vh"}} 
            animate={{height:"0vh", transition:{delay:0.5}}}
            exit={{height:0}}
            />
        <div className="h-24">
      <NavBar />
        </div>
      <div className="h-[calc(100vh-6rem)]">{children}
      </div>
      </div>
        </AnimatePresence>
    )
}