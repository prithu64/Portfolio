import { FaGithub } from "react-icons/fa6";

function BottonComp() {
  return (
    <div className="text-xs flex justify-center items-center gap-2 m-5 ">
      <span>By <span className="underline text-blue-700">Prachurjya Goswami</span> ✨ the repo on GitHub</span>
      <a
        href="https://github.com/YOUR_USERNAME/YOUR_REPO"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-blue-600 hover:underline"
      >
         <FaGithub size={15}/>
      </a>
    </div>
  )
}

export default BottonComp