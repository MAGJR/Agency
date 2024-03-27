"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../../public/instagram.png'
import { NavLink } from '../NavLink';
import {motion} from 'framer-motion'


    const links= [
    {url: '/', title: "Home"},
    {url: '/sobre', title: "Sobre"},
    {url: '/equipe', title: "Equipe"},
    {url: '/contato', title: "Contato"},
    
]
export function NavBar () {
    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: {
            rotate:0,
        },
        opened: {
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    const centerVariants = {
        closed: {
            opacity:1,
        },
        opened: {
            opacity:0,
        }
    }

    const bottomVariants = {
        closed: {
            rotate:0,
        },
        opened: {
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    const listVariants = {
        closed: {
        x:"100vw"
        },
        opened: {
        x:0,
        transition: {
        when:"beforeChildren",
            staggerChildren:0.2,
        }
        }
    }

    const listItemVariants = {
        closed: {
            x:-10,
            opacity:0
        },
        opened: {
            x:0,
            opacity:1
        }
    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl' >
            <div className='hidden md:flex gap-4 w-1/3'>
                {/*LINKS */}
                {links.map((link) => (
                    <NavLink link={link} key={link.title}/>
                ))}
            </div>
            {/*Logo */}
            <div className='md:hidden lg:flex xl:w-1/3 justify-center'>
            <Link href="/" className='text-sm bg-black text-w rounded-md p-1 font-semibold'>
                <span className='text-white'>Hydra</span>
                <span className='w-12 h-8 rounded bg-white text-black'>.mkt</span>
            </Link>
            </div>
            {/*Responsive Menu */}
            <div className='md:hidden md:flex gap-4 w-1/3'>
                {/* SOCIAL
                <div className=''>
                    <Link href='#'>
                    <Image src={Logo} alt="logo instagram" width={24} height={24}/>
                    </Link>
                </div>
                */}
            {/*MENU BUTTON*/}
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() =>setOpen(prev=> !prev)}>
                <motion.div 
                variants={topVariants}
                animate={open ? "opened" : "closed"} 
                className='w-10 h-1 bg-black rounded origin-left'>

                </motion.div>
                <motion.div 
                variants={centerVariants}
                animate={open ? "opened" : "closed"} 
                className='w-10 h-1 bg-black rounded'>
                
                </motion.div>
                <motion.div variants={bottomVariants}
                animate={open ? "opened" : "closed"} 
                className='w-10 h-1 bg-black rounded origin-left'>

                </motion.div>
            </button>
            {/*MENU LIST*/}


            { open && 

            <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
            {links.map(link => (
                <motion.div variants={listItemVariants} className='' key={link.title}>
                <Link href={link.url} >{link.title}</Link>
                </motion.div>
            ))}
            </motion.div>
            }
            </div> 
        </div>
    )
}