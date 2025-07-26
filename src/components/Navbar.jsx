import React, { useContext } from 'react'
import { FaGithub } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6"
import { DarkThemeContext } from '../context/DarkThemeContext';
import { FaMoon } from "react-icons/fa";

function Navbar() {
  const {isDark,setIsDark} = useContext(DarkThemeContext)

  const toggleDarkTheme  = () =>{
    if(isDark === "dark"){
      setIsDark("")
    }else{
      setIsDark("dark")
    }
  }

  return (
     <div className='flex py-3 justify-center dark:text-white'>
        <div className='flex px-2 fixed max-w-[340px] md:max-w-4xl w-full justify-between bg-white/85 dark:bg-white/30 backdrop-blur-lg rounded-sm items-center shadow-lg py-1  '>
            <div>
              <img src='/profileCat.jpg' className='h-[29px] w-[29px] rounded-full  '/>
            </div>
            <div className='flex gap-x-4 md:gap-x-6 items-center '>
               
                <div onClick={toggleDarkTheme} className='cursor-pointer'>
                  {
                    isDark === "dark"?<FaMoon size={20} />:<FiSun size={20} /> 
                  }
                   
                   </div>
                <div className='cursor-pointer'> <FaGithub size={20}/></div>
                <div className='cursor-pointer'> <FaXTwitter size={20} /></div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar