
import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import { DarkThemeContext } from './context/DarkThemeContext'


function App() {
 
  const [isDark,setIsDark] = useState("dark")

  return (
    <DarkThemeContext value={{isDark,setIsDark}}>
    <div className={`bg-gray-500/20 dark:bg-black/90 min-h-screen ${isDark}`}>
       <Landing/>
    </div>

    </DarkThemeContext>
  )
}

export default App
