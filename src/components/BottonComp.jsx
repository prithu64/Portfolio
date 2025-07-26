import { FaGithub } from "react-icons/fa6";

function BottonComp() {
  return (
    <div className="text-xs flex justify-center items-center dark:text-white/50 gap-2 m-5 ">
      <span>By <span className="underline text-blue-700 dark:text-white">Prachurjya Goswami</span><span className="dark:text-white"> ✨ </span>the repo on GitHub</span>
      <a
        href="https://github.com/prithu64/Portfolio"
        target="_blank"
        className="flex items-center gap-1 text-blue-600 dark:text-white hover:underline"
      >
         <FaGithub size={15}/>
      </a>
    </div>
  )
}

export default BottonComp