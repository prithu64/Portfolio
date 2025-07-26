import React from 'react'
import { MdContentCopy } from "react-icons/md";

function Greetings() {
 
   const handleEmailCopy = async()=>{
    try {
        await navigator.clipboard.writeText("prachurjyagos@gmail.com")
        alert("Email copied")
    } catch (error) {
        console.log("failed to copy",error)
        alert("Copy failed")
    }
   } 

  return (
    <div className='flex flex-col mx-auto max-w-4xl py-10 text-center mt-15 space-y-3'>
        <div className=' font-press font-bold text-sm'>
            <h1>SUP,I'M PRACHURJYA</h1>
        </div>
        <div>
            <h1>{"{ Software Developer }"}</h1>
        </div>
         <div className='font-semibold max-w-2xs mx-auto md:max-w-xl text-sm'>
            <p>A rookie software developer ...heading for the pro tag. Based in India , I love watching movies , listeninig to music and code (sometimes) .</p>
        </div>
        <div className='flex text-blue-600 dark:text-white/60  mx-auto gap-x-2'>
            <h1 className='underline text-blue-500'>Email</h1>
            <button onClick={handleEmailCopy} className='cursor-pointer text-black/60 dark:text-white/60'><MdContentCopy size={15}/></button>
        </div>
    </div>
  )
}

export default Greetings