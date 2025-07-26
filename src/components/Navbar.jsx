import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6"

function Navbar() {
  return (
     <div className='flex py-3 justify-center'>
        <div className='flex px-2 fixed max-w-[340px] md:max-w-4xl w-full justify-between bg-white/85 rounded-xs items-center shadow-lg py-2  '>
            <div>Prachurjya Goswami</div>
            <div className='flex gap-x-3 items-center '>
                <div className='cursor-pointer'> <FiSun size={20} /></div>
                <div className='cursor-pointer'> <FaGithub size={20}/></div>
                <div className='cursor-pointer'> <FaXTwitter size={20} /></div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar