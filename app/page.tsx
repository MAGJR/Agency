"use client"
import Image from "next/image";
import HomeImg from '../public/Home.png'
import Link from "next/link";

import { useRef } from "react";
import { FlagIcon } from "./components/icon/flag";
import { SectionHome } from "./components/SectionHome";
import { ResultsIcon } from "./components/icon/results";
import { SectionHydra } from "./components/SectionHydra";
import { CampaingIcon } from "./components/icon/campaings";
import { SectionServices } from "./components/Section Services";
import { SectionFilosofia } from "./components/SectionFilosofia";
import {motion, useInView} from 'framer-motion'

export default function Home() {
 const containerRef = useRef<HTMLDivElement>(null);
 const descriptionRef = useRef<HTMLDivElement>(null);

 const items = [
  {
    id:1,
    title: 'Strategy',
    description: 'Analisamos a história da sua marca e traçamos uma estratégia que esteja em harmonia com a sua marca.',
    component: <FlagIcon />
  },
  {
    id:2,
    title: 'Campaigns',
    description: 'Criamos, executamos, otimizamos e dimensionamos campanhas que vendem seu produto com eficiência.',
    component: <CampaingIcon />
  },
  {
    id:3,
    title: 'Results',
    description: 'Sempre nos esforçamos para alcançar um ROI de 4x+ - mas muitas vezes entregamos resultados muito além disso.',
    component: <ResultsIcon />
  }
] 

 const isDescriptionInView = useInView(descriptionRef, {margin:"-150px"})

  return (
    
    <motion.div
    className="h-full w-full overflow-scroll overflow-x-hidden"
    initial={{ y: "-100vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
  >
    <div className="h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12  ">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src={HomeImg} alt="Home image" fill className="object-contain" />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl font-bold mt-10 ">Hydra Marketing</h1>
        <p className="text-lg lg:text-xl">
          Pare de desperdiçar tempo e dinheiro em campanhas publicitárias defeituosas e ineficazes.
        </p>
        <p>
          É hora de fazer valer seu orçamento de publicidade, expandir seus negócios e aumentar suas vendas.
        </p>
        <div className="lg:w-full flex gap-4">
          <Link href="/equipe">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4 rounded-lg ring-1 ring-emerald-300 bg-emerald-300 font-bold"
            >
              Conheça sobre nós
            </motion.button>
          </Link>
          <Link href="/contato">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-4 rounded-lg ring-1 ring-black bg-white font-bold"
            >
              Contate
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
    <div>
    </div>
    <div>
      <SectionHome/>
      <SectionFilosofia />
      <SectionHydra />
      <SectionServices/>
    </div>
      
    
    
  </motion.div>
  );
}