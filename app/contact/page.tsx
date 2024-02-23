"use client"

import {motion} from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


export default function ContactPage () {
    const text ="Say Hello "
    const [sucess, setSucess] = useState(false)
    const [error, setError] = useState(false)

    const form = useRef<HTMLFormElement[string]>();

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setSucess(false);
    
        emailjs
          .sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID!,
            process.env.NEXT_PUBLIC_TEMPLATE_ID!,
            form.current,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
          )
          .then(
            () => {
                setSucess(true);
              form.current.reset();
            },
            () => {
              setError(true);
            }
          );
      };
  



    return (
    <motion.div
    className='h-full'
    initial={{y: "-200vh"}}
    animate={{y: "0%"}}
    transition={{duration: 1}}
    >
        <div className='h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        {/* TEXT CONTAINER */}
        <div className='h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
            <div>
            {text.split("").map((letter, index) => (
                <motion.span 
                key={index} 
                initial={{opacity:1}} 
                animate={{opacity:0}} 
                transition={{duration:3, repeat:Infinity, delay: index*0.1}}
                >
                {letter}
                </motion.span>
            ))}
            😊
            </div>
        </div>
        {/* FORM CONTAINER */}
        <form 
        onSubmit={sendEmail}
        ref={form} 
        className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-10'>
            <span>Dear Hydra,</span>
            <textarea 
            placeholder="digite sua mensagem" 
            rows={6} 
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name="user_message"
            />
            <span>Endereço de e-mail</span>
            <input 
            type='text' 
            name="user_email"
            placeholder='e-mail' 
            className='bg-transparent border-b-2 border-b-black outline-none ' 
            />
            <span>Regards</span>
            <button className='bg-emerald-300 rounded font-semibold text-gray-600 p-4'>Enviar</button>
            {sucess && <span className='text-green-600 font-semibold'> Sua mensagem foi enviada!</span>}
            {error && <span className='text-red-600 font-semibold'> Alguma coisa deu errada, tente novamente</span>}
        </form>
        </div>
    </motion.div>
)
}