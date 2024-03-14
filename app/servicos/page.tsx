"use client"
import {motion, useScroll, useTransform} from 'framer-motion'
import { useRef } from 'react'
import BrendaImg from '@/public/FotoImgBrenda.png'
import MarcoImg from '@/public/MarcoImg.png'
import LucasImg from '@/public/LucasImg.png'
import Image from 'next/image';
import Link from 'next/link';

const items = [
    {
      id: 1,
      imgWidth: 585,
      imgHeight: 700,
      color: "from-emerald-300 to-blue-300",
      title: "Brenda Mazetto",
      desc: "Brenda é uma profissional versátil com habilidades excepcionais em marketing e vendas. Sua expertise em criar campanhas comerciais eficazes a torna uma peça fundamental para qualquer equipe buscando maximizar seu alcance no mercado",
      img: BrendaImg,
      link: "",
    },
    {
      id: 2,
      imgWidth: 585,
      imgHeight: 700,
      color: "from-blue-300 to-green-300",
      title: "Marco Antonio Gonzales ",
      desc: "Marco é Desenvolvedor Full Stack com expertise em Google Ads, especializado em criar soluções inovadoras e otimizar campanhas publicitárias para maximizar o ROI .",
      img: MarcoImg,
      link: "",
    },
    {
      id: 3,
      imgWidth: 585,
      imgHeight: 700,
      color: "from-green-300 to-blue-300",
      title: "Lucas Castilho",
      desc: "Lucas é um gestor de Meta ads, especialista em Analytics, desenvolvedor de sites e segurança digital. Com uma abordagem inovadora, ele ajuda a maximizar a eficácia das campanhas online ",
      img: LucasImg,
      link: "",
    },
    
  ];


export default function Servicos () {
    const ref = useRef<HTMLDivElement>(null)
    
    const {scrollYProgress} = useScroll({target:ref})
    const x = useTransform(scrollYProgress, [0, 1], ["0%","-75%"]);

    return (
        <motion.div 
        initial={{}}
        animate={{}}
        transition={{}}
        className="">
        <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center  text-8xl text-center'>
          <h1 className='text-6xl font-semibold '>Nossa Equipe</h1>
          
          </div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
          <motion.div style={{ x }} className='flex'>
          <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-emerald-300 to-blue-200' />

          
          {items.map(item => (
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={item.id}>
          <div className='flex flex-col gap-8 text-black'>
          <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl' >{item.title}</h1>
          <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[700px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
          <Image 
          src={item.img} 
          height={item.imgHeight}
          width={item.imgWidth}
          className="rounded-full"
          alt="" 
          />
          </div>
          <p className='w-80 md:w96 lg:w-[600px] lg:text-lg xl:w-[600px] lg:mb-10'>{item.desc}</p>
          <Link href={item.link} className='flex justify-end'>
            </Link>
          </div>
          </div>))}
            </motion.div>
            </div>
        </div>
            <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center mt-36'>
              <h1 className='text-6xl  '>Você tem algum projeto?</h1>
              <div className='relative '>
              <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Hydra-Digital hydrinha es as Designer
              </textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className='w-16 h-16 md:w-28  absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center'>
            contate
            </Link>
              </div>
            </div>
        
        </motion.div>
    )
}